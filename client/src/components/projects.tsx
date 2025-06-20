import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, FileText, Smartphone, Download } from "lucide-react";

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
    title: "E-Commerce Platform",
    description: "Full-stack shop with auth, cart, checkout, and admin dashboard.",
    image: "https://iili.io/Fn3xRN2.png",
    category: "web",
    technologies: ["React", "Node.js", "Postgrel"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://sho-audio-store-frontend.vercel.app"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Cross-platform mobile app for productivity management with offline sync and notifications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "mobile",
    technologies: ["React Native", "Firebase", "SQLite"],
    githubUrl: "https://github.com/Cse21-034",
    downloadUrl: "https://play.google.com"
  },
  {
    id: 3,
    title: "Network Security Monitor",
    description: "Real-time network monitoring tool with threat detection and automated response capabilities.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "security",
    technologies: ["Python", "Flask", "Wireshark"],
    githubUrl: "https://github.com/Cse21-034",
    docsUrl: "https://docs.example.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio site with dark mode toggle, smooth animations, and contact form.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React+Tailwind", "Node.js+Epress", "Postgrel"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://portfolio-git-main-leatiles-projects.vercel.app/"
  },
  {
    id: 5,
    title: "AI-Solution Website",
    description: "Business site with AI tools, services, and testimonial section.",
    image: "https://iili.io/Fn2YFku.png",
    category: "web",
    technologies: ["html+css", "php", "Mysql"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://shoaudio.rf.gd/?i=1"
  },
  {
    id: 6,
    title: "Vulnerability Scanner",
    description: "Automated security assessment tool with comprehensive reporting and remediation suggestions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "security",
    technologies: ["Python", "Nmap", "Django"],
    githubUrl: "https://github.com/Cse21-034",
    docsUrl: "https://docs.example.com"
  },
  {
    id: 7,
    title: "Authentication Token System",
    description: "JWT-based login system with tamper-proof token validation.",
    image: "https://iili.io/FndgCPV.png",
    category: "security",
    technologies: ["html\css", "php", "Mysql"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://wifi2.free.nf/?i=1"
  },
   {
    id: 8,
    title: "Digital Assets Trading Site",
    description: "Platform to trade crypto, commodities, and synthetic assets.",
    image: "https://iili.io/Fn2sx24.png",
    category: "web",
    technologies: ["html\css", "php", "Mysql"],
    githubUrl: "https://github.com/Cse21-034",
    liveUrl: "https://fountstream.com/"
  },
  {
  id: 9,
  title: "Agri Services Website",
  description: "Farm products & borehole services with gallery, contact, and CMS.",
  image: "https://iili.io/FxTYdTF.png",
  category: "web",
  technologies: ["React", "Express", "PostgreSQL"],
  githubUrl: "https://github.com/Cse21-034",
  liveUrl: "https://agri-three-nu.vercel.app"
}

];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "security", label: "Cybersecurity" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechBadgeColor = (tech: string) => {
    const colors = {
      "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Firebase": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "SQLite": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
      "Python": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Flask": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Wireshark": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "HTML/CSS": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Tailwind": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
      "Arduino": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "C++": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Android": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Nmap": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Django": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical skills and creative problem-solving.
          </p>
        </div>
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white dark:bg-cyan-500"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className={getTechBadgeColor(tech)}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" /> Demo
                    </a>
                  )}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      <Download className="mr-1 h-4 w-4" /> Download
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      <Play className="mr-1 h-4 w-4" /> Demo
                    </a>
                  )}
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      <FileText className="mr-1 h-4 w-4" /> Docs
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
