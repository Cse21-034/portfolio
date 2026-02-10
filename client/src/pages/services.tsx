import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Globe,
  Smartphone,
  Code,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern technologies like React, TypeScript, and Node.js. Responsive, scalable, and optimized for performance.",
    features: [
      "React & Next.js applications",
      "Responsive design for all devices",
      "API development & integration",
      "Database design & optimization",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Solutions",
    description:
      "Cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.",
    features: [
      "React Native development",
      "Native iOS & Android apps",
      "Mobile-first design",
      "Offline functionality",
    ],
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions and RESTful APIs that power your applications with security and reliability.",
    features: [
      "Node.js & Express backends",
      "RESTful & GraphQL APIs",
      "Database architecture",
      "Cloud deployment",
    ],
    color: "from-purple-600 to-indigo-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security & DevOps",
    description:
      "Implement best practices for security, continuous integration, and deployment to keep your applications safe and up-to-date.",
    features: [
      "Security audits & testing",
      "CI/CD pipeline setup",
      "Docker & containerization",
      "Infrastructure management",
    ],
    color: "from-red-600 to-pink-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "Analyze, optimize, and enhance your application's performance to deliver lightning-fast experiences to your users.",
    features: [
      "Code optimization",
      "Database indexing",
      "Caching strategies",
      "Load testing & monitoring",
    ],
    color: "from-orange-600 to-amber-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Technical Consulting",
    description:
      "Strategic guidance on technology selection, architecture design, and best practices for your project or business.",
    features: [
      "Technology stack recommendations",
      "Architecture planning",
      "Code reviews & audits",
      "Team mentoring",
    ],
    color: "from-yellow-600 to-orange-500",
  },
];

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
            Professional Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology services to help your business innovate, scale, and succeed in the digital era.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}
                  >
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => setLocation("/contact")}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          {/* Value Added Services */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Value Added Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
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
                  className={`border-2 ${pkg.popular ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-600' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  <CardContent className="p-8">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-amber-600 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {pkg.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-amber-600 hover:bg-amber-700 text-white" : "w-full"}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
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
                  className={`border-2 ${pkg.popular ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-600 md:scale-105' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  <CardContent className="p-8">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-amber-600 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{pkg.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                    <div className="mb-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Payment Plan:
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {pkg.paymentPlan}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-amber-600 hover:bg-amber-700 text-white" : "w-full"}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Branding Suite
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
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
                  className={`border-2 ${pkg.popular ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-600' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-amber-600 text-white text-xs">Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-amber-600 hover:bg-amber-700 text-white text-sm" : "w-full text-sm"}
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Social Media Marketing
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
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
                  className={`border-2 ${pkg.popular ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-600' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  <CardContent className="p-6">
                    {pkg.popular && (
                      <div className="mb-4">
                        <Badge className="bg-amber-600 text-white text-xs">Popular</Badge>
                      </div>
                    )}
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {pkg.platform}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => setLocation("/contact")}
                      className={pkg.popular ? "w-full bg-amber-600 hover:bg-amber-700 text-white text-sm" : "w-full text-sm"}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              How We Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    {item.title}
                  </h4>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-amber-600 dark:bg-amber-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                className="border border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how I can help bring your project to life. Get in touch to schedule a consultation.
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 rounded-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
