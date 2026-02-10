import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Thank you for your message. We'll get back to you shortly!",
      });
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're excited to hear about your project. Reach out and let's discuss how we can help
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:leatilemanando@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      leatilemanando@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Molepolole, Botswana
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                      Phone
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Optional phone number"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this about?"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      required
                      className="mt-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Response CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-900 dark:to-amber-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Response within 24 Hours
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            We're committed to responding to all inquiries promptly. Your project deserves our attention.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
