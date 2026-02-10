import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

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
