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
import { SiWhatsapp } from "react-icons/si";
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-orange-50/40 to-purple-50/30 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-60 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        
        {/* Large decorative blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Greeting with emoji */}
            <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-orange-100 dark:border-slate-700">
              <div className="relative">
                <span className="text-4xl">👋</span>
                <div className="absolute -top-2 -right-1 w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-white text-xs font-bold">🎅</span>
                </div>
              </div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Hi! I Am</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                Leatile
                <br />
                <span className="text-slate-900 dark:text-white">Mosimanyana</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                {t("hero.subtitle")} - Product designer and digital creative director working in design field, specializing in user interface design.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
              >
                {t("hero.connect")} Hire Me
              </Button>
            </div>

            {/* Social links */}
            <div className="pt-8">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
                Connect With Me
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Cse21-034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://wa.me/26772212372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <SiWhatsapp className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-green-600" />
                </a>
                <a
                  href="mailto:leatilemanando@gmail.com"
                  className="group w-12 h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-green-600" />
                </a>
                <a
                  href="https://portfolio-git-main-leatiles-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <ExternalLink className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-purple-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Image with floating cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main image container */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                <img 
                  src="https://iili.io/FndI3IS.png" 
                  alt="Leatile Mosimanyana" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating badge - Best Design Awards (top right) */}
              <a 
                href="https://portfolio-git-main-leatiles-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-orange-100 dark:border-slate-700 transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isHovered ? 'translate-y-2 rotate-3' : ''
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">Best Design</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Awards</div>
                </div>
              </a>

              {/* Floating badge - UI/UX (left middle) */}
              <a 
                href="https://portfolio-git-main-leatiles-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-emerald-100 dark:border-slate-700 transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isHovered ? 'translate-x-2 -rotate-3' : ''
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-2xl">
                  😋
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">UI/Ux</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Lorem ipsum dummy</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">text are visually</div>
                </div>
              </a>

              {/* Floating badge - Shopify (bottom right) */}
              <a 
                href="https://portfolio-git-main-leatiles-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-full w-32 h-32 shadow-2xl flex items-center justify-center border-4 border-purple-100 dark:border-slate-700 transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isHovered ? '-translate-y-2 rotate-6' : ''
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-1">🛍️</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">shopify</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Stats and Social Links */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
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

          {/* Social links and additional CTAs */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                {t("hero.portfolio")}
              </Button>
              <a
                href="/Leatile_Mosimanyana_CV.pdf"
                download
                className="group inline-flex items-center px-6 py-3 border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                {t("hero.resume")}
              </a>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-500">
              📍 {t("hero.location")}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none" />
    </section>
  );
}