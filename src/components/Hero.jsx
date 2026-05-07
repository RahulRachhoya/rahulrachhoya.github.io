import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code, Globe, Shield } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  // Particle/constellation effect for background
  useEffect(() => {
    setIsLoaded(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Configure particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.3 + Math.random() * 0.3})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect nearby particles with lines
    const connectParticles = () => {
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: Code, 
      href: 'https://github.com/RahulRachhoya', 
      label: 'GitHub' 
    },
    { 
      icon: Globe, 
      href: 'https://linkedin.com/in/rahulrachhoya', 
      label: 'LinkedIn' 
    },
    { 
      icon: Shield, 
      href: 'https://twitter.com/rahulrachhoya', 
      label: 'Twitter' 
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--background)' }}
      />

      {/* Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse"
        style={{ 
          background: 'rgba(99, 102, 241, 0.3)',
          animation: 'pulse-glow 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ 
          background: 'rgba(236, 72, 153, 0.2)',
          animation: 'pulse-glow 4s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[100px]"
        style={{ 
          background: 'rgba(34, 211, 238, 0.15)',
          animation: 'pulse-glow 4s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 container-custom px-6 text-center">
        {/* Availability Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-foreground-muted">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-gradient">Hi, I'm</span>
          <br />
          <span className="text-gradient-cyan">Rahul Rachhoya</span>
        </h1>

        {/* Role Description */}
        <p 
          className={`text-lg md:text-xl text-foreground-subtle mb-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Full-Stack Developer × AI Engineer × Security Researcher
        </p>

        {/* Bio */}
        <p 
          className={`text-base text-foreground-dimmed mb-10 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Building production-grade AI systems, trading platforms, and security tools 
          with zero-cost infrastructure
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-secondary"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div 
          className={`flex justify-center gap-3 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass rounded-lg flex items-center justify-center text-foreground-subtle hover:text-foreground hover:border-accent-primary hover:bg-background-elevated transition-all duration-300"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-xs text-foreground-dimmed">Scroll</span>
        <ChevronDown size={20} className="text-foreground-dimmed animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
