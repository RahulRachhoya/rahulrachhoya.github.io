import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 glass border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Animated gradient line at top */}
        {isScrolled && (
          <div 
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), var(--accent-accent), transparent)',
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold group"
            >
              <span className="text-white group-hover:text-[var(--accent-primary)] transition-colors">
                Rahul
              </span>
              <span className="text-[var(--accent-accent)]">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-[var(--text-tertiary)] hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                      }}
                    >
                      <span className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'inherit' }} />
                    </span>
                  )}
                </button>
              ))}
              
              {/* CTA Button - Desktop */}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                }}
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--text-tertiary)] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-[72px] left-4 right-4 glass rounded-2xl p-6 transform transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{
            background: 'rgba(10, 10, 11, 0.95)',
            border: '1px solid rgba(38, 40, 45, 0.8)',
          }}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-[var(--text-tertiary)] hover:text-white hover:bg-[var(--bg-elevated)]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="ml-2" style={{ color: 'var(--accent-accent)' }}>•</span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              }}
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
