import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILL_TREES = [
  {
    name: 'LLMs & AI',
    icon: '🧠',
    color: 'var(--rp-purple)',
    skills: [
      { name: 'Claude / Anthropic SDK', xp: 95 },
      { name: 'GPT-4 / OpenAI API',     xp: 90 },
      { name: 'Fine-tuning (LoRA/PEFT)', xp: 82 },
      { name: 'Prompt Engineering',      xp: 93 },
      { name: 'RAG Pipelines',           xp: 90 },
    ],
  },
  {
    name: 'AI Frameworks',
    icon: '⚙️',
    color: 'var(--rp-cyan)',
    skills: [
      { name: 'LangGraph',   xp: 88 },
      { name: 'LangChain',   xp: 85 },
      { name: 'CrewAI',      xp: 82 },
      { name: 'LlamaIndex',  xp: 78 },
      { name: 'LangSmith',   xp: 85 },
    ],
  },
  {
    name: 'Vector DBs & Search',
    icon: '🗄️',
    color: 'var(--rp-gold)',
    skills: [
      { name: 'pgvector',      xp: 88 },
      { name: 'Pinecone',      xp: 83 },
      { name: 'FAISS',         xp: 85 },
      { name: 'Hybrid Search', xp: 82 },
      { name: 'Cohere Rerank', xp: 78 },
    ],
  },
  {
    name: 'Cloud & MLOps',
    icon: '☁️',
    color: 'var(--rp-green)',
    skills: [
      { name: 'AWS Bedrock',    xp: 90 },
      { name: 'AWS (EC2/S3/Lambda)', xp: 85 },
      { name: 'Docker / CI/CD', xp: 83 },
      { name: 'MLflow / W&B',   xp: 78 },
      { name: 'Prometheus/Grafana', xp: 74 },
    ],
  },
  {
    name: 'Programming',
    icon: '💻',
    color: 'var(--rp-white)',
    skills: [
      { name: 'Python',   xp: 95 },
      { name: 'FastAPI',  xp: 88 },
      { name: 'TypeScript', xp: 80 },
      { name: 'React',    xp: 78 },
      { name: 'Go / Rust', xp: 62 },
    ],
  },
  {
    name: 'Databases',
    icon: '🏛️',
    color: 'var(--rp-purple)',
    skills: [
      { name: 'PostgreSQL', xp: 88 },
      { name: 'Redis',      xp: 83 },
      { name: 'MongoDB',    xp: 78 },
      { name: 'ClickHouse', xp: 70 },
      { name: 'Supabase',   xp: 85 },
    ],
  },
];

const XpBar = ({ name, xp, color, delay }) => {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color: 'var(--rp-light)', letterSpacing: '0.05em' }}>
          {name}
        </span>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.42rem', color }}>
          {xp}/100
        </span>
      </div>
      <div style={{
        height: '10px', background: 'var(--rp-black)',
        border: '2px solid rgba(255,255,255,0.15)',
        position: 'relative', overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${xp}%` } : {}}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 6px ${color}88`,
            position: 'relative',
          }}
        >
          {/* Scanline shimmer */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.08) 3px, rgba(255,255,255,0.08) 4px)',
          }} />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'var(--rp-deep)' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">⚡ SKILL TREE ⚡</span>
        <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', color: 'white' }}>
          ABILITIES & PROFICIENCY
        </h2>
        <div className="section-divider mx-auto mt-3" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {SKILL_TREES.map((tree, ti) => (
          <motion.div
            key={tree.name}
            className="pixel-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: ti * 0.08 }}
          >
            {/* Tree header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '16px', paddingBottom: '10px',
              borderBottom: `2px solid ${tree.color}44`,
            }}>
              <span style={{ fontSize: '1.1rem' }}>{tree.icon}</span>
              <span style={{
                fontFamily: 'var(--font-pixel)', fontSize: '0.5rem',
                color: tree.color, letterSpacing: '0.08em',
              }}>{tree.name}</span>
            </div>

            {/* XP bars */}
            {tree.skills.map((skill, si) => (
              <XpBar
                key={skill.name}
                name={skill.name}
                xp={skill.xp}
                color={tree.color}
                delay={ti * 0.08 + si * 0.07}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Extra tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ maxWidth: '1100px', margin: '2rem auto 0', textAlign: 'center' }}
      >
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.45rem', color: 'var(--rp-gold)', marginBottom: '12px', letterSpacing: '0.1em' }}>
          ♦ ALSO IN INVENTORY
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {['Voice AI','Sarvam AI','Streamlit','Gradio','AutoGen','Weights & Biases','SageMaker','Prometheus','Grafana','Hugging Face','Mistral','LLaMA','Gemini'].map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-pixel)', fontSize: '0.38rem',
              color: 'var(--rp-gray)', border: '1px solid rgba(255,255,255,0.15)',
              padding: '3px 10px', background: 'rgba(255,255,255,0.04)',
              letterSpacing: '0.05em',
            }}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
