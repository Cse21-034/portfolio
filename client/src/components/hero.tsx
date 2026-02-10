import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Code,
  Github,
  Linkedin,
  Download,
  Award,
  ExternalLink,
  Shield,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Terminal,
  Server,
  ChevronRight,
  Briefcase,
  CheckCircle,
  Users,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = [
    { Icon: Code, label: "Full Stack", color: "bg-blue-600", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-10", delay: "0s" },
    { Icon: Database, label: "Database", color: "bg-emerald-600", position: "top-12 -right-12", delay: "0.1s" },
    { Icon: Shield, label: "Security", color: "bg-amber-600", position: "top-1/2 -right-16 -translate-y-1/2", delay: "0.2s" },
    { Icon: Globe, label: "Web Dev", color: "bg-indigo-600", position: "bottom-12 -right-12", delay: "0.3s" },
    { Icon: Smartphone, label: "Mobile", color: "bg-purple-600", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-10", delay: "0.4s" },
    { Icon: Server, label: "Backend", color: "bg-cyan-600", position: "bottom-12 -left-12", delay: "0.5s" },
    { Icon: Terminal, label: "DevOps", color: "bg-violet-600", position: "top-1/2 -left-16 -translate-y-1/2", delay: "0.6s" },
    { Icon: Cpu, label: "AI/ML", color: "bg-rose-600", position: "top-12 -left-12", delay: "0.7s" },
  ];

  const trustIndicators = [
    { icon: CheckCircle, text: "Enterprise-Grade Solutions" },
    { icon: Users, text: "Client-Focused Approach" },
    { icon: Clock, text: "Timely Delivery" },
    { icon: Briefcase, text: "Professional Experience" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden pt-16"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      
      {/* Professional grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Accent lines */}
      <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-48 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Professional tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/30">
              <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Senior Software Engineer & Security Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-slate-900 dark:text-white">Leatile</span>
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Mosimanyana
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Delivering robust, scalable software solutions with a focus on security and performance. 
                Specializing in full-stack development and enterprise-grade applications.
              </p>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: "13+", label: "Projects Delivered", accent: "text-blue-600 dark:text-blue-400" },
                { number: "15+", label: "Technologies", accent: "text-emerald-600 dark:text-emerald-400" },
                { number: "3+", label: "Years Experience", accent: "text-violet-600 dark:text-violet-400" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                >
                  <div className={`text-2xl font-bold ${stat.accent}`}>{stat.number}</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                {t("hero.connect")}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
              >
                <Code className="w-4 h-4" />
                View Portfolio
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
              
              <a
                href="/Leatile_Mosimanyana_CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Trusted by teams and individuals worldwide
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/Cse21-034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="mailto:leatilemanando@gmail.com"
                  className="group p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-slate-700 dark:text-slate-400 group-hover:text-emerald-600" />
                </a>
                <div className="h-4 w-px bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  📍 {t("hero.location")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Tech Skills Orbit */}
            <div
              className="relative mx-auto w-96 h-96"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Central Profile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                    <img 
                      src="https://iili.io/FndI3IS.png" 
                      alt="Leatile Mosimanyana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Orbiting Tech Skills */}
              {techIcons.map(({ Icon, label, color, position, delay }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-700 ease-out ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{ transitionDelay: isHovered ? delay : "0s" }}
                >
                  <div className="group relative">
                    <div
                      className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg">
                        {label}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Concentric circles */}
              <div className={`absolute inset-0 border border-slate-200/20 dark:border-slate-700/20 rounded-full transition-all duration-1000 ${isHovered ? "scale-125" : "scale-100"}`} />
              <div className={`absolute inset-0 border border-slate-200/10 dark:border-slate-700/10 rounded-full transition-all duration-1000 ${isHovered ? "scale-150" : "scale-100"}`} />
            </div>

            {/* Expertise Summary */}
            <div className="mt-12 p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full Stack Development",
                  "API Architecture",
                  "Cloud Infrastructure",
                  "Security Auditing",
                  "Database Design",
                  "CI/CD Pipeline"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Explore More
            </span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}