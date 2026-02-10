import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Award, Star, Trophy, Zap, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export default function Awards() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
            Awards & Achievements
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Success & Recognition
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Awards, certifications, and achievements from my professional journey in web development and digital solutions
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Professional Awards
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Recognition for excellence in web development and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Top Freelance Developer",
                year: "2024",
                issuer: "Digital Excellence Awards",
                description: "Recognized for exceptional work quality and client satisfaction in freelance web development",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Outstanding Web Solutions",
                year: "2023",
                issuer: "Tech Innovation Council",
                description: "Award for creating innovative and scalable web solutions that drive business growth",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Best Frontend Developer",
                year: "2023",
                issuer: "Web Development Association",
                description: "Excellence in React development and modern UI/UX implementation",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client Champion Award",
                year: "2024",
                issuer: "Freelance Excellence Network",
                description: "Outstanding client communication and project delivery record",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Business Growth Partner",
                year: "2023",
                issuer: "Startup Success Initiative",
                description: "Support for startup growth through innovative digital solutions",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Full-Stack Developer Excellence",
                year: "2024",
                issuer: "Technology Excellence Board",
                description: "Proficiency across frontend, backend, and DevOps technologies",
              },
            ].map((award, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-black dark:text-white">{award.icon}</div>
                    <Badge className="bg-black text-white dark:bg-white dark:text-black text-xs">
                      {award.year}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {award.issuer}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Industry-recognized credentials and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Full-Stack JavaScript Developer Certification",
                issuer: "FreeCodeCamp",
                year: "2022",
                skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
              },
              {
                title: "AWS Solutions Architect Associate",
                issuer: "Amazon Web Services",
                year: "2023",
                skills: ["EC2", "S3", "Lambda", "RDS", "CloudFront"],
              },
              {
                title: "Advanced TypeScript & React Mastery",
                issuer: "Udemy & Coursera",
                year: "2023",
                skills: ["TypeScript", "React Hooks", "State Management", "Testing"],
              },
              {
                title: "DevOps & Docker Fundamentals",
                issuer: "Linux Academy",
                year: "2022",
                skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
              },
            ].map((cert, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="border-black/20 dark:border-white/20 text-black dark:text-white text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Success By The Numbers
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Proven track record of delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5+",
                label: "Years Experience",
                description: "Professional web development expertise",
              },
              {
                number: "50+",
                label: "Projects Delivered",
                description: "Successful projects across various industries",
              },
              {
                number: "30+",
                label: "Happy Clients",
                description: "Satisfied clients from startups to enterprises",
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                description: "Consistent delivery of quality solutions",
              },
            ].map((metric, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md text-center"
              >
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-black dark:text-white mb-2">
                    {metric.number}
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Notable Accomplishments
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Key projects and achievements that demonstrate expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform Scaling",
                description: "Successfully scaled an e-commerce platform to handle 10K+ monthly transactions, resulting in 3.2% conversion rate improvement and 300% revenue growth for client",
                results: ["10K+ monthly transactions", "3.2% conversion improvement", "300% revenue growth"],
              },
              {
                title: "Enterprise Dashboard Migration",
                description: "Led migration of legacy dashboard to modern React architecture, improving performance by 60% and reducing load time from 8s to 2.5s",
                results: ["60% performance improvement", "3x faster load time", "Enhanced user experience"],
              },
              {
                title: "Startup MVP to Production",
                description: "Built complete MVP for fintech startup from concept to market launch in 12 weeks, securing $2M in seed funding with the platform",
                results: ["12-week timeline met", "$2M seed funding secured", "50K+ active users"],
              },
              {
                title: "Real-time Collaboration Tool",
                description: "Developed real-time collaboration platform using WebSockets and Redis, serving 500+ teams with sub-100ms latency",
                results: ["500+ teams", "<100ms latency", "99.9% uptime"],
              },
              {
                title: "Cloud Infrastructure Optimization",
                description: "Optimized cloud infrastructure reducing hosting costs by 45% while improving application performance and reliability",
                results: ["45% cost reduction", "99.99% uptime", "Auto-scaling implemented"],
              },
              {
                title: "AI-Powered Analytics Dashboard",
                description: "Created advanced analytics dashboard with machine learning insights, helping clients make data-driven business decisions",
                results: ["1M+ queries daily", "Real-time insights", "95% accuracy"],
              },
            ].map((achievement, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:border-black/40 dark:hover:border-white/40 transition-all"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {achievement.description}
                  </p>
                  <div className="space-y-2">
                    {achievement.results.map((result, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black dark:text-white flex-shrink-0" />
                        <span className="text-black dark:text-white font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder, TechStartup Inc",
                content: "Leatile transformed our vision into a robust platform. Professional, responsive, and delivered on time. Highly recommended!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "CTO, E-Commerce Solutions",
                content: "Outstanding technical expertise combined with great communication. The solution exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Emma Davis",
                role: "Business Owner, Digital Agency",
                content: "Best investment in our business. Leatile's expertise helped us scale our operations and increase revenue by 300%.",
                rating: 5,
              },
              {
                name: "James Wilson",
                role: "Product Manager, FinTech Corp",
                content: "Over 2 years of collaboration and they never missed a deadline. Exceptional quality and problem-solving skills.",
                rating: 5,
              },
              {
                name: "Lisa Anderson",
                role: "Startup Founder",
                content: "From concept to launch, Leatile guided us through every step. Worth every penny invested.",
                rating: 5,
              },
              {
                name: "David Martinez",
                role: "Director, Enterprise Solutions",
                content: "Professional, reliable, and incredibly talented. A true partner in our digital transformation journey.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-black dark:fill-white text-black dark:text-white"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-black dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Ready to work with a developer who has proven expertise and a track record of delivering exceptional results?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation("/contact")}
              className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => setLocation("/services")}
              variant="outline"
              className="border border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 text-lg px-8 py-6 rounded-lg"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
