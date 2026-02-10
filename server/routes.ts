import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint with Resend email
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // Send email notification using Resend
      try {
        await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>",
          to: "leatilemanando@gmail.com",
          subject: `New Contact: ${validatedData.subject}`,
          html: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        });

        // Send confirmation email to user
        await resend.emails.send({
          from: "Leatile Mosimanyana <onboarding@resend.dev>",
          to: validatedData.email,
          subject: "We received your message",
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>Best regards,<br>Leatile Mosimanyana</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue even if email fails
      }

      res.json({ success: true, message: "Message sent successfully!", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);

      // Send welcome email using Resend
      try {
        await resend.emails.send({
          from: "Newsletter <onboarding@resend.dev>",
          to: validatedData.email,
          subject: "Welcome to our newsletter!",
          html: `
            <h2>Welcome!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>You'll now receive exclusive insights, industry trends, and opportunities delivered to your inbox.</p>
            <p>Best regards,<br>Leatile Mosimanyana</p>
          `,
        });
      } catch (emailError) {
        console.error("Welcome email failed:", emailError);
      }

      res.json({
        success: true,
        message: "Successfully subscribed to newsletter!",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid email address",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to subscribe. Please try again.",
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contacts",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
