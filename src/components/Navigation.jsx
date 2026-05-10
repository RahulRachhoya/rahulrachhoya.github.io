import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'HOME',       id: 'home',       icon: '🏠' },
    { label: 'ABOUT',      id: 'about',       icon: '👾' },
    { label: 'PROJECTS',   id: 'projects',    icon: '🗡️' },
    { label: 'SKILLS',     id: 'skills',      icon: '⚔️' },
    { label: 'QUESTS',     id: 'experience',  icon: '📜' },
    { label: 'CONTACT',    id: 'contact',     icon: '💬' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0D0B1E] border-b-[3px] border-white'
          : 'bg-transparent'
      }`}
      style={{ fontFamily: 'var(--font-pixel)' }}
    >
      <div className="container">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: 'var(--rp-gold)', textShadow: '2px 2px 0 var(--rp-gold-dim)', fontFamily: 'var(--font-pixel)' }}
          >
            ▶ RR.EXE
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 text-[0.45rem] tracking-widest transition-all duration-100 border-b-2 ${
                  activeSection === link.id
                    ? 'text-white border-yellow-400 bg-[var(--rp-purple-dark)]'
                    : 'text-gray-400 border-transparent hover:text-white hover:border-purple-400'
                }`}
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn pixel-btn-gold ml-4 !py-2 !px-4 !text-[0.45rem]"
            >
              ⬡ GITHUB
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.55rem' }}
          >
            {isMobileMenuOpen ? '✕ CLOSE' : '☰ MENU'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t-[3px] border-white bg-[#0D0B1E]"
        >
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-[0.5rem] tracking-widest text-gray-300 hover:text-white hover:bg-[var(--rp-purple-dark)] transition-colors"
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                {link.icon} {link.label}
              </button>
            ))}
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-[0.5rem] tracking-widest text-yellow-400"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              ⬡ GITHUB →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
