import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Platform",
    description: "Full-stack SaaS platform with real-time analytics and user management",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "bg-gradient-to-br from-blue-500 to-cyan-400",
    stats: { users: "10K+", uptime: "99.9%" },
  },
  {
    title: "E-Commerce Solution",
    description: "Scalable e-commerce platform with integrated payment processing",
    tags: ["Next.js", "TypeScript", "Stripe", "Vercel"],
    image: "bg-gradient-to-br from-purple-500 to-pink-400",
    stats: { transactions: "$5M+", conversion: "3.2%" },
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile app with offline capabilities and push notifications",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "bg-gradient-to-br from-emerald-500 to-green-400",
    stats: { downloads: "100K+", rating: "4.8★" },
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Team collaboration platform with real-time updates and version control",
    tags: ["Vue.js", "WebSocket", "Redis", "Docker"],
    image: "bg-gradient-to-br from-orange-500 to-yellow-400",
    stats: { teams: "500+", saved: "1000h/mo" },
  },
  {
    title: "Data Analytics Dashboard",
    description: "Advanced analytics dashboard with custom visualizations and reporting",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "bg-gradient-to-br from-indigo-500 to-purple-400",
    stats: { queries: "1M+/day", latency: "<100ms" },
  },
  {
    title: "Content Management System",
    description: "Headless CMS with powerful content management and publishing tools",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    image: "bg-gradient-to-br from-rose-500 to-red-400",
    stats: { sites: "50+", content: "100K+" },
  },
];

export default function Portfolio() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
            Our Work
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing successful projects and measurable results
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col backdrop-blur-md"
              >
                {/* Image */}
                <div className={`h-40 ${project.image}`} />

                {/* Content */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="font-bold text-black dark:text-white">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-black/10 dark:bg-white/10 text-black dark:text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proven results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100+", label: "Satisfied Clients" },
              { number: "$10M+", label: "Platform Value Created" },
              { number: "99.9%", label: "Average Uptime" },
            ].map((stat, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 text-center backdrop-blur-md"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
              Client Feedback
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Exceptional work and timely delivery. The team understood our vision perfectly.",
                author: "CEO, TechStartup Co.",
                role: "Founder & CEO",
              },
              {
                quote:
                  "Professional, innovative, and results-driven. Highly recommended for any enterprise.",
                author: "CFO, Global Enterprise",
                role: "Chief Financial Officer",
              },
              {
                quote:
                  "Transformed our digital presence. The ROI has exceeded our expectations.",
                author: "VP Product, SaaS Leader",
                role: "Vice President",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 backdrop-blur-md"
              >
                <CardContent className="p-8">
                  <div className="text-black dark:text-white text-3xl mb-4">
                    "
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Create Your Success Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to start your next project? We're here to help
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
