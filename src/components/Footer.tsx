import React from 'react';
import { Mail, Github, Linkedin, Film, Bot, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-blue/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-6 h-6 text-neon-blue" />
              <span className="text-xl font-bold text-white">VideoMaster</span>
            </div>
            <p className="text-gray-400">
              Creating stunning visual stories through the art of video editing.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-400 hover:text-neon-yellow transition-colors">Work</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-neon-pink transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="mailto:itzmechinmay@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://discordapp.com/users/455245694488543232" className="text-gray-400 hover:text-neon-yellow transition-colors">
                <Bot className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hydrogoon/" className="text-gray-400 hover:text-neon-pink transition-colors">
                < Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/+917008156375" className="text-gray-400 hover:text-neon-pink transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neon-blue/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VideoMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}