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
    <section id="skills" className="section relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
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
                className="group card hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-accent-primary bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors duration-300">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-accent-primary transition-colors">
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
          <h3 className="text-2xl font-bold text-foreground mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-background-elevated border border-white/10 text-foreground-muted hover:border-accent-primary hover:text-accent-primary transition-all duration-200 cursor-default"
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