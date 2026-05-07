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
    <footer className="border-t border-border py-12 bg-surface-elevated">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text inline-block mb-2">
              Rahul.
            </a>
            <p className="text-sm text-text-tertiary">
              © {currentYear} Rahul Rachhoya. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-tertiary hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-tertiary">
            Built with React, Vite, and Tailwind CSS • Designed with TypeUI principles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
