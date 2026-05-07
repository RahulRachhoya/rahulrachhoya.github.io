import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/RahulRachhoya' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rahulrachhoya' },
    { name: 'Twitter', url: 'https://twitter.com/rahulrachhoya' },
  ];

  const footerLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-[var(--border-light)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold group inline-flex items-center"
            >
              <span className="text-white group-hover:text-[var(--accent-primary)] transition-colors">
                Rahul
              </span>
              <span className="text-[var(--accent-accent)]">.</span>
            </button>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Building the future, one commit at a time.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-[var(--text-tertiary)] hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-white transition-colors"
                aria-label={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <ExternalLink size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-light)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>
            © {currentYear} Rahul Rachhoya. All rights reserved.
          </p>
          <p>
            Built with React + Tailwind + <span className="text-[var(--accent-accent)]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
