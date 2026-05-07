import { experience } from '../data/projects';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building production systems and pursuing expertise in AI, security, and engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-darker z-10 glow" />

                {/* Content */}
                <div
                  className={`glass rounded-2xl p-6 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:col-start-2'
                  }`}
                >
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.duration}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 !== 0 && <div className="hidden md:block md:col-start-1" />}

                {/* Date marker (visible on mobile) */}
                <div className="md:hidden pl-8 text-gray-500 text-sm">
                  {exp.duration}
                </div>
              </div>
            ))}
          </div>

          {/* Start marker */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -bottom-2 w-4 h-4 bg-secondary rounded-full border-4 border-darker" />
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-4 rounded-full">
            <div className="flex -space-x-2">
              {['AI', 'Security', 'Full-Stack'].map((tag, i) => (
                <div
                  key={tag}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white border-2 border-darker"
                >
                  {tag[0]}
                </div>
              ))}
            </div>
            <span className="text-gray-300">Currently building in public</span>
            <a
              href="https://github.com/RahulRachhoya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors font-medium"
            >
              Follow along →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
