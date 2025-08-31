import { Button } from "@/components/ui/button";
import { Mail, Code, Github, Linkedin, Download, Award } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl transition-transform duration-300 hover:scale-105">
              LM
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi 👋, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Leatile Mosimanyana</span>
          </h1>
          
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 text-green-800 dark:text-green-300 px-4 py-2 rounded-full border border-green-200 dark:border-green-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Recent Graduate</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              🎓 BSc (Hons) Computer Systems & Software Engineering Graduate
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8">
            💻 Full-Stack Developer | 🔐 Cybersecurity Specialist | 🚀 Tech Innovator | 📍 Molepolole, Botswana
          </p>
          
          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">13+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center px-8 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Cse21-034"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:leatilemanando@gmail.com"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
