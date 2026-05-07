const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Rust', 'Go', 'Java'],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Next.js', 'Django', 'FastAPI', 'LangGraph', 'CrewAI'],
    },
    {
      title: 'AI/ML',
      skills: ['AWS Bedrock', 'Claude', 'OpenAI', 'RAG', 'Vector DBs'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'Supabase', 'Redis', 'MongoDB', 'ClickHouse'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Cloudflare'],
    },
    {
      title: 'Security',
      skills: ['Pentesting', 'Bug Bounty', 'OS Security', 'SSDLC'],
    },
  ];

  return (
    <section id="skills" className="section bg-surface-base">
      <div className="container">
        <div className="text-center mb-12">
          <span className="tag mb-4">Technical Skills</span>
          <h2 className="h2 mb-4">A diverse toolkit</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Full-stack development, AI/ML, security, and cloud infrastructure
          </p>
        </div>

        <div className="bento-grid">
          {categories.map((cat, i) => (
            <div key={i} className="span-4 bento-card">
              <h3 className="h4 text-lg mb-4 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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

export default Skills;
