import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Sun, Moon, ChevronDown, Github, Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useTheme } from "./theme-provider";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-context";

const navItems = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#awards", labelKey: "Awards" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const allSections = navItems.map(item => item.href.slice(1));
      const currentSection = allSections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const isMoreActive = moreItems.some(item => item.href.slice(1) === activeSection);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/98 dark:bg-gray-950/98 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 shadow-md" 
        : "bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-50 dark:border-gray-800/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex-shrink-0 group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                LM
              </div>
              <span className="hidden sm:block text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Leatile
              </span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                }`}
              >
                {t(item.labelKey)}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-1.5 ml-auto">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/26772212372"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md hover:bg-green-100 dark:hover:bg-green-900/30 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              <SiWhatsapp className="h-4 w-4" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Cse21-034"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] border-l border-gray-200 dark:border-gray-700">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
                        LM
                      </div>
                      <span className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                        Menu
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
                          activeSection === item.href.slice(1)
                            ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                        }`}
                      >
                        {t(item.labelKey)}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile Footer Actions */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                    <div>
                      <LanguageSwitcher />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Theme</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleTheme}
                        className="rounded-md border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="h-4 w-4 mr-2" />
                            Light
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4 mr-2" />
                            Dark
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>


    </nav>
  );
}
