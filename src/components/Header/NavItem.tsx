import React, { useState } from 'react';
import Dropdown from './Dropdown';

interface NavItemProps {
  label: string;
  href?: string;
  dropdownItems?: {
    label: string;
    href: string;
  }[];
}

export default function NavItem({ label, href, dropdownItems }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!dropdownItems) {
    return (
      <a 
        href={href} 
        className="text-white hover:text-neon-yellow transition-colors"
      >
        {label}
      </a>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="text-white hover:text-neon-yellow transition-colors"
      >
        {label}
      </button>
      <Dropdown isOpen={isOpen} items={dropdownItems} />
    </div>
  );
}