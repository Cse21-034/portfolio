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
    title: "Loadlink Africa",
    description: "Connect trucking companies and shipping entities across Africa. Real-time job matching, secure payments, and AI-powered logistics solutions.",
    image: "https://iili.io/KSorSQj.png",
    category: "web",
    technologies: ["React", "Express", "PostgreSQL", "Image Management"],
    githubUrl: "https://github.com/Cse21-034/agri-services",
    liveUrl: "https://afri4-7fb5.vercel.app/"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack shop with authentication, shopping cart, secure checkout, admin dashboard, and separated frontend/backend architecture for scalable deployment.",
    image: "https://iili.io/Fn3xRN2.png",
    category: "web",
    technologies: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "Passport.js", "Express Session"],
    githubUrl: "https://github.com/Cse21-034/ecommerce-platform",
    liveUrl: "https://test-front-mocha.vercel.app"
  },
    {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio site with dark mode toggle, smooth animations, contact form, project showcase, and modern design principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/Cse21-034/portfolio",
    liveUrl: "https://portfolio-git-main-leatiles-projects.vercel.app/"
  },
    {
    id: 5,
    title: "Agri Services Website",
    description: "Agricultural services platform featuring farm products, borehole services, image gallery, contact management, and content management system.",
    image: "https://iili.io/FxTYdTF.png",
    category: "web",
    technologies: ["React", "Express", "PostgreSQL", "Image Management"],
    githubUrl: "https://github.com/Cse21-034/agri-services",
    liveUrl: "https://agri-three-nu.vercel.app"
  },
   {
    id: 6,
    title: "AI-Solution Website",
    description: "Business website showcasing AI tools, services portfolio, client testimonials, and comprehensive service management system.",
    image: "https://iili.io/Fn2YFku.png",
    category: "web",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/Cse21-034/ai-solutions",
    liveUrl: "https://shoaudio.rf.gd/?i=1"
  },
  {
    id: 7,
    title: "Queue Management System",
    description: "Intelligent queue management with computer vision, face recognition, real-time WebSocket updates, and automated staff notifications. Full-stack solution with PostgreSQL backend.",
    image: "data:image/jpeg;base64,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",
    category: "web",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "WebSocket", "Drizzle ORM"],
    githubUrl: "https://github.com/Cse21-034/queue-management",
    liveUrl: "https://smart-queue-4rkj.vercel.app",
    docsUrl: "https://docs.queue-system.com"
  },
   
  {
    id: 8,
    title: "Food Recipe App",
    description: "Android mobile app for food recipe management with offline sync, push notifications, recipe categorization, and collaborative features.",
    image: "https://iili.io/KXTBomJ.jpg",
    category: "mobile",
    technologies: ["Java", "xml", "Firebase", "SQLite", "Push Notifications"],
    githubUrl: "https://github.com/Cse21-034/task-management",
    downloadUrl: "https://play.google.com"
  },

 
  

  {
    id: 9,
    title: "Authentication Token System",
    description: "JWT-based login system with tamper-proof token validation, session management, and secure user authentication protocols.",
    image: "https://iili.io/FndgCPV.png",
    category: "security",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JWT"],
    githubUrl: "https://github.com/Cse21-034/auth-system",
    liveUrl: "https://wifi2.free.nf/?i=1"
  },
 
 
   
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
            Professional Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of industrial-grade software solutions spanning full-stack development, mobile applications, and cybersecurity. 
            Demonstrating expertise in delivering scalable, secure, and user-centric applications.
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
