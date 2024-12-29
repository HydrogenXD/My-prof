import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Creative Studios",
    content: "The attention to detail in motion graphics and seamless transitions made our brand campaign stand out.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mike Chen",
    role: "Music Artist",
    company: "Independent",
    content: "Transformed my music video vision into reality. The visual effects were beyond my expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Emma Davis",
    role: "Film Director",
    company: "Indie Films Co",
    content: "Outstanding color grading work. Every frame was treated with artistic precision.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 animate-neon-pulse text-center">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="bg-black/40 p-8 rounded-lg border border-neon-yellow/20 group-hover:border-neon-yellow transition-colors duration-300">
                <Quote className="w-8 h-8 text-neon-pink mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-neon-pink"
                  />
                  <div>
                    <h3 className="text-neon-yellow font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}