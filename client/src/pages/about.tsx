import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Award, Briefcase, Code, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
            About Me
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Leatile Mosimanyana
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Full-Stack Web Developer | Digital Solution Architect | Freelance Consultant
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                My Journey
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm a passionate full-stack web developer with 5+ years of professional experience building scalable, high-performance web applications. My journey started with a love for problem-solving and creating elegant digital solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Throughout my career, I've worked on diverse projects ranging from enterprise applications to innovative startups, helping businesses transform their ideas into reality through technology.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm committed to writing clean, maintainable code and delivering solutions that not only meet technical requirements but also drive real business value. Every project is an opportunity to learn and grow.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/10 dark:from-white/10 dark:to-white/10 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 rounded-2xl p-8 border border-black/20 dark:border-white/20 backdrop-blur-lg">
                <div className="space-y-6">
                  {[
                  { icon: <Code className="h-6 w-6" />, text: "Full-Stack Development" },
                    { icon: <Award className="h-6 w-6" />, text: "5+ Years Experience" },
                    { icon: <Briefcase className="h-6 w-6" />, text: "Enterprise & Startup Focus" },
                    { icon: <Heart className="h-6 w-6" />, text: "Client Success Driven" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-white/40 dark:bg-gray-900/40 rounded-lg backdrop-blur-sm"
                    >
                      <div className="text-black dark:text-white">{item.icon}</div>
                      <span className="font-semibold text-black dark:text-white">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              What Drives Me
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              My core values and approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Code",
                description: "I write clean, maintainable, and well-tested code that stands the test of time",
              },
              {
                title: "Innovation",
                description: "Constantly exploring new technologies and best practices to deliver modern solutions",
              },
              {
                title: "Collaboration",
                description: "I work closely with clients and teams to understand needs and exceed expectations",
              },
              {
                title: "Results-Driven",
                description: "Every solution is focused on delivering measurable business value and ROI",
              },
            ].map((value, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md text-center"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 backdrop-blur-md">
              Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              About My Experience
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Professional background and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Leatile Mosimanyana",
                role: "Full-Stack Developer",
                bio: "Specializing in React, Node.js, TypeScript, and modern web technologies. 5+ years building scalable applications.",
              },
              {
                name: "Web Development",
                role: "Core Expertise",
                bio: "React, Next.js, Vue.js, Node.js, Express, PostgreSQL, MongoDB, AWS, Docker, and more.",
              },
              {
                name: "Digital Solutions",
                role: "Freelance Services",
                bio: "Custom web development, consulting, UI/UX design, and digital strategy for businesses of all sizes.",
              },
            ].map((member, i) => (
              <Card
                key={i}
                className="border border-black/20 dark:border-white/20 bg-white/30 dark:bg-black/30 backdrop-blur-md text-center"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-black dark:text-white font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-black dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Whether you need a freelance developer, digital consultant, or want to discuss your next project, I'd love to connect with you.
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black text-lg px-8 py-6 rounded-lg"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
