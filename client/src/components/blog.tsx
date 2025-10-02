 import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Filter,
  Calendar,
  Tag
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Real-Time Queue Management System with Face Recognition",
    excerpt: "A deep dive into creating an intelligent queue management system using React, WebSocket, and computer vision. Learn how we integrated face recognition for automated check-ins.",
    category: "Case Study",
    readTime: "8 min read",
    date: "Oct 15, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "WebSocket", "Computer Vision", "PostgreSQL"],
    featured: true
  },
  {
    id: 2,
    title: "From Idea to Production: Ottawa Shipping Platform Case Study",
    excerpt: "How I built a full-featured logistics platform from scratch including admin CMS, dynamic pricing calculator, and customer management system for a China-Botswana freight company.",
    category: "Case Study",
    readTime: "10 min read",
    date: "Sep 28, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["TypeScript", "Express", "PostgreSQL", "Business Logic"],
    featured: true
  },
  {
    id: 3,
    title: "Security Best Practices: Building a Vulnerability Scanner",
    excerpt: "Lessons learned while developing an automated security assessment tool. Discover the architecture decisions and security considerations that went into this cybersecurity project.",
    category: "Technical",
    readTime: "6 min read",
    date: "Sep 10, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Cybersecurity", "Nmap", "Security"],
    featured: false
  },
  {
    id: 4,
    title: "State Management in Modern React: Lessons from 13+ Projects",
    excerpt: "After building numerous React applications, here are my insights on choosing the right state management solution. From Context API to Tanstack Query.",
    category: "Tutorial",
    readTime: "7 min read",
    date: "Aug 22, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "State Management", "Best Practices"],
    featured: false
  },
  {
    id: 5,
    title: "Building Scalable E-Commerce: Authentication & Payment Integration",
    excerpt: "A comprehensive guide to building a secure e-commerce platform with Passport.js authentication, Express sessions, and payment gateway integration.",
    category: "Case Study",
    readTime: "12 min read",
    date: "Aug 5, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Node.js", "Authentication", "E-Commerce", "Security"],
    featured: false
  },
  {
    id: 6,
    title: "Mobile Development Journey: From Zero to Food Recipe App",
    excerpt: "My experience building an Android app with Java, Firebase, and offline sync. Key challenges faced and solutions implemented.",
    category: "Tutorial",
    readTime: "9 min read",
    date: "Jul 18, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Mobile", "Java", "Firebase", "Android"],
    featured: false
  },
  {
    id: 7,
    title: "Database Design Patterns: PostgreSQL vs MySQL in Production",
    excerpt: "Comparing database choices across multiple projects. When to use PostgreSQL, when MySQL makes more sense, and optimization strategies.",
    category: "Technical",
    readTime: "8 min read",
    date: "Jul 3, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Database", "PostgreSQL", "MySQL", "Architecture"],
    featured: false
  },
  {
    id: 8,
    title: "TypeScript in Production: Why I Switched and Never Looked Back",
    excerpt: "The journey from JavaScript to TypeScript across my projects. Real-world benefits, challenges, and why type safety matters.",
    category: "Opinion",
    readTime: "5 min read",
    date: "Jun 15, 2024",
    author: "Leatile Mosimanyana",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["TypeScript", "JavaScript", "Development"],
    featured: false
  }
];

export function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Posts", count: blogPosts.length },
    { id: "Case Study", label: "Case Studies", count: blogPosts.filter(p => p.category === "Case Study").length },
    { id: "Tutorial", label: "Tutorials", count: blogPosts.filter(p => p.category === "Tutorial").length },
    { id: "Technical", label: "Technical", count: blogPosts.filter(p => p.category === "Technical").length },
  ];

  const filteredPosts = activeFilter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = filteredPosts.filter(post => !post.featured || activeFilter !== "all");

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Blog & Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep dives into my projects, technical insights, and lessons learned from building real-world applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {category.id === "all" && <Filter className="w-4 h-4 mr-2" />}
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {activeFilter === "all" && featuredPost && (
          <Card className="mb-12 bg-white dark:bg-gray-800 shadow-2xl border-0 overflow-hidden group">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-2 text-center">
              ⭐ FEATURED ARTICLE
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Learn More?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I regularly share insights, tutorials, and case studies from my projects. 
              Follow my journey and learn from real-world development experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                Subscribe to Updates
              </Button>
              <Button variant="outline">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
