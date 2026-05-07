import { Briefcase, Rocket, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Founder & Lead Engineer',
      company: 'AI Agent OS',
      period: 'Present',
      type: 'Full-time',
      desc: 'Building autonomous AI agency for Indian market. Multi-agent systems with human oversight, zero-cost infrastructure.',
      icon: Rocket,
      tags: ['CrewAI', 'LangGraph', 'AWS', 'Supabase'],
    },
    {
      role: 'Open Source Contributor',
      company: 'Refine Framework',
      period: '2024',
      type: 'OSS',
      desc: 'Fixed swizzle command bug (#7416 merged). Contributing bug fixes and optimizations.',
      icon: Briefcase,
      tags: ['TypeScript', 'Next.js', 'Bug Fixes'],
    },
    {
      role: 'Security Researcher',
      company: 'Bug Bounty Programs',
      period: '2023',
      type: 'Part-time',
      desc: 'Vulnerability research and responsible disclosure across multiple platforms.',
      icon: Shield,
      tags: ['Pentesting', 'Security', 'Research'],
    },
  ];

  return (
    <section id="experience" className="section relative">
      {/* Background accent */}
      <div 
        className="absolute top-1/2 left-0 w-1/3 h-2/3 blur-[200px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)' }}
      />

      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-description">
            Building production systems across AI, security, and open source
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-[31px] top-0 bottom-0 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.5) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(168, 85, 247, 0.5) 100%)',
            }}
          />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8))',
                        border: '1px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="card hover:border-accent-primary transition-colors duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-accent-cyan font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-foreground-subtle">{exp.period}</span>
                          <span className="text-foreground-dimmed">•</span>
                          <span className="tag">{exp.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground-subtle mb-6 leading-relaxed">
                        {exp.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
