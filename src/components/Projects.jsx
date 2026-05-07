const Projects = () => {
  const projects = [
    {
      title: 'TradeKit',
      desc: 'Production-ready real-time trading platform with 500:1 leverage. WebSocket gateway, execution engine, market data streaming.',
      tags: ['Deno', 'TypeScript', 'WebSocket', 'Supabase'],
      links: { github: 'https://github.com/RahulRachhoya/tradekit' }
    },
    {
      title: 'AI Agent OS',
      desc: 'Multi-agent freelance automation. CrewAI, LangGraph, AWS Bedrock, HITL workflows.',
      tags: ['Python', 'CrewAI', 'LangGraph', 'AWS Bedrock'],
      links: { github: 'https://github.com/RahulRachhoya/ai_agent_os' }
    },
    {
      title: 'OSploit Framework',
      desc: 'Cross-platform exploit framework for security research.',
      tags: ['Python', 'Security', 'Pentesting'],
      links: { github: 'https://github.com/RahulRachhoya/osploit' }
    },
    {
      title: 'Refine OSS',
      desc: 'Fixed swizzle command bug in Refine framework. PR #7416 merged.',
      tags: ['TypeScript', 'React', 'Open Source'],
      links: { github: 'https://github.com/refinedev/refine/pull/7416' }
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Production-grade applications
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Zero-cost infrastructure with rigorous engineering practices
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 transition-colors"
                >
                  →
                </a>
              </div>
              
              <p className="text-white/60 mb-6 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/RahulRachhoya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
