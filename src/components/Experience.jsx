const Experience = () => {
  const experiences = [
    {
      role: 'AI Agent Engineer',
      company: 'Freelance / AI Agent OS',
      period: '2024 - Present',
      desc: 'Multi-agent autonomous business. Agent orchestration, HITL workflows, production AI systems.',
      tags: ['CrewAI', 'LangGraph', 'AWS Bedrock'],
    },
    {
      role: 'Security Researcher',
      company: 'Bug Bounty Programs',
      period: '2024 - Present',
      desc: 'Vulnerability research, security testing. Building OSploit framework.',
      tags: ['Pentesting', 'Web Security', 'CVE Analysis'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Projects: TradeKit, AI Agent OS',
      period: '2023 - Present',
      desc: 'Production-grade fintech and AI platforms with zero-cost infrastructure.',
      tags: ['TypeScript', 'Deno', 'PostgreSQL'],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building production systems in AI, security, and engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-white/60">{exp.company}</p>
                </div>
                <span className="text-sm text-indigo-400 font-medium">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-white/50 mb-4">{exp.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10 hover:bg-indigo-500/20 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
