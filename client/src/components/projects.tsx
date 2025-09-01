import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Play, 
  FileText, 
  Smartphone, 
  Download, 
  TrendingUp, 
  Calculator,
  Clock,
  Truck,
  Users,
  Shield,
  Globe,
  Code,
  Briefcase,
  Search,
  ChevronUp,
  ChevronDown,
  Mail
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  docsUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Compound Betting Plan Manager",
    description: "Professional betting plan management app with compound progression tracking, real-time analytics, mobile-responsive design, and comprehensive dashboard for monitoring betting strategies.",
    image: "https://iili.io/KFIn5Ga.png",
    category: "web",
    technologies: ["React", "TypeScript", "TailwindCSS", "Tanstack Query", "Zod", "Wouter"],
    githubUrl: "https://github.com/Cse21-034/betting-plan-manager",
    liveUrl: "https://money-marathon.vercel.app"
  },
  {
    id: 2,
    title: "Queue Management System",
    description: "Intelligent queue management with computer vision, face recognition, real-time WebSocket updates, and automated staff notifications. Full-stack solution with PostgreSQL backend.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "WebSocket", "Drizzle ORM"],
    githubUrl: "https://github.com/Cse21-034/queue-management",
    liveUrl: "https://smart-queue-4rkj.vercel.app",
    docsUrl: "https://docs.queue-system.com"
  },
  {
    id: 3,
    title: "Ottawa Ndzibs Shipping",
    description: "Professional logistics website for China-Botswana freight forwarding with admin CMS, dynamic pricing calculator, service management, and customer inquiry system.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "MVC Architecture"],
    githubUrl: "https://github.com/Cse21-034/ottawa-shipping",
    liveUrl: "https://ottawa-ndzibs-shipping.vercel.app"
  },
  {
    id: 4,
    title: "Kgotla - Discussion Forum",
    description: "Modern community forum app with PWA support, real-time discussions, voting system, cultural Southern African design elements, and mobile-first approach.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "mobile",
    technologies: ["React", "TypeScript", "PWA", "WebSocket", "PostgreSQL", "Replit Auth"],
    githubUrl: "https://github.com/Cse21-034/kgotla-forum",
    demoUrl: "https://kgotla-demo.vercel.app"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Full-stack shop with authentication, shopping cart, secure checkout, admin dashboard, and separated frontend/backend architecture for scalable deployment.",
    image: "https://iili.io/Fn3xRN2.png",
    category: "web",
    technologies: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "Passport.js", "Express Session"],
    githubUrl: "https://github.com/Cse21-034/ecommerce-platform",
    liveUrl: "https://sho-audio-store-frontend.vercel.app"
  },
  {
    id: 6,
    title: "Food Recipe App",
    description: "Android mobile app for food recipe management with offline sync, push notifications, recipe categorization, and collaborative features.",
    image: "https://iili.io/KfAx9Re.jpg",
    category: "mobile",
    technologies: ["Java", "xml", "Firebase", "SQLite", "Push Notifications"],
    githubUrl: "https://github.com/Cse21-034/task-management",
    downloadUrl: "https://play.google.com"
  },
  {
    id: 7,
    title: "Network Security Monitor",
    description: "Real-time network monitoring tool with threat detection, automated response capabilities, comprehensive logging, and security analytics dashboard.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "security",
    technologies: ["Python", "Flask", "Wireshark", "Network Analysis"],
    githubUrl: "https://github.com/Cse21-034/network-monitor",
    docsUrl: "https://docs.network-monitor.com"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "Responsive portfolio site with dark mode toggle, smooth animations, contact form, project showcase, and modern design principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/Cse21-034/portfolio",
    liveUrl: "https://portfolio-git-main-leatiles-projects.vercel.app/"
  },
  {
    id: 9,
    title: "AI-Solution Website",
    description: "Business website showcasing AI tools, services portfolio, client testimonials, and comprehensive service management system.",
    image: "https://iili.io/Fn2YFku.png",
    category: "web",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/Cse21-034/ai-solutions",
    liveUrl: "https://shoaudio.rf.gd/?i=1"
  },
  {
    id: 10,
    title: "Vulnerability Scanner",
    description: "Automated security assessment tool with comprehensive reporting, remediation suggestions, vulnerability database, and risk analysis features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "security",
    technologies: ["Python", "Nmap", "Django", "Security Analysis"],
    githubUrl: "https://github.com/Cse21-034/vulnerability-scanner",
    docsUrl: "https://docs.vuln-scanner.com"
  },
  {
    id: 11,
    title: "Authentication Token System",
    description: "JWT-based login system with tamper-proof token validation, session management, and secure user authentication protocols.",
    image: "https://iili.io/FndgCPV.png",
    category: "security",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JWT"],
    githubUrl: "https://github.com/Cse21-034/auth-system",
    liveUrl: "https://wifi2.free.nf/?i=1"
  },
  {
    id: 12,
    title: "Digital Assets Trading Site",
    description: "Trading platform for cryptocurrency, commodities, and synthetic assets with real-time market data and secure transaction processing.",
    image: "https://iili.io/Fn2sx24.png",
    category: "web",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Trading APIs"],
    githubUrl: "https://github.com/Cse21-034/trading-platform",
    liveUrl: "https://fountstream.com/"
  },
  {
    id: 13,
    title: "Agri Services Website",
    description: "Agricultural services platform featuring farm products, borehole services, image gallery, contact management, and content management system.",
    image: "https://iili.io/FxTYdTF.png",
    category: "web",
    technologies: ["React", "Express", "PostgreSQL", "Image Management"],
    githubUrl: "https://github.com/Cse21-034/agri-services",
    liveUrl: "https://agri-three-nu.vercel.app"
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Development", count: projects.filter(p => p.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: projects.filter(p => p.category === "mobile").length },
    { id: "security", label: "Cybersecurity", count: projects.filter(p => p.category === "security").length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  const getTechBadgeColor = (tech: string) => {
    const colors = {
      "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "TailwindCSS": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      "Tanstack Query": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Zod": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Wouter": "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "Express": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "PostgreSQL": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "WebSocket": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Drizzle ORM": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "MVC Architecture": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "PWA": "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "Replit Auth": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Passport.js": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Express Session": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "MySQL": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Firebase": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "SQLite": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "Push Notifications": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Python": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Flask": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Django": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Wireshark": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Network Analysis": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Security Analysis": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "HTML": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "CSS": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "PHP": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Framer Motion": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      "JWT": "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "Trading APIs": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Image Management": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      "Nmap": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  };

  const getProjectIcon = (project: Project) => {
    if (project.title.includes("Betting")) return <TrendingUp className="mr-1 h-4 w-4" />;
    if (project.title.includes("Queue")) return <Clock className="mr-1 h-4 w-4" />;
    if (project.title.includes("Shipping")) return <Truck className="mr-1 h-4 w-4" />;
    if (project.title.includes("Kgotla")) return <Users className="mr-1 h-4 w-4" />;
    if (project.title.includes("Calculator")) return <Calculator className="mr-1 h-4 w-4" />;
    if (project.category === "mobile") return <Smartphone className="mr-1 h-4 w-4" />;
    if (project.category === "security") return <Shield className="mr-1 h-4 w-4" />;
    return <ExternalLink className="mr-1 h-4 w-4" />;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web": return <Globe className="h-4 w-4" />;
      case "mobile": return <Smartphone className="h-4 w-4" />;
      case "security": return <Shield className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my recent work spanning web development, mobile applications, and cybersecurity solutions. 
            Each project demonstrates technical expertise and creative problem-solving across diverse domains.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
        
        {/* Enhanced Project Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {getCategoryIcon(filter.id)}
              <span>{filter.label}</span>
              <Badge variant="secondary" className="ml-1 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {projects.filter(p => p.liveUrl).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Live Demos</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {[...new Set(projects.flatMap(p => p.technologies))].length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className={`group bg-white dark:bg-gray-800 shadow-lg border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
              project.id === 1 ? "ring-2 ring-blue-500 dark:ring-cyan-400 shadow-blue-500/25" : ""
            }`}>
              {project.id === 1 && (
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white text-xs font-semibold px-4 py-2 text-center animate-pulse">
                  ⭐ FEATURED PROJECT
                </div>
              )}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.category === 'web' ? 'bg-blue-500' :
                    project.category === 'mobile' ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}>
                    {project.category.toUpperCase()}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center flex-1 min-w-0">
                    {getProjectIcon(project)}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} className={`${getTechBadgeColor(tech)} text-xs px-2 py-1 font-medium`}>
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    <Github className="mr-1 h-4 w-4" /> Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium"
                    >
                      <Download className="mr-1 h-4 w-4" /> Download
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm font-medium"
                    >
                      <Play className="mr-1 h-4 w-4" /> Preview
                    </a>
                  )}
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                    >
                      <FileText className="mr-1 h-4 w-4" /> Docs
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowMore(!showMore)}
              variant="outline"
              size="lg"
              className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              {showMore ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Show Less Projects
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Show {filteredProjects.length - 6} More Projects
                </>
              )}
            </Button>
          </div>
        )}

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search terms or filter selection.
            </p>
            <Button 
              onClick={() => { setSearchTerm(""); setActiveFilter("all"); }}
              variant="outline"
              className="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm passionate about creating innovative solutions and bringing ideas to life. Whether you have a project in mind or want to discuss potential opportunities, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
