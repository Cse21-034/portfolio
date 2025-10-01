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
    name: "Dr. Sarah Kgosi",
    role: "Senior Lecturer",
    company: "Botho University",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Kgosi&background=4f46e5&color=fff",
    rating: 5,
    text: "Leatile demonstrated exceptional technical aptitude throughout his studies. His final year project on queue management systems showed remarkable problem-solving skills and attention to detail. He consistently went above and beyond course requirements.",
    project: "Academic Supervisor",
    date: "October 2024",
  },
  {
    id: 2,
    name: "Thabo Molefe",
    role: "Project Manager",
    company: "Ottawa Ndzibs Shipping",
    avatar: "https://ui-avatars.com/api/?name=Thabo+Molefe&background=10b981&color=fff",
    rating: 5,
    text: "Working with Leatile on our shipping website was a pleasure. He delivered a professional, full-featured platform with admin CMS and dynamic pricing. His communication was excellent and he met all deadlines. Highly recommended!",
    project: "Ottawa Shipping Website",
    date: "September 2024",
  },
  {
    id: 3,
    name: "Mpho Khumo",
    role: "Business Owner",
    company: "Agri Services BW",
    avatar: "https://ui-avatars.com/api/?name=Mpho+Khumo&background=f59e0b&color=fff",
    rating: 5,
    text: "Leatile created a beautiful, responsive website for our agricultural services business. The image gallery and contact management system work flawlessly. He was patient with our requests and delivered exactly what we needed.",
    project: "Agri Services Website",
    date: "August 2024",
  },
  {
    id: 4,
    name: "Keabetswe Moagi",
    role: "Peer Developer",
    company: "Botho University",
    avatar: "https://ui-avatars.com/api/?name=Keabetswe+Moagi&background=8b5cf6&color=fff",
    rating: 5,
    text: "Collaborated with Leatile on several group projects. His expertise in both frontend and backend development was invaluable. He's always willing to help teammates and shares knowledge freely. A true team player!",
    project: "Group Projects Collaboration",
    date: "June 2024",
  },
  {
    id: 5,
    name: "John Smith",
    role: "Entrepreneur",
    company: "Tech Startup",
    avatar: "https://ui-avatars.com/api/?name=John+Smith&background=ec4899&color=fff",
    rating: 5,
    text: "Leatile built our e-commerce platform from scratch. The authentication system, shopping cart, and admin dashboard all work perfectly. Despite being a recent graduate, his code quality and architectural decisions were professional-grade.",
    project: "E-Commerce Platform",
    date: "July 2024",
  },
  {
    id: 6,
    name: "Lesego Tsheko",
    role: "Cybersecurity Student",
    company: "Botho University",
    avatar: "https://ui-avatars.com/api/?name=Lesego+Tsheko&background=06b6d4&color=fff",
    rating: 5,
    text: "Leatile mentored me in cybersecurity concepts and helped me understand penetration testing. His network security monitor project inspired me to pursue security research. Great mentor and skilled professional!",
    project: "Mentorship & Security Projects",
    date: "May 2024",
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
              key={
