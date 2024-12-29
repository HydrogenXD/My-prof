import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,243,255,0.1)_0%,_rgba(0,0,0,0.8)_100%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-neon-pulse">
              Creative<br />Video Editor
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming ideas into captivating visual stories with After Effects & Premiere Pro
            </p>
            <button className="px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 rounded-full font-semibold">
              View My Work
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-darkMagenta shadow-[0_0_30px_rgba(255,0,255,0.5)]">
              <img
                src="../profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}