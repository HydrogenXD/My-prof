import React from 'react';
import { Film } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Film className="w-8 h-8 text-neon-blue" />
      <span className="text-2xl font-bold text-white animate-neon-pulse">VideoMaster</span>
    </div>
  );
}