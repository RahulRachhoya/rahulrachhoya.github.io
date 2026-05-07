import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)`
      }}
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/70">Open to Opportunities</span>
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Hi, I'm{' '}
          </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rahul Rachhoya
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/60 mb-4 max-w-2xl mx-auto font-light">
          Full-Stack Developer × AI Engineer × Security Researcher
        </p>
        <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto">
          Building production-grade AI systems, trading platforms, and security tools with zero-cost infrastructure
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Stats Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: '4+', label: 'Production Projects' },
            { value: '188', label: 'Test Cases' },
            { value: '4k+', label: 'Lines of Code' },
            { value: '₹0', label: 'Infra Cost' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-white/40">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
