 import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Boitshepo",
    role: "CEO & Founder",
    company: "Lexfarms",
    avatar: "https://ui-avatars.com/api/?name=Alex+Boitshepo&background=4f46e5&color=fff",
    rating: 5,
    text: "Leatile developed a comprehensive farm management system that transformed our operations. His solution is intuitive and efficient, and he demonstrated excellent understanding of our business needs.",
    project: "Farm Management System",
    date: "2024",
  },
  {
    id: 2,
    name: "Oratile Masala",
    role: "CEO",
    company: "Loadxafrica",
    avatar: "https://ui-avatars.com/api/?name=Oratile+Masala&background=10b981&color=fff",
    rating: 5,
    text: "Leatile built an excellent logistic web application that streamlined our operations. His technical expertise and dedication to quality delivery impressed us greatly.",
    project: "Logistic Web Application",
    date: "2024",
  },
  {
    id: 3,
    name: "Lame Gare",
    role: "Founder & CEO",
    company: "Solidcare Services",
    avatar: "https://ui-avatars.com/api/?name=Lame+Gare&background=f59e0b&color=fff",
    rating: 5,
    text: "Working with Leatile as our technical developer was exceptional. He delivered professional applications that met our requirements perfectly and showed great problem-solving skills.",
    project: "Company Applications",
    date: "2024",
  },
  {
    id: 4,
    name: "Theo Motseise",
    role: "Web & App Development Instructor",
    company: "Orange Digital Center",
    avatar: "https://ui-avatars.com/api/?name=Theo+Motseise&background=ec4899&color=fff",
    rating: 5,
    text: "Leatile's participation in the Orange Summer Challenge 2025 Startup4Good demonstrated remarkable commitment and innovation. His efforts were impressive and well-deserving of recognition.",
    project: "Orange Summer Challenge 2025",
    date: "2025",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  // Calculate visible testimonials for carousel
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], offset: i });
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Feedback from professors, clients, and colleagues I've had the pleasure of working with throughout my journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">{testimonials.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5.0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">13+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <Avatar className="w-20 h-20 border-4 border-blue-500">
                  <AvatarImage src={current.avatar} alt={current.name} />
                  <AvatarFallback>{current.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {current.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {current.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {current.company}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary">{current.project}</Badge>
                  </div>
                </div>
              </div>
              
              <Quote className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-4 opacity-50" />
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {current.text}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">{current.date}</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-blue-600 dark:bg-blue-400"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                testimonial.id === current.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => goToTestimonial(testimonials.indexOf(testimonial))}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-blue-500">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-4 mb-3">
                  {testimonial.text}
                </p>
                
                <Badge variant="secondary" className="text-xs">
                  {testimonial.project}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
