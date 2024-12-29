import React from 'react';
import VideoCard from './VideoCard';

const projects = [
  {
    title: "Brand Commercial",
    description: "Motion graphics and visual effects for a major brand campaign",
    videoUrl: "https://www.instagram.com/p/example1/",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Music Video",
    description: "Creative direction and editing for an indie artist",
    videoUrl: "https://www.instagram.com/p/example2/",
    thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Short Film",
    description: "Color grading and post-production for an award-winning short",
    videoUrl: "https://www.instagram.com/p/example3/",
    thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 animate-neon-pulse">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <VideoCard
              key={index}
              title={project.title}
              description={project.description}
              videoUrl={project.videoUrl}
              thumbnailUrl={project.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}