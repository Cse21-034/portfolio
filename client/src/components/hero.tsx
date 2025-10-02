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
    { Icon: Code, color: "bg-blue-500", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-8", delay: "0s" },
    { Icon: Database, color: "bg-green-500", position: "top-4 -right-12", delay: "0.1s" },
    { Icon: Shield, color: "bg-red-500", position: "top-1/2 -right-16 -translate-y-1/2", delay: "0.2s" },
    { Icon: Globe, color: "bg-purple-500", position: "bottom-4 -right-12", delay: "0.3s" },
    { Icon: Smartphone, color: "bg-orange-500", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-8", delay: "0.4s" },
    { Icon: Server, color: "bg-cyan-500", position: "bottom-4 -left-12", delay: "0.5s" },
    { Icon: Terminal, color: "bg-indigo-500", position: "top-1/2 -left-16 -translate-y-1/2", delay: "0.6s" },
    { Icon: Cpu, color: "bg-pink-500", position: "top-4 -left-12", delay: "0.7s" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-50/60 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden pt-16"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Avatar + icons */}
          <div
            className="mb-12 flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {techIcons.map(({ Icon, color, position, delay }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-700 ease-out ${
                    isHovered ? "opacity-100 scale-100 animate-bounce" : "opacity-0 scale-50"
                  }`}
                  style={{
                    transitionDelay: isHovered ? delay : "0s",
                    animationDelay: delay,
                    animationDuration: "2s",
                    animationIterationCount: "infinite",
                  }}
                >
                  <div
                    className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                  >
                    <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                  </div>
                </div>
              ))}

              {/* Avatar */}
              <div className="relative z-10">
                <div className="w-36 h-36 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white dark:border-slate-700 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700">
                  <img src="https://iili.io/FndI3IS.png" alt="Leatile Mosimanyana" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Orbital rings */}
              <div
                className={`absolute inset-0 w-36 h-36 border-2 border-slate-200/30 dark:border-slate-600/30 rounded-full transition-all duration-1000 ${
                  isHovered ? "scale-125 opacity-60 animate-spin" : "scale-100 opacity-0"
                }`}
                style={{ animationDuration: "8s" }}
              />
              <div
                className={`absolute inset-0 w-36 h-36 border border-slate-200/20 dark:border-slate-600/20 rounded-full transition-all duration-1000 ${
                  isHovered ? "scale-150 opacity-40 animate-spin" : "scale-100 opacity-0"
                }`}
                style={{ animationDirection: "reverse", animationDuration: "12s" }}
              />
            </div>
          </div>

          {/* Text content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 
              dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent leading-tight mb-6">
            Leatile <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Mosimanyana
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-4">
            {t("hero.role")}
          </p>

          <div className="space-y-2 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            <p>🎓 {t("hero.degree")}</p>
            <p>💻 {t("hero.fullstack")}</p>
            <p>🔐 {t("hero.security")}</p>
            <p>🚀 {t("hero.innovation")}</p>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-500 mb-10">
            📍 {t("hero.location")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { number: "13+", label: t("hero.projects"), gradient: "from-blue-600 to-cyan-500" },
              { number: "15+", label: t("hero.technologies"), gradient: "from-emerald-500 to-green-500" },
              { number: "3+", label: t("hero.experience"), gradient: "from-purple-600 to-pink-500" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-slate-800/70 rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50 hover:scale-105 transition-all duration-300"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white font-semibold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              {t("hero.connect_btn")}
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center px-8 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <Code className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              {t("hero.portfolio_btn")}
            </Button>
            <a
              href="/Leatile_Mosimanyana_CV.pdf"
              download
              className="group inline-flex items-center px-8 py-4 border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              {t("hero.resume")}
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Cse21-034"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600" />
            </a>
            <a
              href="mailto:leatilemanando@gmail.com"
              className="group w-12 h-12 bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-green-600" />
            </a>
            <a
              href="https://portfolio-git-main-leatiles-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <ExternalLink className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none" />
    </section>
  );
}
