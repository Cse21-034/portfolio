 import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "tn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Leatile Mosimanyana",
    "hero.subtitle": "Software Engineer & Cybersecurity Specialist",
    "hero.graduate": "BSc (Hons) Computer Systems & Software Engineering",
    "hero.developer": "Full-Stack Software Engineer",
    "hero.security": "Cybersecurity Solutions Expert",
    "hero.innovation": "Innovative Problem Solver",
    "hero.location": "Molepolole, Botswana • Available for Global Remote Roles",
    "hero.projects": "Industrial Projects",
    "hero.technologies": "Core Technologies",
    "hero.experience": "Professional Experience",
    "hero.connect": "Connect for Opportunities",
    "hero.portfolio": "View Portfolio",
    "hero.resume": "Download CV",
    
    // About Section
    "about.title": "Professional Profile",
    "about.subtitle": "Dedicated Software Engineer committed to building secure, high-performance applications and solving complex technical challenges.",
    "about.graduate": "Engineer",
    "about.heading": "Software Engineer & Security Professional",
    "about.intro": "I hold a BSc (Hons) in Computer Systems & Software Engineering, specializing in the intersection of scalable software development and robust cybersecurity protocols.",
    "about.location_desc": "Based in Molepolole, Botswana, I bring a track record of 13+ professional-grade projects. My expertise covers the full development lifecycle, from architectural design to secure deployment of web and mobile solutions.",
    "about.journey": "Currently actively seeking software engineering roles where I can leverage my technical proficiency to deliver high-impact results for global organizations.",
    "about.education": "Education",
    "about.degree": "BSc (Hons) Computer Systems & Software Engineering",
    "about.graduated": "Degree Completed",
    "about.location": "Location",
    "about.remote": "Remote Available",
    "about.fresh": "Modern Expertise",
    "about.fresh_desc": "Expertise in the latest tech stacks and industry-standard security practices",
    "about.ready": "Value-Driven",
    "about.ready_desc": "Focused on delivering measurable business value through technical excellence",
    "about.learner": "Industry Leader",
    "about.learner_desc": "Constantly evolving with emerging technologies to provide cutting-edge solutions",
    
    // Skills Section
    "skills.title": "Technical Expertise",
    "skills.subtitle": "A robust technical stack refined through extensive project implementation and industry-standard practices. Focused on security, scalability, and performance.",
    "skills.recent_graduate": "Software Engineer",
    "skills.projects_built": "13+ Industry Projects",
    "skills.fullstack": "Full-Stack Mastery",
    "skills.security_focused": "Security Specialist",
    "skills.programming": "Languages",
    "skills.frontend": "Frontend Engineering",
    "skills.backend": "Backend & Cloud",
    "skills.tools": "DevOps & Tools",
    "skills.specializations": "Expertise",
    "skills.frameworks": "Frameworks",
    "skills.fresh_title": "Proven Technical Track Record",
    "skills.fresh_desc": "My portfolio of 13+ projects demonstrates my ability to engineer complex, production-ready systems using modern architectural patterns and secure coding practices.",
    "skills.academic": "Core Engineering",
    "skills.practical": "Systems Design",
    "skills.modern": "Scalable Stack",
    "skills.learning": "Technical Growth",
    
    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "A comprehensive showcase of my recent work spanning web development, mobile applications, and cybersecurity solutions. Each project demonstrates technical expertise and creative problem-solving across diverse domains.",
    "projects.search": "Search projects...",
    "projects.all": "All Projects",
    "projects.web": "Web Development",
    "projects.mobile": "Mobile Apps",
    "projects.security": "Cybersecurity",
    "projects.total": "Total Projects",
    "projects.live": "Live Demos",
    "projects.tech": "Technologies",
    "projects.categories": "Categories",
    "projects.featured": "FEATURED PROJECT",
    "projects.source": "Source",
    "projects.demo": "Live Demo",
    "projects.download": "Download",
    "projects.preview": "Preview",
    "projects.docs": "Docs",
    "projects.show_more": "Show More Projects",
    "projects.show_less": "Show Less Projects",
    "projects.no_results": "No projects found",
    "projects.no_results_desc": "Try adjusting your search terms or filter selection.",
    "projects.clear": "Clear Filters",
    "projects.collaborate_title": "Ready to Collaborate?",
    "projects.collaborate_desc": "I'm passionate about creating innovative solutions and bringing ideas to life. Whether you have a project in mind or want to discuss potential opportunities, I'd love to hear from you.",
    "projects.get_touch": "Get In Touch",
    "projects.download_resume": "Download Resume",
    
    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "I'm always interested in new opportunities, collaborations, and meaningful conversations about technology.",
    "contact.connect": "Let's Connect",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin_text": "Connect with me",
    "contact.support": "Support My Work",
    "contact.support_desc": "If you found my projects helpful or would like to support my learning journey, consider buying me a coffee!",
    "contact.send": "Send a Message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sending": "Sending...",
    "contact.send_btn": "Send Message",
    
    // Footer
    "footer.rights": "© 2024 Leatile Mosimanyana. All rights reserved.",
  },
  tn: {
    // Navigation
    "nav.home": "Gae",
    "nav.about": "Ka Nna",
    "nav.skills": "Bokgoni",
    "nav.projects": "Ditiro",
    "nav.contact": "Ikgolaganye",
    
    // Hero Section
    "hero.title": "Leatile Mosimanyana",
    "hero.subtitle": "Moithuti wa Thekenoloji & Motlhagisi wa Pabalesego ya Khomphuta",
    "hero.graduate": "Moithuti wa BSc (Hons) Khomphuta & Boenjiniere jwa Khomphuta",
    "hero.developer": "Moithuti wa Full-Stack",
    "hero.security": "Setsebi sa Pabalesego",
    "hero.innovation": "Motlhabolotlhabolosi",
    "hero.location": "Molepolole, Botswana • O buletswe Tiro ya Kgakala",
    "hero.projects": "Ditiro Tse di Dirilweng",
    "hero.technologies": "Dithekenoloji",
    "hero.experience": "Dingwaga tsa Maitemogelo",
    "hero.connect": "A re Ikgolaganye",
    "hero.portfolio": "Bona Ditiro Tsame",
    "hero.resume": "CV",
    
    // About Section
    "about.title": "Ka Nna",
    "about.subtitle": "Moithuti yo o sa tswang go tswa sekolo, o ratang thekenoloji, pabalesego ya khomphuta le go tlhama ditharollo tse di dirang pharologanyo.",
    "about.graduate": "Moithuti",
    "about.heading": "Moithuti wa Boenjiniere jwa Khomphuta & Setsebi sa Thekenoloji",
    "about.intro": "Ke sa tswa go tswa sekole ka BSc (Hons) mo go Computer Systems & Software Engineering, go supa bokhutlo jwa dingwaga tsa thuto le maitemogelo a a amanang le tlhabololo ya khomphuta le pabalesego.",
    "about.location_desc": "Ke nna kwa Molepolole, Botswana, ke agilwe motheo o o tiileng o o kopanyang kitso ya sekolo le maitemogelo a a amanang le ditiro tse di fetang 13+ tse di akaretsang tlhabololo ya wepe, ditirelo tsa megala le ditharollo tsa pabalesego. Tiro yame e bontsha bokgoni mo dithekenolojing tsa segompieno le boikgafo jwa go tlhama ditharollo tse di sireletsegileng.",
    "about.journey": "Jaaka moithuti yo o sa tswang go tswa sekole yo o tsenang mo lefatsheng la ditiro, ke itumetse go dirisa bokgoni jame jwa thekenoloji go rarabolola mathata a magolo a lefatshe le go tswelela ke ithuta mo seemong sa thekenoloji se se fetogang.",
    "about.education": "Thuto",
    "about.degree": "BSc (Hons) Computer Systems & Software Engineering",
    "about.graduated": "O sa Tswa go Tswa Sekole",
    "about.location": "Lefelo",
    "about.remote": "O Buletswe Tiro ya Kgakala",
    "about.fresh": "Pono e Ncha",
    "about.fresh_desc": "Go tlisa mekgwa e mesha le kitso ya segompieno ya madirelo mo tirong nngwe le nngwe",
    "about.ready": "O Ipaakantse go Tsenya Letsogo",
    "about.ready_desc": "O eletsa go dirisa kitso ya sekolo le bokgoni jo bo amanang mo tikologong ya ditiro",
    "about.learner": "Moithuti wa Leruri",
    "about.learner_desc": "O ikgafile go nna le kitso ya segompieno ka dithekenoloji tse di tlhagelelang le mekgwa e mesha",
    
    // Skills Section
    "skills.title": "Bokgoni & Dithekenoloji",
    "skills.subtitle": "Sedirisiwa se se feletseng se se tlhabolotsweng ka thuto ya sekolo le maitemogelo a a amanang le ditiro. Pono ya moithuti yo mosha e kopantse le tiriso ya maleba mo dithekenolojing tse di farologaneng.",
    "skills.recent_graduate": "Moithuti yo Mosha",
    "skills.projects_built": "13+ Ditiro Tse di Dirilweng",
    "skills.fullstack": "Bokgoni jwa Full-Stack",
    "skills.security_focused": "O Totile Pabalesego",
    "skills.programming": "Dipuo tsa Mananeo",
    "skills.frontend": "Dithekenoloji tsa Pele",
    "skills.backend": "Backend & Database",
    "skills.tools": "Didirisiwa & DevOps",
    "skills.specializations": "Dithebelelo",
    "skills.frameworks": "Di-Framework tsa Segompieno",
    "skills.fresh_title": "Moithuti yo Mosha, Maitemogelo a Mmatota",
    "skills.fresh_desc": "Le fa ke le moithuti yo o sa tswang go tswa sekole, portfolio yame ya ditiro tse 13+ e bontsha tiriso ya maleba ya dithekenoloji tseno mo maemong a mmatota, go simolola ka diwebsaete tse di bonolo go fitlha mo ditirelong tse di raraaneng tsa full-stack.",
    "skills.academic": "Motheo wa Thuto",
    "skills.practical": "Ditiro tsa Maleba",
    "skills.modern": "Setaele sa Segompieno",
    "skills.learning": "Go Ithuta Gangwe le Gape",
    
    // Projects Section
    "projects.title": "Ditiro Tse di Bonagalang",
    "projects.subtitle": "Pontšo e e feletseng ya tiro yame ya bosheng e e akaretsang tlhabololo ya wepe, ditirelo tsa megala le ditharollo tsa pabalesego. Tiro nngwe le nngwe e bontsha bokgoni jwa thekenoloji le go rarabolola mathata ka boitlhabolodi.",
    "projects.search": "Batla ditiro...",
    "projects.all": "Ditiro Tsotlhe",
    "projects.web": "Tlhabololo ya Wepe",
    "projects.mobile": "Di-App tsa Megala",
    "projects.security": "Pabalesego ya Khomphuta",
    "projects.total": "Ditiro Tsotlhe",
    "projects.live": "Di-Demo tse di Tshelang",
    "projects.tech": "Dithekenoloji",
    "projects.categories": "Mefuta",
    "projects.featured": "TIRO E E TLHOPILWENG",
    "projects.source": "Motswedi",
    "projects.demo": "Demo e e Tshelang",
    "projects.download": "Kopolola",
    "projects.preview": "Pontsho",
    "projects.docs": "Dikwalo",
    "projects.show_more": "Bontsha Ditiro Tse Dingwe",
    "projects.show_less": "Bontsha Tse Di Kana",
    "projects.no_results": "Ga go na ditiro tse di bonagaleng",
    "projects.no_results_desc": "Leka go fetola mafoko a batlo kgotsa tlhopho ya sekgao.",
    "projects.clear": "Phimola Dikgao",
    "projects.collaborate_title": "O Ipaakantse go Dirisa Mmogo?",
    "projects.collaborate_desc": "Ke rata go tlhama ditharollo tse di ncha le go tsenya maikutlo mo botshelong. Fa o na le tiro mo maikutlong kgotsa o batla go bua ka ditšhono, ke rata go utlwa gore o reng.",
    "projects.get_touch": "Ikgolaganye le Nna",
    "projects.download_resume": "Kopolola CV",
    
    // Contact Section
    "contact.title": "Ikgolaganye le Nna",
    "contact.subtitle": "Ke duela tlhoko ditšhono tse dintšhwa, tirisano mmogo le dipuisano tse di botlhokwa ka ga thekenoloji.",
    "contact.connect": "A re Ikgolaganye",
    "contact.email": "Aterese ya Imeili",
    "contact.location": "Lefelo",
    "contact.linkedin": "LinkedIn",
    "contact.linkedin_text": "Ikgolaganye le nna",
    "contact.support": "Thusa Tiro Yame",
    "contact.support_desc": "Fa ditiro tsame di go thusitse kgotsa o batla go thusa leeto lame la go ithuta, akanya go nthekela kofi!",
    "contact.send": "Romela Molaetsa",
    "contact.name": "Leina",
    "contact.subject": "Setlhogo",
    "contact.message": "Molaetsa",
    "contact.sending": "Go Romela...",
    "contact.send_btn": "Romela Molaetsa",
    
    // Footer
    "footer.rights": "© 2024 Leatile Mosimanyana. Ditshwanelo tsotlhe di sireletsegile.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  const t = (key: string): string => {
    const currentTranslations = translations[language] as Record<string, string>;
    return currentTranslations[key] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
