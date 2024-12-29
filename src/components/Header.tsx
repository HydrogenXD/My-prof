import React from 'react';
import { Film, Mail, Github, Linkedin, AtSign } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AtSign className="w-8 h-8 text-neon-blue" />
            <span className="text-2xl font-bold text-white animate-neon-pulse">hydrogoon</span>
          </div>
          {/* <div className="flex items-center gap-6">
            <a href="#work" className="text-white hover:text-neon-yellow transition-colors">Work</a>
            <a href="#about" className="text-white hover:text-neon-pink transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-neon-blue transition-colors">Contact</a>
            <div className="flex items-center gap-4 ml-6">
              <a href="#" className="text-white hover:text-neon-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-neon-yellow transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
}