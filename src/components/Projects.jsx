     1|import { ExternalLink, FolderGit, ArrowUpRight, Database, Lock, Zap, Globe } from 'lucide-react';
     2|
     3|const Projects = () => {
     4|  const projects = [
     5|    {
     6|      title: 'TradeKit',
     7|      description: 'Production-ready real-time trading platform with 500:1 leverage. Features WebSocket gateway, order execution engine, and risk management.',
     8|      tags: ['Cloudflare Workers', 'Deno', 'Supabase', 'Redis', 'WebSocket'],
     9|      stats: [
    10|        { label: 'Components', value: '3' },
    11|        { label: 'Tests', value: '188' },
    12|        { label: 'Infra', value: '₹0/mo' },
    13|      ],
    14|      links: [
    15|        { icon: FolderGit, href: '#', label: 'Code' },
    16|        { icon: ExternalLink, href: '#', label: 'Live' },
    17|      ],
    18|      featured: true,
    19|      icon: Globe,
    20|      iconBg: 'from-blue-500/20 to-cyan-500/20',
    21|      span: 'span-8',
    22|    },
    23|    {
    24|      title: 'AI Agent OS',
    25|      description: 'Multi-agent freelance automation targeting Indian market with ₹ pricing. Uses LangGraph, CrewAI, and AWS Bedrock.',
    26|      tags: ['LangGraph', 'CrewAI', 'AWS Bedrock', 'Supabase', 'Redis'],
    27|      stats: [
    28|        { label: 'Agents', value: '10+' },
    29|        { label: 'Phase', value: 'B4.4' },
    30|      ],
    31|      links: [
    32|        { icon: FolderGit, href: '#', label: 'Code' },
    33|      ],
    34|      featured: true,
    35|      icon: Zap,
    36|      iconBg: 'from-purple-500/20 to-pink-500/20',
    37|      span: 'span-4',
    38|    },
    39|    {
    40|      title: 'OSploit Framework',
    41|      description: 'Open source security research framework for vulnerability analysis and ethical hacking.',
    42|      tags: ['Python', 'Security', 'Research', 'CLI'],
    43|      stats: [
    44|        { label: 'Tools', value: '15+' },
    45|        { label: 'Type', value: 'OSS' },
    46|      ],
    47|      links: [
    48|        { icon: FolderGit, href: '#', label: 'Code' },
    49|      ],
    50|      featured: false,
    51|      icon: Lock,
    52|      iconBg: 'from-red-500/20 to-orange-500/20',
    53|      span: 'span-4',
    54|    },
    55|    {
    56|      title: 'Refine PR #7416',
    57|      description: 'Fixed AutoSaveIndicator import bug in Refine framework. Merged to main repository.',
    58|      tags: ['TypeScript', 'React', 'Open Source'],
    59|      stats: [
    60|        { label: 'Status', value: 'Merged' },
    61|        { label: 'Impact', value: 'High' },
    62|      ],
    63|      links: [
    64|        { icon: ExternalLink, href: 'https://github.com/refinedev/refine/pull/7416', label: 'PR' },
    65|      ],
    66|      featured: false,
    67|      icon: ArrowUpRight,
    68|      iconBg: 'from-green-500/20 to-emerald-500/20',
    69|      span: 'span-4',
    70|    },
    71|    {
    72|      title: 'Hermes Skills',
    73|      description: 'Custom AI agent skills for automation workflows. Includes design systems, code review, and deployment skills.',
    74|      tags: ['AI Agents', 'Skills', 'Automation'],
    75|      stats: [
    76|        { label: 'Skills', value: '20+' },
    77|        { label: 'Uses', value: 'Daily' },
    78|      ],
    79|      links: [],
    80|      featured: false,
    81|      icon: Database,
    82|      iconBg: 'from-amber-500/20 to-yellow-500/20',
    83|      span: 'span-4',
    84|    },
    85|  ];
    86|
    87|  return (
    88|    <section id="projects" className="py-20 lg:py-32">
    89|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    90|        {/* Section Header */}
    91|        <div className="text-center mb-16">
    92|          <span className="tag mb-4 inline-block">Projects</span>
    93|          <h2 className="text-[var(--text-primary)] mb-4">
    94|            Featured <span className="gradient-text">work</span>
    95|          </h2>
    96|          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
    97|            Production systems, open source contributions, and experimental projects.
    98|          </p>
    99|        </div>
   100|
   101|        {/* Projects Grid */}
   102|        <div className="bento-grid">
   103|          {projects.map((project, index) => (
   104|            <div key={index} className={`bento-item ${project.span}`}>
   105|              <div className="glass-card p-6 h-full group hover:bg-white/80 transition-all duration-300 flex flex-col">
   106|                {/* Header */}
   107|                <div className="flex justify-between items-start mb-4">
   108|                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
   109|                    <project.icon className="w-6 h-6 text-[var(--text-primary)]" />
   110|                  </div>
   111|                  {project.featured && (
   112|                    <span className="tag text-xs">Featured</span>
   113|                  )}
   114|                </div>
   115|
   116|                {/* Content */}
   117|                <h3 className="text-[var(--text-primary)] mb-2">{project.title}</h3>
   118|                <p className="text-sm text-[var(--text-tertiary)] mb-4 flex-grow leading-relaxed">
   119|                  {project.description}
   120|                </p>
   121|
   122|                {/* Tags */}
   123|                <div className="flex flex-wrap gap-2 mb-4">
   124|                  {project.tags.map((tag, i) => (
   125|                    <span key={i} className="text-xs py-1 px-2 rounded-md bg-[var(--primary-subtle)] text-[var(--text-secondary)]">
   126|                      {tag}
   127|                    </span>
   128|                  ))}
   129|                </div>
   130|
   131|                {/* Stats */}
   132|                <div className="flex gap-6 mb-4 py-3 border-t border-b border-[var(--border-soft)]">
   133|                  {project.stats.map((stat, i) => (
   134|                    <div key={i}>
   135|                      <div className="text-lg font-bold text-[var(--text-primary)]">{stat.value}</div>
   136|                      <div className="text-xs text-[var(--text-tertiary)]">{stat.label}</div>
   137|                    </div>
   138|                  ))}
   139|                </div>
   140|
   141|                {/* Links */}
   142|                <div className="flex gap-3">
   143|                  {project.links.map((link, i) => (
   144|                    <a
   145|                      key={i}
   146|                      href={link.href}
   147|                      target="_blank"
   148|                      rel="noopener noreferrer"
   149|                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--primary-subtle)] hover:text-[var(--text-primary)] transition-colors"
   150|                    >
   151|                      <link.icon className="w-4 h-4" />
   152|                      {link.label}
   153|                    </a>
   154|                  ))}
   155|                </div>
   156|              </div>
   157|            </div>
   158|          ))}
   159|        </div>
   160|      </div>
   161|    </section>
   162|  );
   163|};
   164|
   165|export default Projects;
   166|