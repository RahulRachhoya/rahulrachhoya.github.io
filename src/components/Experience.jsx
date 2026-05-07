import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Agent Engineer',
      company: 'AI Agent OS',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Full-time',
      description: 'Building multi-agent automation platform targeting Indian market. Using LangGraph, CrewAI, AWS Bedrock for autonomous task execution.',
      skills: ['LangGraph', 'CrewAI', 'AWS Bedrock', 'Multi-Agent', 'TypeUI.sh'],
    },
    {
      role: 'Lead Developer',
      company: 'TradeKit',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Full-time',
      description: 'Built real-time trading platform with 500:1 leverage. Cloudflare Workers, Deno, Supabase, real-time WebSocket gateway.',
      skills: ['Cloudflare', 'WebSocket', 'Deno', 'Redis', 'Trading'],
    },
    {
      role: 'Security Researcher',
      company: 'OSploit Framework',
      location: 'Remote',
      period: '2023 - 2024',
      type: 'Open Source',
      description: 'Contributing to open source security framework. Vulnerability research, tool development, community contributions.',
      skills: ['Python', 'Security', 'OSINT', 'Pentesting'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Freelance',
      location: 'India',
      period: '2020 - 2023',
      type: 'Contract',
      description: 'Full-stack development for various clients. React, Django, Node.js, cloud infrastructure.',
      skills: ['React', 'Django', 'Node.js', 'AWS', 'PostgreSQL'],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Experience</span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Work <span className="gradient-text">history</span>
          </h2>
          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            My professional journey building production systems and contributing to open source.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 md:left-[200px] top-12 bottom-0 w-px bg-[var(--border-medium)]" />
              )}
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-12">
                {/* Date */}
                <div className="md:w-[180px] md:text-right flex-shrink-0">
                  <div className="flex md:justify-end items-center gap-2 text-[var(--text-tertiary)]">
                    <Calendar className="w-4 h-4 md:hidden" />
                    <span className="text-sm font-medium mono-text">{exp.period}</span>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-md bg-[var(--primary-subtle)] text-[var(--text-secondary)]">
                    {exp.type}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="relative">
                  <div className="absolute -left-8 md:left-0 top-2 w-4 h-4 rounded-full border-2 border-[var(--primary)] bg-white z-10" />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6 group hover:bg-white/80 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h4 className="text-[var(--text-primary)] flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[var(--secondary)]" />
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[var(--text-secondary)] font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <span className="tag mt-2 sm:mt-0 text-xs self-start">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-tertiary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs py-1 px-2 rounded-md bg-[var(--secondary-subtle)] text-[var(--text-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
