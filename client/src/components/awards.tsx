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
  ads: Array<{
    image: string;
    heading: string;
    subheading: string;
    showText: boolean;
  }>;
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
      ads: [
        {
          image: "https://iili.io/qd4QflS.jpg",
          heading: "3rd Position Winner",
          subheading: "Orange Summer Challenge 2025",
          showText: true,
        },
        {
          image: "/award-slide-1.jpg",
          heading: "",
          subheading: "",
          showText: false,
        },
        {
          image: "/award-slide-2.jpg",
          heading: "",
          subheading: "",
          showText: false,
        },
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
              <div key={item.id} className="w-full max-w-5xl">
                <style>{`
                  @keyframes rotateAds {
                    0%, 100% { opacity: 1; }
                    32%, 66% { opacity: 0; }
                  }
                  .ad-slide {
                    animation: rotateAds 18s infinite;
                  }
                  .ad-slide:nth-child(2) {
                    animation: rotateAds 18s infinite;
                    animation-delay: 6s;
                  }
                  .ad-slide:nth-child(3) {
                    animation: rotateAds 18s infinite;
                    animation-delay: 12s;
                  }
                `}</style>
                
                <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Rotating ad slides */}
                  {item.ads.map((ad, idx) => (
                    <div
                      key={idx}
                      className="ad-slide absolute inset-0 transition-all duration-500"
                    >
                      <img
                        src={ad.image}
                        alt={ad.heading}
                        className="image-rotate absolute w-full h-full object-cover transition-transform duration-500"
                      />
                      {/* Dark overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    </div>
                  ))}

                  {/* Content overlay - text only on first image */}
                  {item.ads.map((ad, idx) => (
                    <div key={idx} className="ad-slide absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      {ad.showText && (
                        <div className="space-y-4 text-white">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} backdrop-blur-md shadow-lg`}>
                              <Icon className="w-7 h-7" />
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-wider">{item.issuer}</h3>
                              <p className="text-xs text-gray-300">{item.date}</p>
                            </div>
                          </div>

                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                              {ad.heading}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-100 drop-shadow-lg font-medium">
                              {ad.subheading}
                            </p>
                          </div>

                          <p className="text-gray-200 text-base leading-relaxed max-w-2xl">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Pagination indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {item.ads.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === 0 ? "w-8 bg-white" : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
