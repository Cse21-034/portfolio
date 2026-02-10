import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { ArrowRight, CheckCircle, TrendingUp, Users, Code, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function EnterpriseHome() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to subscribe",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
                Freelance Web Developer
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                Hi, I'm <span className="text-black dark:text-white">Leatile</span> Mosimanyana
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                A full-stack web developer offering comprehensive digital solutions. I create custom websites, web applications, and digital strategies that help businesses scale and succeed in the digital landscape.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Award-winning development team with proven track record",
                  "Enterprise-grade security and scalability",
                  "Data-driven solutions that drive business growth",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setLocation("/services")}
                  className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setLocation("/contact")}
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-lg border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/10 dark:from-white/10 dark:to-white/10 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 rounded-2xl p-8 border border-black/20 dark:border-white/20 backdrop-blur-lg">
                <div className="space-y-6">
                  {[
                    { number: "50+", label: "Successful Projects" },
                    { number: "100+", label: "Satisfied Clients" },
                    { number: "15+", label: "Years Experience" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg backdrop-blur-sm">
                      <div>
                        <div className="text-3xl font-bold text-black dark:text-white">{stat.number}</div>
                        <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
                      </div>
                      <TrendingUp className="h-8 w-8 text-black dark:text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
              My Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Professional freelance services tailored to your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Custom websites, web apps, and SaaS platforms built with React, Node.js, and modern frameworks",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Full-Stack Solutions",
                description: "End-to-end development from frontend UI to backend infrastructure and deployment",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Digital Consulting",
                description: "Strategic advice on technology choices, architecture, and business growth through digital solutions",
              },
            ].map((service, i) => (
              <Card key={i} className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 text-black dark:text-white">{service.icon}</div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setLocation("/services")}
              className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-black to-gray-900 dark:from-white dark:to-gray-200 rounded-2xl p-12 text-center backdrop-blur-lg border border-black/20 dark:border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-gray-200 dark:text-gray-700 mb-8 text-lg">
              Get exclusive tips, trends, and opportunities delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg flex-1 bg-white dark:bg-black text-black dark:text-white border-black/20 dark:border-white/20"
                required
              />
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 font-semibold px-6 rounded-lg"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Leatile Mosimanyana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
