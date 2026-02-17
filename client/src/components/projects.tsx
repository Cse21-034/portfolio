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
  Mail,
  Building2,
  Microscope,
  Zap
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  organization: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  docsUrl?: string;
  year?: string;
}

const organizations = [
  {
    id: "all",
    label: "All Projects",
    icon: <Code className="h-4 w-4" />,
    color: "from-blue-600 to-purple-600",
    description: "All projects across organizations"
  },
  {
    id: "orange",
    label: "Orange Digital Center",
    icon: <Zap className="h-4 w-4" />,
    color: "from-orange-500 to-amber-500",
    description: "Gaborone, Botswana • 2025"
  },
  {
    id: "solidcare",
    label: "SolidCare Services",
    icon: <Building2 className="h-4 w-4" />,
    color: "from-emerald-500 to-teal-500",
    description: "SolidCare Services Pty Ltd"
  },
  {
    id: "loadxafrica",
    label: "LoadX Africa",
    icon: <Truck className="h-4 w-4" />,
    color: "from-blue-600 to-cyan-500",
    description: "Logistics & Freight Platform"
  },
  {
    id: "freelancer",
    label: "Freelancer",
    icon: <Briefcase className="h-4 w-4" />,
    color: "from-purple-600 to-pink-500",
    description: "Independent client projects"
  },
];

