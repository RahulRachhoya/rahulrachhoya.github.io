import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/RahulRachhoya' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rahulrachhoya' },
    { label: 'Twitter', href: 'https://twitter.com/rahulrachhoya' },
  ];

  return (
    <footer className="py-12 border-t border-[var(--border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-[var(--text-primary)] mb-1">
              Rahul Rachhoya
            </div>
            <div className="text-sm text-[var(--text-tertiary)]">
              © {currentYear} All rights reserved
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-tertiary)] hover:text-[var(--secondary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-[var(--border-soft)] text-center">
          <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-2">
            Built with
            <Heart className="w-4 h-4 text-[var(--danger)] fill-current" />
            using React, Vite, TypeUI.sh design skills
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
