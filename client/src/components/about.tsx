import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Calendar, Trophy } from "lucide-react";
 import { useLanguage } from "@/components/language-context";


export function About() {
  const { t } = useLanguage(); // ✅ use translations

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://iili.io/FndI3IS.png"
                alt="Professional developer workspace"
                className="rounded-xl shadow-2xl w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t("about.graduate")} 🎓
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 mb-4">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">{t("about.graduate")}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("about.heading")}
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t("about.intro")}</p>
              <p>{t("about.location_desc")}</p>
              <p>{t("about.journey")}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.education")}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.degree")}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{t("about.graduated")}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t("about.location")}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Molepolole, Botswana</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{t("about.remote")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">13+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("hero.projects")}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("hero.technologies")}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("hero.experience")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("about.fresh")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.fresh_desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("about.ready")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.ready_desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 border-cyan-200 dark:border-cyan-700">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("about.learner")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t("about.learner_desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
