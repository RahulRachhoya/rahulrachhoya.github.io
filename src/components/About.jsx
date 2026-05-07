import { Code2, Shield, Zap, Users, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Engineer',
      description: '5+ years building production systems with React, Node.js, Django, and modern cloud stacks.',
    },
    {
      icon: Cpu,
      title: 'AI Agent Specialist',
      description: 'Designing autonomous multi-agent systems using LangGraph, CrewAI, and AWS Bedrock.',
    },
    {
      icon: Shield,
      title: 'Security Researcher',
      description: 'Contributing to OSploit framework, conducting vulnerability research and ethical hacking.',
    },
    {
      icon: Zap,
      title: 'Real-Time Systems',
      description: 'Built TradeKit - a real-time trading platform with WebSocket gateway and execution engine.',
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Active contributor to Refine framework and other open source projects.',
    },
    {
      icon: Terminal,
      title: 'Zero-Cost Infra',
      description: 'Expert in building production systems on free tiers - ₹0 monthly infrastructure cost.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">About Me</span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Passionate about building{' '}
            <span className="gradient-text">impactful software</span>
          </h2>
          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            I create systems that solve real problems - from AI automation to financial trading 
            platforms, always with a focus on clean architecture and developer experience.
          </p>
        </div>

        {/* Bento Grid Highlights */}
        <div className="bento-grid">
          {/* Main About Text - Large Card */}
          <div className="bento-item span-6">
            <div className="glass-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[var(--text-primary)] mb-4">My Journey</h3>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <p>
                    Started as a backend engineer, I've evolved into a full-stack developer with deep 
                    expertise in distributed systems and AI applications. My work spans from building 
                    real-time trading platforms to designing autonomous agent systems.
                  </p>
                  <p>
                    I'm fascinated by the intersection of AI and traditional software engineering, 
                    which led me to create AI Agent OS - a platform that automates freelance work using 
                    multiple AI agents working together.
                  </p>
                  <p>
                    Currently focused on CrewAI and LangGraph for multi-agent orchestration, with deployed 
                    systems running on AWS Bedrock in Mumbai region.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8 pt-6 border-t border-[var(--border-soft)]">
                <div className="text-center">
                  <div className="stat-number text-2xl">5+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="text-center">
                  <div className="stat-number text-2xl">188</div>
                  <div className="stat-label">Tests</div>
                </div>
                <div className="text-center">
                  <div className="stat-number text-2xl">4</div>
                  <div className="stat-label">Major Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards Grid */}
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`bento-item ${index < 2 ? 'span-3' : 'span-4'}`}
            >
              <div className="glass-card p-6 h-full group hover:bg-white/80 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-subtle)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[var(--secondary)]" />
                </div>
                <h4 className="text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
