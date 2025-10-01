import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Code, 
  Rocket, 
  Award, 
  Briefcase,
  BookOpen,
  Zap,
  Target
} from "lucide-react";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  achievements: string[];
  tags: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2021",
    title: "Started My Coding Journey",
    subtitle: "Introduction to Programming",
    description: "Discovered my passion for programming through introductory courses in Python and Java. Built my first calculator app and realized the potential of technology to solve real-world problems.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "First 'Hello World' program",
      "Completed Python fundamentals",
      "Built calculator application"
    ],
    tags: ["Python", "Java", "Fundamentals"]
  },
  {
    id: 2,
    year: "2022",
    title: "Web Development Deep Dive",
    subtitle: "Full-Stack Foundation",
    description: "Mastered HTML, CSS, and JavaScript. Created my first full-stack applications using PHP and MySQL. Discovered the power of React and modern web frameworks.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Built 5+ web applications",
      "Learned React & Node.js",
      "Created AI-Solutions website",
      "Mastered responsive design"
    ],
    tags: ["HTML/CSS", "JavaScript", "React", "PHP"]
  },
  {
    id: 3,
    year: "2023",
    title: "Cybersecurity & Advanced Projects",
    subtitle: "Security Specialist Training",
    description: "Expanded into cybersecurity with penetration testing and network security. Built complex systems including queue management with facial recognition and e-commerce platforms.",
    icon: Briefcase,
    color: "from-red-500 to-orange-500",
    achievements: [
      "Developed security assessment tools",
      "Built queue management system",
      "Created e-commerce platform",
      "Learned WebSocket & real-time tech"
    ],
    tags: ["Cybersecurity", "React", "PostgreSQL", "WebSocket"]
  },
  {
    id: 4,
    year: "2024 Q1-Q2",
    title: "Mobile & Advanced Web",
    subtitle: "Cross-Platform Development",
    description: "Dove into mobile app development with Java for Android. Built sophisticated web applications with modern architecture patterns including MVC and microservices.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    achievements: [
      "Developed Food Recipe mobile app",
      "Built shipping logistics platform",
      "Mastered TypeScript",
      "Implemented cloud deployments"
    ],
    tags: ["Mobile", "Java", "TypeScript", "Cloud"]
  },
  {
    id: 5,
    year: "2024 Q3",
    title: "Portfolio Expansion",
    subtitle: "Real-World Applications",
    description: "Created multiple production-ready applications for real clients including agricultural services, shipping companies, and trading platforms. Focused on scalable, secure solutions.",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    achievements: [
      "Delivered 6+ client projects",
      "Built betting plan manager",
      "Created Agri Services platform",
      "Implemented advanced security features"
    ],
    tags: ["Client Work", "Production", "Full-Stack"]
  },
  {
    id: 6,
    year: "2024 Q4",
    title: "Graduation & Professional Launch",
    subtitle: "BSc (Hons) Computer Systems & Software Engineering",
    description: "Successfully graduated with honors, completing a comprehensive capstone project. Now entering the professional world with 13+ projects, modern tech stack mastery, and a passion for innovation.",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
    achievements: [
      "Graduated with BSc (Hons) degree",
      "Completed 13+ diverse projects",
      "Mastered 15+ technologies",
      "Ready for professional challenges"
    ],
    tags: ["Graduate", "Portfolio Complete", "Job Ready"]
  },
  {
    id: 7,
    year: "2025+",
    title: "Future Goals",
    subtitle: "Continuous Growth & Innovation",
    description: "Committed to continuous learning, building innovative solutions, and contributing to the tech community. Excited to work on challenging projects and make a meaningful impact.",
    icon: Target,
    color: "from-pink-500 to-rose-500",
    achievements: [
      "Contribute to open source",
      "Build AI-powered applications",
      "Mentor aspiring developers",
      "Scale professional expertise"
    ],
    tags: ["Future", "Innovation", "Growth"]
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to accomplished graduate — a timeline of dedication, learning, and growth in software engineering and cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                    <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <event.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {event.year}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {event.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${event.color} mt-1.5 flex-shrink-0`}></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 items-center justify-center shadow-lg z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white`}>
                    <event.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Years Learning
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              13+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Projects Built
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Dedicated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
