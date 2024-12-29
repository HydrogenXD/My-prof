import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
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
  );
}