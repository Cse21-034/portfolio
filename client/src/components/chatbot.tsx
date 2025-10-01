import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  content: string;
  isUser: boolean;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: `👋 Hello! I'm here to help you learn about Leatile Mosimanyana's expertise in software engineering and cybersecurity. 
      <br><br>
      Feel free to ask me about:
      <br>• His technical skills and experience
      <br>• Available services and consulting
      <br>• Past projects and achievements
      <br>• How to get in touch for collaborations
      <br><br>
      What would you like to know?`,
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const knowledge = {
    services: [
      "Full-stack web development (React, Node.js, Python, PHP)",
      "Mobile app development (React Native, Java)",
      "Cybersecurity consulting and penetration testing",
      "Cloud infrastructure setup (AWS, Azure, Google Cloud)",
      "Database design and optimization",
      "API development and integration",
      "Security audits and vulnerability assessments",
      "DevOps and CI/CD pipeline setup",
      "IT consulting and system architecture",
      "Custom software solutions for businesses"
    ],
    skills: {
      programming: ["JavaScript/TypeScript", "Python", "PHP", "Java", "SQL", "HTML/CSS"],
      frameworks: ["React", "Next.js", "Node.js", "Express", "TailwindCSS", "Drizzle ORM"],
      cybersecurity: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Ethical Hacking", "Security Auditing"],
      cloud: ["Vercel", "Render", "Docker", "PostgreSQL", "MySQL"],
      tools: ["Git/GitHub", "Vite", "Tanstack Query", "Zod", "WebSocket"]
    },
    experience: "Recent graduate with 3+ years of hands-on project experience",
    location: "Molepolole, Botswana",
    contact: {
      email: "leatilemanando@gmail.com",
      website: "lmosimanyana.co.bw",
      linkedin: "Available on the portfolio website",
      location: "Molepolole, Botswana",
      response_time: "Usually responds within 24 hours"
    },
    pricing: {
      consultation: "Free initial consultation (30 minutes)",
      hourly_rate: "Competitive rates based on project complexity",
      project_based: "Fixed pricing available for well-defined projects",
      maintenance: "Ongoing support and maintenance packages available"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm here to tell you all about Leatile Mosimanyana's expertise in software engineering and cybersecurity. What specific area interests you most?";
    }

    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('what can you help')) {
      return `🛠️ <strong>Leatile offers comprehensive tech services:</strong><br><br>
      ${knowledge.services.map(service => `• ${service}`).join('<br>')}
      <br><br>Would you like me to elaborate on any of these services?`;
    }

    // Technical skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming') || lowerMessage.includes('technical')) {
      return `💻 <strong>Leatile's Technical Expertise:</strong><br><br>
      <strong>Programming Languages:</strong><br>${knowledge.skills.programming.join(', ')}<br><br>
      <strong>Frameworks & Tools:</strong><br>${knowledge.skills.frameworks.join(', ')}<br><br>
      <strong>Cybersecurity:</strong><br>${knowledge.skills.cybersecurity.join(', ')}<br><br>
      <strong>Cloud & DevOps:</strong><br>${knowledge.skills.cloud.join(', ')}<br><br>
      Need details about any specific technology?`;
    }

    // Cybersecurity
    if (lowerMessage.includes('cybersecurity') || lowerMessage.includes('security') || lowerMessage.includes('penetration') || lowerMessage.includes('hacking')) {
      return `🔒 <strong>Cybersecurity Services:</strong><br><br>
      Leatile specializes in:<br>
      • Penetration testing and ethical hacking<br>
      • Vulnerability assessments and security audits<br>
      • Network security implementation<br>
      • Security tool development<br>
      • Security policy development<br><br>
      🎯 <em>With ${knowledge.experience}, Leatile has built numerous projects demonstrating practical cybersecurity expertise.</em><br><br>
      Would you like to discuss a specific security concern?`;
    }

    // Contact information
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return `📞 <strong>Get In Touch:</strong><br><br>
      • <strong>Website:</strong> ${knowledge.contact.website}<br>
      • <strong>Email:</strong> ${knowledge.contact.email}<br>
      • <strong>LinkedIn:</strong> ${knowledge.contact.linkedin}<br>
      • <strong>Location:</strong> ${knowledge.contact.location}<br><br>
      💬 <strong>Response Time:</strong> ${knowledge.contact.response_time}<br><br>
      🎁 <strong>Free Consultation:</strong> ${knowledge.pricing.consultation}<br><br>
      Ready to start your project? Scroll down to the contact section to get in touch!`;
    }

    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('budget')) {
      return `💰 <strong>Pricing Structure:</strong><br><br>
      • <strong>Initial Consultation:</strong> ${knowledge.pricing.consultation}<br>
      • <strong>Hourly Rate:</strong> ${knowledge.pricing.hourly_rate}<br>
      • <strong>Project-Based:</strong> ${knowledge.pricing.project_based}<br>
      • <strong>Maintenance:</strong> ${knowledge.pricing.maintenance}<br><br>
      💡 <em>Every project is unique! Leatile provides custom quotes based on your specific requirements and timeline.</em><br><br>
      Ready for a free consultation to discuss your project?`;
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('portfolio') || lowerMessage.includes('project')) {
      return `🏆 <strong>Professional Background:</strong><br><br>
      • <strong>Education:</strong> BSc (Hons) Computer Systems & Software Engineering Graduate<br>
      • <strong>Experience:</strong> ${knowledge.experience}<br>
      • <strong>Specialization:</strong> Full-stack development & cybersecurity<br>
      • <strong>Industry Focus:</strong> Modern web applications, mobile apps, and security solutions<br><br>
      🎯 <strong>Notable Projects:</strong><br>
      • 13+ completed projects across different domains<br>
      • Custom web applications with modern frameworks<br>
      • Mobile app development and deployment<br>
      • Security tools and vulnerability assessment systems<br>
      • Cloud-based solutions and API integrations<br><br>
      Want to see specific examples? Check out the Projects section above!`;
    }

    // Web development
    if (lowerMessage.includes('web development') || lowerMessage.includes('website') || lowerMessage.includes('react') || lowerMessage.includes('frontend')) {
      return `🌐 <strong>Web Development Services:</strong><br><br>
      <strong>Frontend Development:</strong><br>
      • React.js & Next.js applications with modern UI/UX<br>
      • Responsive design for all devices<br>
      • Progressive Web Apps (PWAs)<br>
      • Performance optimization<br><br>
      <strong>Backend Development:</strong><br>
      • Node.js and Express APIs<br>
      • Database design and optimization (PostgreSQL, MySQL)<br>
      • Cloud deployment and scaling<br>
      • Security implementation<br><br>
      Ready to build your next web application?`;
    }

    // Mobile development
    if (lowerMessage.includes('mobile') || lowerMessage.includes('app') || lowerMessage.includes('android') || lowerMessage.includes('ios')) {
      return `📱 <strong>Mobile App Development:</strong><br><br>
      • <strong>Native Android:</strong> Java development<br>
      • <strong>Cross-platform:</strong> React Native<br>
      • <strong>Features:</strong> Push notifications, offline functionality, real-time updates<br>
      • <strong>Backend Integration:</strong> APIs, databases, cloud services<br><br>
      🚀 <em>From concept to app store deployment, Leatile handles the complete mobile development lifecycle.</em><br><br>
      Have a mobile app idea you'd like to discuss?`;
    }

    // Location/availability
    if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('botswana') || lowerMessage.includes('molepolole')) {
      return `📍 <strong>Location & Availability:</strong><br><br>
      • <strong>Based in:</strong> ${knowledge.location}<br>
      • <strong>Remote Work:</strong> Available for global clients<br>
      • <strong>Time Zone:</strong> CAT (Central Africa Time)<br>
      • <strong>Languages:</strong> English, Setswana<br><br>
      🌍 <em>While based in Botswana, Leatile works with clients worldwide and is experienced in remote collaboration.</em><br><br>
      Ready to discuss your project regardless of your location?`;
    }

    // Thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! 😊 I'm here whenever you need information about Leatile's services. Feel free to ask anything else or scroll down to the contact section to get started on your project!";
    }

    // Default response
    return `I'd be happy to help you learn more about Leatile Mosimanyana! 🤖<br><br>
    You can ask me about:<br>
    • 🛠️ Technical services and expertise<br>
    • 🔒 Cybersecurity solutions<br>
    • 💻 Development projects<br>
    • 💰 Pricing and consultation<br>
    • 📞 How to get in touch<br><br>
    What interests you most?`;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      content: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage: Message = {
        content: response,
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowBadge(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {/* Chat Container */}
      <div
        className={`absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-[20px] shadow-2xl w-[380px] h-[550px] flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          isOpen ? "flex animate-in slide-in-from-bottom-5" : "hidden"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center relative">
          <button
            onClick={toggleChat}
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 rounded-full w-7 h-7 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <h1 className="text-lg font-semibold mb-1">
            Hi! I'm Leatile's Assistant{" "}
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </h1>
          <p className="text-xs opacity-90">
            Ask me about his services, experience, or how to get in touch
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-2 items-start ${
                message.isUser ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                  message.isUser
                    ? "bg-gradient-to-br from-green-500 to-green-600"
                    : "bg-gradient-to-br from-blue-600 to-purple-600"
                }`}
              >
                {message.isUser ? "You" : "LA"}
              </div>
              <div
                className={`max-w-[75%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  message.isUser
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: message.content }}
              />
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs font-bold">
                LA
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 p-3 border-2 border-gray-200 dark:border-gray-600 rounded-full text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ""}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-105 relative ${
          isOpen
            ? "bg-gradient-to-r from-red-500 to-red-600"
            : "bg-gradient-to-r from-blue-600 to-purple-600"
        }`}
      >
        {showBadge && !isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-bounce">
            1
          </div>
        )}
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
