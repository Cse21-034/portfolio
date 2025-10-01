import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitFork, Star, Code, Activity, TrendingUp } from "lucide-react";

export function GitHubStats() {
  // Replace 'Cse21-034' with your actual GitHub username
  const username = "Cse21-034";

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-2xl mb-4">
            <Github className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            GitHub Activity
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Active open-source contributor with consistent coding activity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  Active
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">13+</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Public Repositories</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Growing
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Total Commits</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                  2024
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3+ yrs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Coding Experience</p>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Stats Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GitHub Stats Card */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Github className="w-5 h-5" />
                GitHub Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=4F46E5&icon_color=7C3AED&text_color=E5E7EB&count_private=true`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </CardContent>
          </Card>

          {/* Top Languages Card */}
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="w-5 h-5" />
                Most Used Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=4F46E5&text_color=E5E7EB`}
                alt="Top Languages"
                className="w-full"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>

        {/* GitHub Streak Stats */}
        <div className="mt-6">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Activity className="w-5 h-5" />
                Contribution Streak
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0D1117&ring=4F46E5&fire=7C3AED&currStreakLabel=E5E7EB`}
                alt="GitHub Streak"
                className="max-w-full"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>

        {/* GitHub Activity Graph */}
        <div className="mt-6">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5" />
                Contribution Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex justify-center">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0D1117&color=4F46E5&line=7C3AED&point=E5E7EB`}
                alt="GitHub Activity Graph"
                className="w-full"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View Full Profile on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
