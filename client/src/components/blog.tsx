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
  User,
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
