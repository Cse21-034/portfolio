import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Layers, 
  Wrench, 
  Shield,
  Database,
  Globe,
  Smartphone,
  Cpu
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-400" },
        { name: "Java", level: 75, color: "bg-orange-600" },
        { name: "C#", level: 60, color: "bg-purple-600" },
      ]
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "React", color: "text-blue-400" },
        { name: "Node.js", color: "text-green-500" },
        { name: "Django", color: "text-orange-500" },
        { name: "Bootstrap", color: "text-purple-500" },
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git", color: "text-orange-600" },
        { name: "Docker", color: "text-blue-500" },
        { name: "AWS", color: "text-orange-400" },
        { name: "SQL", color: "text-blue-600" },
      ]
    },
    {
      title: "Specializations",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        { name: "Cybersecurity", color: "text-red-500" },
        { name: "Mobile Dev", color: "text-green-500" },
        { name: "Arduino", color: "text-gray-600" },
        { name: "Web Dev", color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-white dark:bg-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-cyan-400">
                    {category.icon}
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      {skill.level ? (
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {skill.name}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
