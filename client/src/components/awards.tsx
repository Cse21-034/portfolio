import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Medal, Trophy, Star, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-context";

interface Recognition {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: any;
  color: string;
}

export function Awards() {
  const { t } = useLanguage();

  const recognitions: Recognition[] = [
    {
      id: 1,
      title: "Best Academic Performer",
      issuer: "University Council",
      date: "2024",
      description: "Awarded for exceptional academic excellence in Computer Systems & Software Engineering.",
      icon: Trophy,
      color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      id: 2,
      title: "Cybersecurity Excellence Award",
      issuer: "Tech Innovation Hub",
      date: "2023",
      description: "Recognition for developing advanced tamper-proof authentication protocols.",
      icon: ShieldCheck,
      color: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
    },
    {
      id: 3,
      title: "Dean's List of Honor",
      issuer: "BSc (Hons) Faculty",
      date: "2022 - 2024",
      description: "Consistently maintained top-tier grades throughout the engineering program.",
      icon: Medal,
      color: "text-purple-500 bg-purple-100 dark:bg-purple-900/20",
    },
    {
      id: 4,
      title: "Innovation in Software Engineering",
      issuer: "Engineering Symposium",
      date: "2023",
      description: "First place for the Queue Management System with integrated computer vision.",
      icon: Star,
      color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/20",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6 shadow-lg shadow-orange-500/20">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            Awards & Recognitions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Acknowledging professional milestones and academic excellence achieved throughout my career in software engineering and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="group border-0 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col h-full">
                    <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-1">{item.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{item.date}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
