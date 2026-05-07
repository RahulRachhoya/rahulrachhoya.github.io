import { Github, Linkedin, Twitter, ArrowDown, Sparkles } from 'lucide-react';
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
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: '4+', label: 'Major Projects' },
    { value: '188', label: 'Test Cases' },
    { value: '10+', label: 'Tech Skills' },
    { value: '₹0', label: 'Infra Cost' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RahulRachhoya', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12"
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-60 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(250, 212, 192, 0.4) 0%, 
            rgba(128, 161, 193, 0.2) 30%, 
            transparent 60%)`,
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-grid">
          {/* Main Hero Card - Large */}
          <div className="bento-item span-8">
            <div className="glass-card p-8 lg:p-12 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="tag">
                  <Sparkles className="w-4 h-4" />
                  Available for collaboration
                </span>
              </div>

              <h1 className="mb-4 text-[var(--text-primary)]">
                Building{' '}
                <span className="gradient-text">scalable systems</span>
                <br />
                with modern stack
              </h1>

              <p className="text-lg text-[var(--text-tertiary)] max-w-xl mb-8 leading-relaxed">
                Full-stack engineer specializing in AI-powered applications, real-time trading systems, 
                and security research. Open source contributor with 188+ test cases.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bento-item span-4">
            <div className="glass-card p-6 h-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors"
                  >
                    <div className="stat-number gradient-text">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bento-item span-3">
            <div className="glass-card p-6 h-full flex flex-col justify-center">
              <h4 className="text-[var(--text-secondary)] mb-4 font-medium">Connect</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--primary-subtle)] transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--secondary)] transition-colors" />
                    <span className="font-medium text-[var(--text-secondary)]">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="bento-item span-5">
            <div className="glass-card p-6 h-full">
              <h4 className="text-[var(--text-secondary)] mb-4 font-medium">Currently Exploring</h4>
              <div className="flex flex-wrap gap-2">
                {['Multi-Agent Systems', 'LangGraph', 'CrewAI', 'AWS Bedrock', 'Real-time WebSockets'].map((tech, i) => (
                  <span key={i} className="tag tag-secondary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-[var(--text-tertiary)]">
                Building AI Agent OS - a multi-agent automation platform for Indian market with ₹ pricing.
              </p>
            </div>
          </div>

          {/* Latest Achievement Card */}
          <div className="bento-item span-4">
            <div className="glass-card p-6 h-full bg-gradient-to-br from-[var(--primary-subtle)] to-transparent">
              <span className="tag mb-3 inline-block">Latest</span>
              <h4 className="text-[var(--text-primary)] mb-2">
                Open Source Contribution
              </h4>
              <p className="text-sm text-[var(--text-tertiary)] mb-3">
                Fixed AutoSaveIndicator import bug in Refine framework. PR #7416 merged.
              </p>
              <a href="https://github.com/refinedev/refine/pull/7416" target="_blank" rel="noopener noreferrer" className="link-hover text-sm">
                View PR →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