const projects: Project[] = [
  // ──────────────────────────────────────────
  // ORANGE DIGITAL CENTER
  // ──────────────────────────────────────────
  {
    id: 1,
    title: "AI-Powered Malaria Detection System",
    description: "Advanced machine learning system for automated malaria parasite detection using AI-powered microscopy. Built for Orange Digital Center Gaborone, the system analyzes blood smear images with high accuracy using computer vision and deep learning, enabling faster and more reliable malaria diagnosis in healthcare settings across Botswana.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "ai",
    organization: "orange",
    technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning", "Image Processing"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://malaria-detection-demo.vercel.app",
    year: "2025"
  },

  // ──────────────────────────────────────────
  // SOLIDCARE SERVICES PTY LTD
  // ──────────────────────────────────────────
  {
    id: 2,
    title: "Namibia services directory",
    description: "Discover the best businesses across Namibia - from restaurants and shops to professional services and tourism operators.",
    image: "https://iili.io/qdrLT0P.png",
    category: "web",
    organization: "solidcare",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Express", "TailwindCSS"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://namibia-directory.vercel.app",
    year: "2024"
  },
  {
    id: 3,
    title: "Solid triangle botswana",
    description: "Comprehensive ICT solutions including network infrastructure, cybersecurity, smart metering, and telecommunications for businesses across Botswana and beyond.",
    image: "https://iili.io/qd4nmFI.png",
    category: "web",
    organization: "solidcare",
    technologies: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "WebSocket", "Express"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://solidtriangle-bw.vercel.app",
    year: "2024"
  },
  {
    id: 4,
    title: "Kraalpond holdings",
    description: "Sustainable design Integrated management Premium property solutions for the modern era.",
    image: "https://iili.io/qd43Pst.png",
    category: "web",
    organization: "solidcare",
    technologies: ["React", "TypeScript", "PostgreSQL", "Express", "Passport.js", "TailwindCSS"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://kraalpond-holdings.vercel.app",
    year: "2024"
  },

  // ──────────────────────────────────────────
  // LOADX AFRICA
  // ──────────────────────────────────────────
  {
    id: 5,
    title: "Loadlink Africa — Logistics Platform",
    description: "Connect trucking companies and shipping entities across Africa. Real-time job matching, secure payments, and AI-powered logistics solutions for the China-Botswana freight corridor. Features freight listings, carrier profiles, and real-time tracking.",
    image: "https://iili.io/KSorSQj.png",
    category: "web",
    organization: "loadxafrica",
    technologies: ["React", "Express", "PostgreSQL", "Image Management", "TypeScript"],
    githubUrl: "https://github.com/Cse21-034/agri-services",
    liveUrl: "https://afri4-7fb5.vercel.app/",
    year: "2024"
  },

  // ──────────────────────────────────────────
  // FREELANCER
  // ──────────────────────────────────────────
  {
    id: 6,
    title: "Compound Betting Plan Manager",
    description: "Professional betting plan management app with compound progression tracking, real-time analytics, mobile-responsive design, and comprehensive dashboard for monitoring betting strategies.",
    image: "https://iili.io/KFIn5Ga.png",
    category: "web",
    organization: "freelancer",
    technologies: ["React", "TypeScript", "TailwindCSS", "Tanstack Query", "Zod", "Wouter"],
    githubUrl: "https://github.com/Cse21-034/betting-plan-manager",
    liveUrl: "https://money-marathon.vercel.app",
    year: "2024"
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    description: "Full-stack shop with authentication, shopping cart, secure checkout, admin dashboard, and separated frontend/backend architecture for scalable deployment.",
    image: "https://iili.io/Fn3xRN2.png",
    category: "web",
    organization: "freelancer",
    technologies: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "Passport.js", "Express Session"],
    githubUrl: "https://github.com/Cse21-034/ecommerce-platform",
    liveUrl: "https://test-front-mocha.vercel.app",
    year: "2024"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "Responsive portfolio site with dark mode toggle, smooth animations, contact form, project showcase, and modern design principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    organization: "freelancer",
    technologies: ["React", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/Cse21-034/portfolio",
    liveUrl: "https://portfolio-git-main-leatiles-projects.vercel.app/",
    year: "2024"
  },
  {
    id: 9,
    title: "Agri Services Website",
    description: "Agricultural services platform featuring farm products, borehole services, image gallery, contact management, and content management system.",
    image: "https://iili.io/FxTYdTF.png",
    category: "web",
    organization: "freelancer",
    technologies: ["React", "Express", "PostgreSQL", "Image Management"],
    githubUrl: "https://github.com/Cse21-034/agri-services",
    liveUrl: "https://agri-three-nu.vercel.app",
    year: "2024"
  },
  {
    id: 10,
    title: "AI-Solution Website",
    description: "Business website showcasing AI tools, services portfolio, client testimonials, and comprehensive service management system.",
    image: "https://iili.io/Fn2YFku.png",
    category: "web",
    organization: "freelancer",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/Cse21-034/ai-solutions",
    liveUrl: "https://shoaudio.rf.gd/?i=1",
    year: "2023"
  },
  {
    id: 11,
    title: "Queue Management System",
    description: "Intelligent queue management with computer vision, face recognition, real-time WebSocket updates, and automated staff notifications. Full-stack solution with PostgreSQL backend.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUSEhMRFRUVFRMWGRUWGBcZFhYWHRoYFhUXFhcYHSggGBolGxYWIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGislICUuNS0tKy8wMi0tLS0tLS0tLS0tMC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tK//AABEIALEBHAMBEQACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAgMEBQYHCAH/xABREAABAwICAgcTCgMIAgMAAAABAAIDBBESIQUxBgcTQVGRkhQVFyI1UlNUYXFydIGTobGy0dIIFiMyMzRCYnOzlMHTGCQlgoOiwuFDZGPD8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgUEAwb/xAA4EQACAQICBwUGBgIDAQAAAAAAAQIDEQQSExQhMUFRkVJhcYHwMjOhscHRBSI0YuHxFkIGI6IV/9oADAMBAAIRAxEAPwDeKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAp5dZQEKAIAgCAIAgCAIAgJ0H1W94ICYgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAp5dZQGPbOfuT/Cj9oLkx3uX5fM5Mb7l+XzNfbG9ikFXFWSvibLMyoayPHNNEzDuULiDub29c43smEinRjderk4SKdGN16uXdu17BY30fGTfL/EKkAjfJ6Y21X8oG9ddOSPI6MkeRdKPayoC28lG5jru6UVdS8WuQ04t0GsWNrZXTJHkMkeRO6F+jO1n/xFT/VTJHkMkeQO1fo3epn/AMRU/wBVMkeQyR5EvoX6OFyad2o6qiq/qpkjyGSPIxvajcS6AnM8zH1NWbQ/VS8zNofqpeZtdahqE6D6re8EBMQBAAEAABQHSAPUBAABGnz+kKBj9IAA4I9ABFOAGrRFLkxTbDJ9I7bwqC8AABA+a5AADK7G0AAXUFtAAZ8oVfhQ8Wq8KaXkAEpgBLQABLVBtoAAUoCVAAAAAADIAARgABQAGnzGkAAvW9pY6pDGKG2AcMTR5MAAFjbJuoAAAAqMK5ADJEBAAEhIAAgAACOJgCAAAAA9JAA4IA4IAAAADo4A+6ApAqgAA6gABOW0AAAAAAAAAUAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==",
    category: "web",
    organization: "freelancer",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "WebSocket", "Drizzle ORM"],
    githubUrl: "https://github.com/Cse21-034/queue-management",
    liveUrl: "https://smart-queue-4rkj.vercel.app",
    docsUrl: "https://docs.queue-system.com",
    year: "2024"
  },
  {
    id: 12,
    title: "Food Recipe App",
    description: "Android mobile app for food recipe management with offline sync, push notifications, recipe categorization, and collaborative features.",
    image: "https://iili.io/KXTBomJ.jpg",
    category: "mobile",
    organization: "freelancer",
    technologies: ["Java", "xml", "Firebase", "SQLite", "Push Notifications"],
    githubUrl: "https://github.com/Cse21-034/task-management",
    liveUrl: "https://recipe-app-demo.vercel.app",
    downloadUrl: "https://play.google.com",
    year: "2023"
  },
  {
    id: 13,
    title: "Authentication Token System",
    description: "JWT-based login system with tamper-proof token validation, session management, and secure user authentication protocols.",
    image: "https://iili.io/FndgCPV.png",
    category: "security",
    organization: "freelancer",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JWT"],
    githubUrl: "https://github.com/Cse21-034/auth-system",
    liveUrl: "https://wifi2.free.nf/?i=1",
    year: "2023"
  },
];

