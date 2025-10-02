 import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-context";

const navItems = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#timeline", labelKey: "nav.journey" },
  { href: "#skills", labelKey: "nav.skills" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#testimonials", labelKey: "nav.testimonials" },
  { href: "#blog", labelKey: "nav.blog" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600 dark:text-cyan-400">LM</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors text-sm font-medium ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Theme Toggle and Language Switcher */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left py-2 px-3 transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "text-blue-600 dark:text-cyan-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                      }`}
                    >
                      {t(item.labelKey)}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
