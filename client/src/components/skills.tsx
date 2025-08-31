import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Layers, 
  Wrench, 
  Shield,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Zap,
  Award
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "TypeScript/JavaScript", level: 92, color: "bg-blue-500", experience: "3+ years" },
        { name: "Python", level: 88, color: "bg-yellow-500", experience: "3+ years" },
        { name: "PHP", level: 75, color: "bg-purple-600", experience: "2+ years" },
        { name: "Java", level: 70, color: "bg-orange-600", experience: "2+ years" },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "React/Next.js", level: 90, color: "bg-cyan-500", experience: "2+ years" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500", experience: "3+ years" },
        { name: "TailwindCSS", level: 85, color: "bg-teal-500", experience: "2+ years" },
        { name: "Responsive Design", level: 88, color: "bg-green-500", experience: "2+ years" },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js/Express", level: 85, color: "bg-green-600", experience: "2+ years" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-600", experience: "2+ years" },
        { name: "MySQL", level: 78, color: "bg-orange-600", experience: "2+ years" },
        { name: "Drizzle ORM", level: 75, color: "bg-purple-500", experience: "1+ year" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-700", experience: "3+ years" },
        { name: "Vercel/Render", level: 85, color: "bg-black", experience: "2+ years" },
        { name: "Docker", level: 65, color: "bg-blue-500", experience: "1+ year" },
        { name: "Vite/Build Tools", level: 80, color: "bg-yellow-500", experience: "1+ year" },
      ]
    },
    {
      title: "Specializations",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        { name: "Cybersecurity", color: "text-red-500", projects: "3 projects", badge: "Security" },
        { name: "Full-Stack Development", color: "text-blue-500", projects: "8 projects", badge: "Web" },
        { name: "Mobile Development", color: "text-green-500", projects: "2 projects", badge: "Mobile" },
        { name: "System Architecture", color: "text-purple-500", projects: "5 projects", badge: "Architecture" },
      ]
    },
    {
      title: "Modern Frameworks",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "React Query/TanStack", color: "text-red-500", badge: "State Management" },
        { name: "Zod Validation", color: "text-blue-500", badge: "Type Safety" },
        { name: "React Hook Form", color: "text-green-500", badge: "Forms" },
        { name: "WebSocket/Real-time", color: "text-purple-500", badge: "Real-time" },
      ]
    }
  ];

  const achievements = [
    { title: "Recent Graduate", icon: <Award className="h-4 w-4" />, color: "bg-green-500" },
    { title: "13+ Projects Built", icon: <Code className="h-4 w-4" />, color: "bg-blue-500" },
    { title: "Full-Stack Expertise", icon: <Layers className="h-4 w-4" />, color: "bg-purple-500" },
    { title: "Security Focused", icon: <Shield className="h-4 w-4" />, color: "bg-red-500" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit developed through academic study and hands-on project experience. 
            Fresh graduate perspective combined with practical application across diverse technologies.
          </p>
        </div>

        {/* Achievements Banner */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className={`inline-flex items-center gap-2 ${achievement.color} text-white px-4 py-2 rounded-full shadow-lg`}>
              {achievement.icon}
              <span className="text-sm font-medium">{achievement.title}</span>
            </div>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      {skill.level ? (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-800 dark:text-gray-200 font-medium">
                                {skill.name}
                              </span>
                              {skill.experience && (
                                <Badge variant="secondary" className="text-xs">
                                  {skill.experience}
                                </Badge>
                              )}
                            </div>
                            <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${skill.color?.replace('text-', 'bg-')}`} />
                            <span className="text-gray-800 dark:text-gray-200 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {skill.badge && (
                              <Badge variant="outline" className="text-xs">
                                {skill.badge}
                              </Badge>
                            )}
                            {skill.projects && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {skill.projects}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Fresh Graduate, Real Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              While I'm a recent graduate, my portfolio of 13+ projects demonstrates practical application 
              of these technologies in real-world scenarios, from simple websites to complex full-stack applications 
              with modern architecture patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-green-500 text-white">Academic Foundation</Badge>
              <Badge className="bg-blue-500 text-white">Practical Projects</Badge>
              <Badge className="bg-purple-500 text-white">Modern Stack</Badge>
              <Badge className="bg-orange-500 text-white">Continuous Learning</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
