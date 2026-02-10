import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
//import { Timeline } from "@/components/timeline";
//import { Skills } from "@/components/skills";
//import { GitHubStats } from "@/components/github-stats";
import { Projects } from "@/components/projects";
import { Awards } from "@/components/awards";
import { Testimonials } from "@/components/testimonials";
//import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Awards />
    {/* <Timeline />*/}
      {/* <Skills />*/}
      
     {/*  <GitHubStats />*/}
      
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
