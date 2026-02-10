import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Globe,
  Smartphone,
  Shield,
  Database,
  Cloud,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Code,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for scalability and performance",
    features: [
      "Responsive design for all devices",
      "React & Next.js applications",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications that engage and delight users",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Offline functionality",
      "Push notifications & real-time sync",
    ],
    color: "from-emerald-600 to-green-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description:
      "Bank-level security assessments and implementation for maximum data protection",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Compliance & certification",
      "24/7 security monitoring",
    ],
    color: "from-red-600 to-pink-500",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions and APIs that power your business operations",
    features: [
      "RESTful & GraphQL APIs",
      "Database design & optimization",
      "Microservices architecture",
      "Real-time communication systems",
    ],
    color: "from-purple-600 to-indigo-500",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud & DevOps",
    description:
      "Deployment, infrastructure management, and continuous optimization for growth",
    features: [
      "Cloud infrastructure setup",
      "CI/CD pipeline configuration",
      "Docker & Kubernetes",
      "Performance optimization",
    ],
    color: "from-cyan-600 to-blue-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Strategic Consulting",
    description:
      "Technology guidance and strategic planning from industry experts and thought leaders",
    features: [
      "Technology stack selection",
      "Architecture planning",
      "Code reviews & audits",
      "Team training & mentoring",
    ],
    color: "from-orange-600 to-amber-500",
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
            Our Expertise
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to propel your business forward
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A transparent, collaborative approach to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals, challenges, and vision",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Developing a comprehensive roadmap and technical plan",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Building your solution with regular updates and feedback",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Launch, monitoring, and continuous improvement",
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
                  <p className="text-center text-gray-600 dark:text-gray-400">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 rounded-lg"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
