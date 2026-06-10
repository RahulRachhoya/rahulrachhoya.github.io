import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    label: 'LLMs & AI',
    skills: [
      { name: 'Claude / Anthropic SDK', pct: 95 },
      { name: 'GPT-4 / OpenAI API', pct: 90 },
      { name: 'Fine-tuning (LoRA/PEFT)', pct: 82 },
      { name: 'Prompt Engineering', pct: 93 },
      { name: 'RAG Pipelines', pct: 90 },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'LangGraph', pct: 88 },
      { name: 'LangChain', pct: 85 },
      { name: 'CrewAI', pct: 82 },
      { name: 'LlamaIndex', pct: 78 },
      { name: 'LangSmith', pct: 85 },
    ],
  },
  {
    label: 'Cloud & MLOps',
    skills: [
      { name: 'AWS Bedrock', pct: 90 },
      { name: 'AWS (EC2/S3/Lambda)', pct: 85 },
      { name: 'Docker / CI/CD', pct: 83 },
      { name: 'MLflow / W&B', pct: 78 },
      { name: 'Prometheus/Grafana', pct: 74 },
    ],
  },
  {
    label: 'Vector DBs',
    skills: [
      { name: 'pgvector', pct: 88 },
      { name: 'Pinecone', pct: 83 },
      { name: 'FAISS', pct: 85 },
      { name: 'Hybrid Search', pct: 82 },
      { name: 'Cohere Rerank', pct: 78 },
    ],
  },
];

const TAGS = [
  'Voice AI', 'Sarvam AI', 'Python', 'FastAPI', 'TypeScript',
  'PostgreSQL', 'Redis', 'Supabase', 'Streamlit', 'Gradio',
  'Hugging Face', 'Mistral', 'LLaMA', 'Gemini', 'AutoGen', 'SageMaker',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.32, 0.72, 0, 1] },
  }),
};

function SkillBar({ name, pct, delay }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{name}</span>
        <span style={{
          fontFamily: "'Geist Mono', monospace",
          fontSize: 11,
          color: 'var(--text-muted)',
        }}>{pct}</span>
      </div>
      <div style={{
        height: 3,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--accent-dim), var(--accent))',
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeUp} custom={0} style={{ marginBottom: 16 }}>
          <span className="eyebrow">Skill Tree</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: '#f5f5f5',
            marginBottom: 56,
          }}
        >
          Abilities & Proficiency
        </motion.h2>

        {/* 4-column skill grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12,
          marginBottom: 40,
        }}
          className="skills-grid"
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              custom={gi + 2}
              className="card-outer"
            >
              <div className="card-inner" style={{ padding: '28px 24px', height: '100%' }}>
                <h3 style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  fontFamily: "'Geist Mono', monospace",
                  marginBottom: 24,
                }}>
                  {group.label}
                </h3>
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    pct={skill.pct}
                    delay={0.1 + si * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          variants={fadeUp}
          custom={7}
          className="card-outer"
        >
          <div className="card-inner" style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace", marginBottom: 16 }}>
              Also in inventory
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TAGS.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
