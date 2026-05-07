import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'py-3 bg-zinc-950/80 backdrop-blur-md border-b border-white/10'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="container-custom px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-foreground">rahul</span>
              <span className="text-foreground-muted">.dev</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md ${
                    activeSection === link.id
                      ? 'bg-zinc-800 text-foreground'
                      : 'text-foreground-dimmed hover:text-foreground hover:bg-zinc-800/50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* CTA Button - Desktop */}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary ml-2"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground-dimmed hover:text-foreground transition-colors rounded-md hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-14 left-4 right-4 card p-2 transform transition-all duration-200 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-zinc-800 text-foreground'
                    : 'text-foreground-dimmed hover:text-foreground hover:bg-zinc-800/50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-2 pt-2 border-t border-white/10">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full btn btn-primary"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
