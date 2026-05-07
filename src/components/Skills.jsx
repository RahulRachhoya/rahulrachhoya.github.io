import { Code2, Database, Cloud, Lock, Layers } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Deno', 'FastAPI', 'PostgreSQL'],
    },
    {
      title: 'AI & ML',
      icon: Layers,
      skills: ['CrewAI', 'LangGraph', 'AWS Bedrock', 'RAG'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Supabase', 'Vercel', 'Deno Deploy', 'Docker'],
    },
    {
      title: 'Security',
      icon: Lock,
      skills: ['Pentesting', 'Vuln Research', 'Security Hardening'],
    },
  ];

  const tools = [
    'Supabase', 'Redis', 'Docker', 'Cloudflare', 
    'K6', 'Ruff', 'Pre-commit'
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[var(--accent-cyan)] mb-4 block tracking-wider">
            TECH STACK
          </span>
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-[var(--text-tertiary)] text-lg max-w-2xl mx-auto">
            Full-stack development with specialization in AI engineering and security
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={i}
                className="group card p-6 hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 group-hover:bg-[var(--accent-primary)]/20 transition-colors duration-300">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="card p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-elevated)] border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
