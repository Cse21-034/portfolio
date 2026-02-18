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
  image: string;
}

export function Awards() {
  const { t } = useLanguage();

  const recognitions: Recognition[] = [
    {
      id: 1,
      title: "3rd Position - Orange Summer Challenge 2025",
      issuer: "Orange Digital Center",
      date: "2025",
      description: "Awarded 3rd position in the Orange Summer Challenge 2025 Startup4Good competition for innovative startup ideas.",
      icon: Trophy,
      color: "text-orange-500 bg-orange-100 dark:bg-orange-900/20",
      image: "https://iili.io/qd4QflS.jpg",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            Awards & Recognitions
          </h2>
          
        </div>

        <div className="flex justify-center">
          {recognitions.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="group border-0 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden w-full max-w-md">
                <div className="relative w-full h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-lg flex items-center justify-center ${item.color} backdrop-blur-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <CardHeader className="pb-2">
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
