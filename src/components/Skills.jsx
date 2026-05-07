import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Rust', level: 75 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeUI.sh Skills', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 85 },
        { name: 'WebSocket', level: 90 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'LangGraph', level: 90 },
        { name: 'CrewAI', level: 90 },
        { name: 'OpenAI API', level: 95 },
        { name: 'AWS Bedrock', level: 85 },
        { name: 'Claude', level: 95 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Cloudflare', level: 95 },
        { name: 'AWS', level: 90 },
        { name: 'Supabase', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'GitHub Actions', level: 90 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'ClickHouse', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Skills</span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Tech <span className="gradient-text">stack</span>
          </h2>
          <p className="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
            A curated set of technologies I use to build production systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="bento-item span-4">
              <div className="glass-card p-6 h-full group hover:bg-white/80 transition-all duration-300">
                <h4 className="text-[var(--text-primary)] mb-6 pb-3 border-b border-[var(--border-soft)]">
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group/skill">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-[var(--text-secondary)]">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--border-soft)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full transition-all duration-500 group-hover/skill:opacity-80"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12">
          <div className="glass-card p-8 max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="stat-number gradient-text">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div>
                <div className="stat-number gradient-text">12</div>
                <div className="stat-label">Tech Stacks</div>
              </div>
              <div>
                <div className="stat-number gradient-text">5</div>
                <div className="stat-label">Cloud Providers</div>
              </div>
              <div>
                <div className="stat-number gradient-text">∞</div>
                <div className="stat-label">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
