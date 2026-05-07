import { ExternalLink, Github, ArrowUpRight, Database, Lock, Zap, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TradeKit',
      description: 'Production-ready real-time trading platform with 500:1 leverage. Features WebSocket gateway, order execution engine, and risk management.',
      tags: ['Cloudflare Workers', 'Deno', 'Supabase', 'Redis', 'WebSocket'],
      stats: [
        { label: 'Components', value: '3' },
        { label: 'Tests', value: '188' },
        { label: 'Infra', value: '₹0/mo' },
      ],
      links: [
        { icon: Github, href: '#', label: 'Code' },
        { icon: ExternalLink, href: '#', label: 'Live' },
      ],
      featured: true,
      icon: Globe,
      iconBg: 'from-blue-500/20 to-cyan-500/20',
      span: 'span-8',
    },
    {
      title: 'AI Agent OS',
      description: 'Multi-agent freelance automation targeting Indian market with ₹ pricing. Uses LangGraph, CrewAI, and AWS Bedrock.',
      tags: ['LangGraph', 'CrewAI', 'AWS Bedrock', 'Supabase', 'Redis'],
      stats: [
        { label: 'Agents', value: '10+' },
        { label: 'Phase', value: 'B4.4' },
      ],
      links: [
        { icon: Github, href: '#', label: 'Code' },
      ],
      featured: true,
      icon: Zap,
      iconBg: 'from-purple-500/20 to-pink-500/20',
      span: 'span-4',
    },
    {
      title: 'OSploit Framework',
      description: 'Open source security research framework for vulnerability analysis and ethical hacking.',
      tags: ['Python', 'Security', 'Research', 'CLI'],
      stats: [
        { label: 'Tools', value: '15+' },
        { label: 'Type', value: 'OSS' },
      ],
      links: [
        { icon: Github, href: '#', label: 'Code' },
      ],
      featured: false,
      icon: Lock,
      iconBg: 'from-red-500/20 to-orange-500/20',
      span: 'span-4',
    },
    {
      title: 'Refine PR #7416',
      description: 'Fixed AutoSaveIndicator import bug in Refine framework. Merged to main repository.',
      tags: ['TypeScript', 'React', 'Open Source'],
      stats: [
        { label: 'Status', value: 'Merged' },
        { label: 'Impact', value: 'High' },
      ],
      links: [
        { icon: ExternalLink, href: 'https://github.com/refinedev/refine/pull/7416', label: 'PR' },
      ],
      featured: false,
      icon: ArrowUpRight,
      iconBg: 'from-green-500/20 to-emerald-500/20',
      span: 'span-4',
    },
    {
      title: 'Hermes Skills',
      description: 'Custom AI agent skills for automation workflows. Includes design systems, code review, and deployment skills.',
      tags: ['AI Agents', 'Skills', 'Automation'],
      stats: [
        { label: 'Skills', value: '20+' },
        { label: 'Uses', value: 'Daily' },
      ],
      links: [],
      featured: false,
      icon: Database,
      iconBg: 'from-amber-500/20 to-yellow-500/20',
      span: 'span-4',
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Projects</span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            Production systems, open source contributions, and experimental projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="bento-grid">
          {projects.map((project, index) => (
            <div key={index} className={`bento-item ${project.span}`}>
              <div className="glass-card p-6 h-full group hover:bg-white/80 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-6 h-6 text-[var(--text-primary)]" />
                  </div>
                  {project.featured && (
                    <span className="tag text-xs">Featured</span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-[var(--text-primary)] mb-2">{project.title}</h3>
                <p className="text-sm text-[var(--text-tertiary)] mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs py-1 px-2 rounded-md bg-[var(--primary-subtle)] text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-4 py-3 border-t border-b border-[var(--border-soft)]">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold text-[var(--text-primary)]">{stat.value}</div>
                      <div className="text-xs text-[var(--text-tertiary)]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--primary-subtle)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
