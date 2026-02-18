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
  images: string[];
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
      images: [
        "https://iili.io/qd4QflS.jpg",
        "https://images.unsplash.com/photo-1553531088-df340cf313d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=500",
      ],
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
              <Card key={item.id} className="group border-0 bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden w-full max-w-4xl">
                <div className="relative w-full h-96 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <style>{`
                    @keyframes rotateImages {
                      0%, 100% { opacity: 1; }
                      32%, 66% { opacity: 0; }
                    }
                    .image-rotate {
                      animation: rotateImages 8s infinite;
                    }
                    .image-rotate:nth-child(2) {
                      animation: rotateImages 8s infinite;
                      animation-delay: 2.67s;
                    }
                    .image-rotate:nth-child(3) {
                      animation: rotateImages 8s infinite;
                      animation-delay: 5.34s;
                    }
                  `}</style>
                  {item.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${item.title} - Image ${idx + 1}`}
                      className="image-rotate absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  <div className={`absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center ${item.color} backdrop-blur-sm shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <CardHeader className="pb-3 pt-8">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-lg font-bold text-orange-600 dark:text-orange-400">{item.issuer}</p>
                        <p className="text-md text-gray-500 dark:text-gray-400 font-semibold">{item.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
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
