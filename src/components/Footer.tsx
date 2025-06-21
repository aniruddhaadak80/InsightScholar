
import { Heart, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aniruddha-adak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      url: "https://github.com/AniruddhaAdak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
      color: "hover:text-gray-800"
    },
    {
      name: "Twitter",
      url: "https://x.com/aniruddhadak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
      color: "hover:text-blue-400"
    },
    {
      name: "Dev.to",
      url: "https://dev.to/aniruddhaadak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/devdotto.svg",
      color: "hover:text-black"
    },
    {
      name: "CodePen",
      url: "https://codepen.io/aniruddhaadak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codepen.svg",
      color: "hover:text-green-600"
    },
    {
      name: "Portfolio",
      url: "https://aniruddha-adak.vercel.app",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
      color: "hover:text-black"
    },
    {
      name: "Telegram",
      url: "https://t.me/aniruddhaadak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg",
      color: "hover:text-blue-500"
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/aniruddha.adak",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linktree.svg",
      color: "hover:text-green-500"
    }
  ];

  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Analysis", href: "#analysis" },
    { name: "Visualization", href: "#visualization" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-scholar-blue to-scholar-purple p-3 rounded-xl">
                <img 
                  src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎓</text></svg>" 
                  alt="InsightScholar" 
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
                  InsightScholar
                </h3>
                <p className="text-gray-400 text-sm">AI Research Assistant</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transform your research workflow with AI-powered analysis, visual data insights, 
              and intelligent hypothesis generation. Accelerate discovery with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Powered by Gemini AI</span>
              <span>•</span>
              <span>Built with React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-scholar-blue transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:aniruddhaadak80@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-scholar-blue transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>aniruddhaadak80@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <ExternalLink className="h-5 w-5" />
                <span>Available for collaborations</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Creator Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">
              Created by Aniruddha Adak
            </h4>
            <p className="text-gray-300">
              Full Stack Developer & AI Enthusiast passionate about building innovative research tools
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 ${link.color}`}
              >
                <img 
                  src={link.icon} 
                  alt={link.name}
                  className="h-8 w-8 mb-2 filter invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© 2024 InsightScholar. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Aniruddha Adak</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>All rights reserved</span>
            <span>•</span>
            <span>Open Source Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
