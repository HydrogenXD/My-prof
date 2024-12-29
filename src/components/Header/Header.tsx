import React from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import SocialLinks from './SocialLinks';

export default function Header() {
  const aboutItems = [
    { label: 'My Story', href: '#story' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' }
  ];

  const contactItems = [
    { label: 'Email', href: '#email' },
    { label: 'Schedule Call', href: '#call' },
    { label: 'Social Media', href: '#social' }
  ];

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <NavItem label="Work" href="#work" />
            <NavItem label="About" dropdownItems={aboutItems} />
            <NavItem label="Contact" dropdownItems={contactItems} />
            <SocialLinks />
          </div>
        </div>
      </nav>
    </header>
  );
}