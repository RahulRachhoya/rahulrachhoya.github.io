import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TradeKit',
      subtitle: 'Real-time Trading Platform',
      desc: 'Production-ready trading platform with 500:1 leverage. Features WebSocket gateway, execution engine, market data streaming, and zero-cost infrastructure.',
      tags: ['Deno', 'TypeScript', 'WebSocket', 'Supabase', 'Redis'],
      links: { github: 'https://github.com/RahulRachhoya/tradekit' },
      featured: true,
    },
    {
      title: 'AI Agent OS',
      subtitle: 'Multi-Agent Freelance Automation',
      desc: 'Autonomous AI agency with CrewAI, LangGraph, AWS Bedrock integration. HITL workflows for human oversight. Zero-cost deployment model.',
      tags: ['Python', 'CrewAI', 'LangGraph', 'AWS Bedrock', 'Supabase'],
      links: { github: 'https://github.com/RahulRachhoya/ ai_agent_os' },
      featured: true,
    },
    {
      title: 'OSploit Framework',
      subtitle: 'Security Research Platform',
      desc: 'Cross-platform exploit framework for vulnerability research and pentesting. Python-based with modularity at its core.',
      tags: ['Python', 'Security', 'Pentesting'],
      links: { github: 'https://github.com/RahulRachhoya/osploit' },
      featured: false,
    },
    {
      title: 'Refine OSS Contribution',
      subtitle: 'Bug Fix & Optimization',
      desc: 'Fixed swizzle command bug in Refine framework. PR #7416 merged. TypeScript React framework for enterprise.',
      tags: ['TypeScript', 'React', 'OSS'],
      links: { github: 'https://github.com/refinedev/refine/pull/7416' },
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 blur-[150px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--accent-cyan)] mb-4 block tracking-wider">
            FEATURED WORK
          </span>
          <h2 className="mb-4">Selected Projects</h2>
          <p className="text-[var(--text-tertiary)] text-lg max-w-2xl mx-auto">
            Production-grade applications with rigorous engineering practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative card p-8 overflow-hidden ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10 px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--accent-cyan)]">{project.subtitle}</p>
                </div>

                <p className="text-[var(--text-tertiary)] mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-white transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/RahulRachhoya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-white transition-colors"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
