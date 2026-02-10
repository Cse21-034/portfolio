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
              <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                Enterprise Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Premium Web Solutions for <span className="text-amber-600 dark:text-amber-400">Ambitious</span> Ventures
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transform your vision into reality with world-class web development and digital strategy designed for investors, enterprises, and visionary leaders.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Award-winning development team with proven track record",
                  "Enterprise-grade security and scalability",
                  "Data-driven solutions that drive business growth",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setLocation("/services")}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 rounded-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setLocation("/contact")}
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-lg border-2 border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/40 rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
                <div className="space-y-6">
                  {[
                    { number: "50+", label: "Successful Projects" },
                    { number: "100+", label: "Satisfied Clients" },
                    { number: "15+", label: "Years Experience" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                      <div>
                        <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{stat.number}</div>
                        <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                      <TrendingUp className="h-8 w-8 text-amber-600 dark:text-amber-400" />
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
            <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              What We Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to launch, we deliver complete solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Custom websites and applications built with cutting-edge technology",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Enterprise Security",
                description: "Bank-level security for your digital assets and customer data",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Consulting",
                description: "Strategic guidance from industry veterans and thought leaders",
              },
            ].map((service, i) => (
              <Card key={i} className="border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 text-amber-600 dark:text-amber-400">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setLocation("/services")}
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 rounded-lg"
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
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-900 dark:to-amber-950 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-amber-100 mb-8 text-lg">
              Get exclusive tips, trends, and opportunities delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg flex-1"
                required
              />
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-6 rounded-lg"
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
