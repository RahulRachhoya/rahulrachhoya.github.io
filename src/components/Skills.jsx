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
      title: 'Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Cloudflare'],
    },
    {
      title: 'Security',
      skills: ['Pentesting', 'Bug Bounty', 'OS Security', 'SSDLC'],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A diverse toolkit
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Full-stack development, AI/ML, security, and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 hover:text-white transition-all duration-300"
                  >
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
