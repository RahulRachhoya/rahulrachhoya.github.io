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
    <section id="experience" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span className="tag mb-4">My Journey</span>
          <h2 className="h2 mb-4">Experience</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building production systems in AI, security, and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bento-card group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="h3 text-xl group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-text-secondary">{exp.company}</p>
                </div>
                <span className="tag">{exp.period}</span>
              </div>

              <p className="text-text-tertiary mb-4 leading-relaxed">{exp.desc}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag tag-secondary text-sm">
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
