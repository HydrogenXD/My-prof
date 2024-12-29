import React from 'react';

interface DropdownProps {
  isOpen: boolean;
  items: {
    label: string;
    href: string;
  }[];
}

export default function Dropdown({ isOpen, items }: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-black/90 border border-neon-blue/20 overflow-hidden">
      <div className="py-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-neon-blue/10 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}