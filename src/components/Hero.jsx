import { useEffect, useRef } from 'react';

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Open to Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gradient-text mt-2">Rahul Rachhoya</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light">
            <span className="text-primary">Full-Stack Developer</span>
            <span className="mx-3 text-gray-600">|</span>
            <span className="text-secondary">AI Agent Engineer</span>
            <span className="mx-3 text-gray-600">|</span>
            <span className="text-accent">Security Researcher</span>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
            Building production-grade systems with zero-cost infrastructure. 
            From AI agent orchestration to real-time trading platforms, 
            I engineer solutions that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4+', label: 'Production Projects' },
              { value: '188', label: 'Test Cases' },
              { value: '4k+', label: 'Lines of Code' },
              { value: '₹0', label: 'Infra Cost' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom Cursor Glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
        style={{ left: '50%', top: '50%' }}
      />
    </section>
  );
};

export default Hero;
