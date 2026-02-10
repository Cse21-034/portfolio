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
            About Us
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Crafting Excellence in Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A team of passionate engineers and strategists dedicated to transforming businesses through technology
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded with a mission to bridge the gap between visionary ideas and technical excellence, we've been at the forefront of digital innovation for over a decade.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                What started as a small team of passionate developers has evolved into a full-service digital agency trusted by Fortune 500 companies, ambitious startups, and innovative entrepreneurs alike.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We believe that technology should empower businesses, not complicate them. Every solution we build is crafted with precision, integrity, and a deep understanding of our clients' unique challenges.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/10 dark:from-white/10 dark:to-white/10 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/30 to-white/20 dark:from-black/30 dark:to-black/20 rounded-2xl p-8 border border-black/20 dark:border-white/20 backdrop-blur-lg">
                <div className="space-y-6">
                  {[
                    { icon: <Award className="h-6 w-6" />, text: "Industry-Leading Expertise" },
                    { icon: <Code className="h-6 w-6" />, text: "Cutting-Edge Technology" },
                    { icon: <Briefcase className="h-6 w-6" />, text: "Enterprise Scale" },
                    { icon: <Heart className="h-6 w-6" />, text: "Client-Centric Approach" },
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Guiding principles that define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We set the highest standards and continuously push boundaries",
              },
              {
                title: "Integrity",
                description: "Honesty, transparency, and ethical practices in everything",
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and creative problem-solving",
              },
              {
                title: "Partnership",
                description: "True collaboration with clients as extensions of our team",
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
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Meet The Experts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Leatile Mosimanyana",
                role: "Founder & Chief Architect",
                bio: "Visionary leader with 15+ years in enterprise software development",
              },
              {
                name: "Industry Expert",
                role: "Head of Strategy",
                bio: "Strategic advisor helping companies navigate digital transformation",
              },
              {
                name: "Tech Lead",
                role: "VP Engineering",
                bio: "Leading our technical team in building scalable solutions",
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
              { number: "15+", label: "Years in Business" },
              { number: "100+", label: "Team Members" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Awards Won" },
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how we can help achieve your business goals
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