const orgMeta: Record<string, { badge: string; color: string; bg: string; border: string }> = {
  orange: {
    badge: "Orange Digital Center",
    color: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    border: "border-orange-200 dark:border-orange-700"
  },
  solidcare: {
    badge: "SolidCare Services",
    color: "text-emerald-700 dark:text-emerald-300",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    border: "border-emerald-200 dark:border-emerald-700"
  },
  loadxafrica: {
    badge: "LoadX Africa",
    color: "text-blue-700 dark:text-blue-300",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    border: "border-blue-200 dark:border-blue-700"
  },
  freelancer: {
    badge: "Freelancer",
    color: "text-purple-700 dark:text-purple-300",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    border: "border-purple-200 dark:border-purple-700"
  },
};

export function Projects() {
  const [activeOrg, setActiveOrg] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesOrg = activeOrg === "all" || project.organization === activeOrg;
    const matchesSearch = searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesOrg && matchesSearch;
  });

  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  const getTechBadgeColor = (tech: string) => {
    const colors: Record<string, string> = {
      "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Python": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "TensorFlow": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "OpenCV": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Computer Vision": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Deep Learning": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "TailwindCSS": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      "Tanstack Query": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Zod": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Express": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "PostgreSQL": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "WebSocket": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Drizzle ORM": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "MySQL": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "Firebase": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "SQLite": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "JWT": "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "HTML": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "CSS": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "PHP": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Java": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Image Management": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      "Passport.js": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Image Processing": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
    };
    return colors[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  };

  const getProjectIcon = (project: Project) => {
    if (project.organization === "orange") return <Microscope className="mr-1 h-4 w-4 text-orange-500" />;
    if (project.category === "mobile") return <Smartphone className="mr-1 h-4 w-4" />;
    if (project.category === "security") return <Shield className="mr-1 h-4 w-4" />;
    if (project.organization === "loadxafrica") return <Truck className="mr-1 h-4 w-4 text-blue-500" />;
    return <ExternalLink className="mr-1 h-4 w-4" />;
  };

  const getOrgCountForId = (orgId: string) =>
    orgId === "all" ? projects.length : projects.filter(p => p.organization === orgId).length;

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Work delivered across organizations — from AI-powered healthcare tools to logistics platforms and freelance solutions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Organization Filter — compact pill row with real logos */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">

          {/* All */}
          <button
            onClick={() => { setActiveOrg("all"); setShowMore(false); }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeOrg === "all"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:shadow-sm"
            }`}
          >
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${activeOrg === "all" ? "bg-white/25 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500"}`}>
              {getOrgCountForId("all")}
            </span>
            All Projects
          </button>

          {/* Orange Digital Center — uses Orange telecom SVG logo */}
          <button
            onClick={() => { setActiveOrg("orange"); setShowMore(false); }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeOrg === "orange"
                ? "bg-orange-50 dark:bg-orange-900/30 border-orange-400 shadow-md ring-1 ring-orange-300"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-orange-300 hover:shadow-sm"
            }`}
          >
            {/* Orange square logo */}
            <span className="inline-flex items-center justify-center rounded-md bg-[#ff6600] shrink-0" style={{ width: 20, height: 20 }}>
              <svg viewBox="0 0 100 100" width="12" height="12" fill="white">
                <rect width="100" height="100" rx="18" fill="#ff6600"/>
                <text x="50" y="72" textAnchor="middle" fontSize="62" fontWeight="900" fill="white" fontFamily="Arial,sans-serif">O</text>
              </svg>
            </span>
            <span className={activeOrg === "orange" ? "text-orange-700 dark:text-orange-300 font-semibold" : ""}>
              Orange Digital Center
            </span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${activeOrg === "orange" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500"}`}>
              {getOrgCountForId("orange")}
            </span>
          </button>

          {/* SolidCare — monogram logo (no public logo available) */}
          <button
            onClick={() => { setActiveOrg("solidcare"); setShowMore(false); }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeOrg === "solidcare"
                ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 shadow-md ring-1 ring-emerald-300"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-emerald-300 hover:shadow-sm"
            }`}
          >
            <span className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-white font-black shrink-0" style={{ width: 20, height: 20, fontSize: 9 }}>
              SC
            </span>
            <span className={activeOrg === "solidcare" ? "text-emerald-700 dark:text-emerald-300 font-semibold" : ""}>
              SolidCare Services
            </span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${activeOrg === "solidcare" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500"}`}>
              {getOrgCountForId("solidcare")}
            </span>
          </button>

          {/* LoadX Africa — wordmark pill */}
          <button
            onClick={() => { setActiveOrg("loadxafrica"); setShowMore(false); }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeOrg === "loadxafrica"
                ? "bg-blue-50 dark:bg-blue-900/30 border-blue-400 shadow-md ring-1 ring-blue-300"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:shadow-sm"
            }`}
          >
            {/* LX monogram */}
            <span className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-black shrink-0" style={{ width: 20, height: 20, fontSize: 8, letterSpacing: "-0.5px" }}>
              LX
            </span>
            <span className={activeOrg === "loadxafrica" ? "text-blue-700 dark:text-blue-300 font-semibold" : ""}>
              LoadX Africa
            </span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${activeOrg === "loadxafrica" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500"}`}>
              {getOrgCountForId("loadxafrica")}
            </span>
          </button>

          {/* Freelancer — real Freelancer.com logo */}
          <button
            onClick={() => { setActiveOrg("freelancer"); setShowMore(false); }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeOrg === "freelancer"
                ? "bg-purple-50 dark:bg-purple-900/30 border-purple-400 shadow-md ring-1 ring-purple-300"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-purple-300 hover:shadow-sm"
            }`}
          >
            {/* Freelancer.com logo mark — the "f>" arrow mark */}
            <span className="inline-flex items-center justify-center rounded-md bg-[#29B2FE] shrink-0 overflow-hidden" style={{ width: 20, height: 20 }}>
              <img
                src="https://www.freelancer.com/favicon.ico"
                alt="Freelancer"
                style={{ width: 14, height: 14, objectFit: "contain" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="color:white;font-weight:900;font-size:10px">f</span>';
                }}
              />
            </span>
            <span className={activeOrg === "freelancer" ? "text-purple-700 dark:text-purple-300 font-semibold" : ""}>
              Freelancer
            </span>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${activeOrg === "freelancer" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500"}`}>
              {getOrgCountForId("freelancer")}
            </span>
          </button>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => {
            const meta = orgMeta[project.organization];
            return (
              <Card
                key={project.id}
                className={`group bg-white dark:bg-gray-800 shadow-lg border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  project.organization === "orange" ? "ring-2 ring-orange-400 dark:ring-orange-500 shadow-orange-100 dark:shadow-orange-900/20" : ""
                }`}
              >
                {project.organization === "orange" && (
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-4 py-2 text-center flex items-center justify-center gap-2">
                    <span className="inline-flex items-center justify-center rounded bg-white/25 px-1.5 py-0.5 text-white font-black text-xs tracking-tight">ODC</span>
                    AI RESEARCH PROJECT · ORANGE DIGITAL CENTER 2025
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold border ${meta.bg} ${meta.color} ${meta.border}`}>
                      {meta.badge}
                    </span>
                    {project.year && (
                      <span className="text-xs px-2 py-1 rounded-full bg-black/50 text-white font-medium">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start mb-3">
                    <div className="flex items-center flex-1 min-w-0">
                      {getProjectIcon(project)}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed text-sm">
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
            );
          })}
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

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search terms or select a different organization.
            </p>
            <Button
              onClick={() => { setSearchTerm(""); setActiveOrg("all"); }}
              variant="outline"
              className="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl" />
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