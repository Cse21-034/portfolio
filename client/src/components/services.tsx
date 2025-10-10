import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe,
  Smartphone,
  Shield,
  Database,
  Cloud,
  Code,
  Users,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive design for all devices",
        "React & Next.js applications",
        "E-commerce platforms",
        "Content management systems"
      ],
      color: "blue",
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "Android app development",
        "Cross-platform solutions",
        "Offline functionality",
        "Push notifications & real-time updates"
      ],
      color: "green",
      tags: ["Java", "React Native", "Firebase"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      description: "Security assessments and implementation",
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits",
        "Best practices implementation"
      ],
      color: "red",
      tags: ["Security", "Testing", "Auditing"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs",
      features: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication systems",
        "Real-time communication"
      ],
      color: "purple",
      tags: ["Node.js", "PostgreSQL", "Express"]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      description: "Deployment and infrastructure management",
      features: [
        "Cloud deployment setup",
        "CI/CD pipeline configuration",
        "Docker containerization",
        "Performance optimization"
      ],
      color: "cyan",
      tags: ["Vercel", "Docker", "Render"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "IT Consulting",
      description: "Technical guidance and project planning",
      features: [
        "Technology stack selection",
        "Architecture planning",
        "Code reviews",
        "Team mentoring"
      ],
      color: "orange",
      tags: ["Consulting", "Strategy", "Mentoring"]
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    cyan: "bg-cyan-500",
    orange: "bg-orange-500"
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-blue-500 text-white">What I Offer</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive tech solutions from development to deployment
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-900 hover:shadow-xl"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center text-white mb-6`}>
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
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How I Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Simple, transparent process from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial discussion about your project", icon: <Users className="h-5 w-5" /> },
              { step: "02", title: "Planning", desc: "Define requirements and create timeline", icon: <Code className="h-5 w-5" /> },
              { step: "03", title: "Development", desc: "Build your solution with regular updates", icon: <Zap className="h-5 w-5" /> },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support", icon: <CheckCircle className="h-5 w-5" /> }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-blue-500 mb-2">{item.step}</div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-blue-50 mb-8">
            Let's discuss how I can help bring your ideas to life
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
