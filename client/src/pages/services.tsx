import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [];

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
            Professional Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Services & Solutions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology services to help your business innovate, scale, and succeed in the digital era.
          </p>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto">
          {/* Value Added Services */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Value Added Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Comprehensive business solutions to enhance your online presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Basic Package",
                  price: "P100–500",
                  period: "p/m",
                  description: "Essential features to get started",
                  features: [
                    "Free membership on the online directory",
                    "Free business advertisement",
                    "Unlimited photos under business profile",
                    "eCommerce portal for online transactions",
                    "2 free products listings",
                    "Business domain & emails (1-5)",
                    "Cloud storage (30GB per user)",
                    "Free training for up to 3 users"
                  ],
                },
                {
                  name: "Professional Package",
                  price: "P1,000",
                  period: "p/m",
                  description: "Enhanced with social media features",
                  popular: true,
                  features: [
                    "All Basic Package features",
                    "Cloud storage (1TB per user)",
                    "WhatsApp for Business integration",
                    "Social Media Business Pages (2 platforms)",
                    "Page design & branding",
                    "2 flyer designs per month",
                    "1 social media marketing advert",
                    "24/7 support"
                  ],
                },
              ].map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`border backdrop-blur-lg transition-all duration-300 ${
                    pkg.popular 
                      ? 'border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5 ring-2 ring-black dark:ring-white' 
                      : 'border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30'
                  }`}
                >
                  <CardContent className="p-8">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-black text-white dark:bg-white dark:text-black">Most Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-black dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">
                        {pkg.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-black dark:text-white flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100" : "w-full bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900"}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Web Development Packages */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Web Development
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Professional websites tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Informational Website",
                  price: "P3,500",
                  period: "one-time",
                  description: "Basic business information website",
                  paymentPlan: "Deposit: BWP1,500 + BWP550/month (6 months)",
                  features: [
                    "Business information",
                    "Contact details & forms",
                    "Google map embedded",
                    "Social media links",
                    "Web hosting",
                    "SEO/SEM optimization"
                  ],
                },
                {
                  name: "CRM Website",
                  price: "P4,500",
                  period: "one-time",
                  description: "Customer Relationship Management",
                  paymentPlan: "Deposit: BWP1,500 + BWP600/month (6 months)",
                  popular: true,
                  features: [
                    "Lead management",
                    "Contact management",
                    "Email system integration",
                    "Reporting & analytics",
                    "Database management",
                    "Document management"
                  ],
                },
                {
                  name: "E-commerce Website",
                  price: "P5,500",
                  period: "one-time",
                  description: "Complete online store solution",
                  paymentPlan: "Deposit: BWP2,500 + BWP1,600/month (6 months)",
                  features: [
                    "Fully functional store",
                    "Multiple payment options",
                    "Email marketing",
                    "Promotion & discount tools",
                    "SEO capabilities",
                    "Advanced reporting"
                  ],
                },
              ].map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`border backdrop-blur-lg transition-all duration-300 ${pkg.popular ? 'border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5 ring-2 ring-black dark:ring-white md:scale-105' : 'border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30'}`}
                >
                  <CardContent className="p-8">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-black text-white dark:bg-white dark:text-black">Most Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-black dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                    <div className="mb-6 p-3 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-black/10 dark:border-white/10">
                      <p className="text-xs font-semibold text-black dark:text-white mb-1">
                        Payment Plan:
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        {pkg.paymentPlan}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-black dark:text-white flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100" : "w-full bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900"}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Branding Suite Packages */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Branding Suite
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Complete branding solutions to establish your business identity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Starter",
                  price: "P950",
                  period: "one-time",
                  features: ["Logo design", "Business card", "Business profile", "Letterhead"]
                },
                {
                  name: "Professional",
                  price: "P1,900",
                  period: "one-time",
                  features: ["Banner design", "Logo design", "Business card", "Profile", "Letterhead", "Brochure", "Invoice"]
                },
                {
                  name: "Complete",
                  price: "P2,400",
                  period: "one-time",
                  features: ["Banner & Logo", "Business card", "Flyers & Letterhead", "Posters", "Brochure", "Invoice", "Quotation book", "Social media cover"]
                },
                {
                  name: "Premium",
                  price: "P5,000",
                  period: "one-time",
                  popular: true,
                  features: ["All Complete items", "Professional printing", "Free delivery", "Brand guidelines", "Social media assets", "Email signature", "Website mockup"]
                },
              ].map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`border backdrop-blur-lg transition-all duration-300 ${pkg.popular ? 'border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5 ring-2 ring-black dark:ring-white' : 'border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30'}`}
                >
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-black text-white dark:bg-white dark:text-black text-xs">Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-black dark:text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-black dark:text-white flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 text-sm" : "w-full text-sm bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900"}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Marketing Packages */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                Social Media Marketing
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Boost your social media presence with expert management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Facebook Setup",
                  price: "P650",
                  period: "one-time",
                  platform: "Facebook",
                  features: ["Business page creation", "Profile optimization", "Cover design", "Initial setup"]
                },
                {
                  name: "Facebook Mgmt",
                  price: "P1,200",
                  period: "p/m",
                  platform: "Facebook",
                  features: ["Page management", "1 weekly post", "1 sponsored post/month", "Reach up to 7,000", "Analytics reports", "Engagement monitoring"]
                },
                {
                  name: "Multi-Platform",
                  price: "P2,300",
                  period: "p/m",
                  platform: "Facebook & Instagram",
                  popular: true,
                  features: ["Both platform setup", "2 weekly posts", "2 sponsored posts/month", "Reach 14,000+ users", "Video content (30sec)", "Advanced analytics", "24/7 management"]
                },
                {
                  name: "Full Suite",
                  price: "P3,500",
                  period: "p/m",
                  platform: "All Platforms",
                  features: ["Facebook, Instagram, Twitter", "Daily content updates", "2 sponsored posts", "14,000+ reach", "Video creation", "Community management", "Monthly reports"]
                },
              ].map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`border backdrop-blur-lg transition-all duration-300 ${pkg.popular ? 'border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5 ring-2 ring-black dark:ring-white' : 'border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30'}`}
                >
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-black text-white dark:bg-white dark:text-black text-xs">Popular</Badge>
                      </div>
                    )}
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs border-black/20 dark:border-white/20 text-black dark:text-white">
                        {pkg.platform}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-black dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-black dark:text-white flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 text-sm" : "w-full text-sm bg-white text-black border border-black dark:bg-black dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900"}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              A transparent, collaborative approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understand your goals, challenges, and vision for the project",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Create a detailed roadmap and technical architecture",
              },
              {
                step: "03",
                title: "Development",
                desc: "Build your solution with clean code and best practices",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Deploy, test, and provide ongoing support",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-black dark:text-white text-center mb-2">
                    {item.title}
                  </h4>
                  <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-black dark:bg-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Why Work With Me
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Proven expertise in delivering high-quality solutions that drive real business value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experience",
                description:
                  "Years of experience building scalable solutions for diverse industries and project sizes",
              },
              {
                title: "Quality",
                description:
                  "Clean, maintainable code following industry best practices and design patterns",
              },
              {
                title: "Communication",
                description:
                  "Transparent communication throughout the project lifecycle with regular updates",
              },
              {
                title: "Performance",
                description:
                  "Optimized solutions that are fast, secure, and built for growth",
              },
              {
                title: "Support",
                description:
                  "Ongoing support and maintenance to ensure your application runs smoothly",
              },
              {
                title: "Innovation",
                description:
                  "Staying current with latest technologies and best practices in the industry",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-black dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how I can help bring your project to life. Get in touch to schedule a consultation.
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How do I choose the right package?",
                a: "It depends on your business needs and budget. Contact us for a free consultation where we'll recommend the best package for your specific requirements.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Most projects take 4-8 weeks from start to finish. We'll provide you with a detailed timeline during the discovery phase.",
              },
              {
                q: "Do you offer custom solutions?",
                a: "Yes! Our listed packages are starting points. We can customize any package to meet your specific needs and budget.",
              },
              {
                q: "Is there a contract for monthly services?",
                a: "Our monthly services are flexible with no long-term contracts. You can cancel or modify your plan as needed.",
              },
              {
                q: "Do you provide support after setup?",
                a: "Yes! All our packages include support. Higher-tier packages include more comprehensive support options.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely! You can upgrade or downgrade your package at any time. Changes will be reflected in your next billing cycle.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-colors"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-black dark:text-white mb-3">
                    {faq.q}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
