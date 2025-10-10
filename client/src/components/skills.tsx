import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Layers, 
  Wrench, 
  Shield,
  Database,
  Globe
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React/Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: ["Node.js", "Python", "PostgreSQL", "PHP"]
    },
    {
      title: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git/GitHub", "Docker", "Vercel", "Vite"]
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-5 w-5" />,
      skills: ["React Query", "Drizzle ORM", "Express", "Zod"]
    },
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["TypeScript", "Python", "JavaScript", "Java"]
    },
    {
      title: "Security",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Cybersecurity", "Web Security", "Best Practices", "Authentication"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </div>
        
        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Footer */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Fresh graduate with 13+ projects built using modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-blue-500 text-white text-base px-4 py-2">
              Full-Stack Developer
            </Badge>
            <Badge className="bg-purple-500 text-white text-base px-4 py-2">
              Cybersecurity Enthusiast
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
