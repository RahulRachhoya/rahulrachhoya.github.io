import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Check, Copy, Database,
  DownloadSimple, GithubLogo, LinkedinLogo, List, Microphone,
  Robot, Sparkle, X,
} from '@phosphor-icons/react';
import './portfolio.css';

const EMAIL = 'its.rahul.rachhoya@gmail.com';
const CONTACT_SUBJECT = "Let's build something together";
const CONTACT_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`;
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(CONTACT_SUBJECT)}`;
const OUTLOOK_LINK = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}&subject=${encodeURIComponent(CONTACT_SUBJECT)}`;
const GITHUB = 'https://github.com/RahulRachhoya';
const LINKEDIN = 'https://linkedin.com/in/rahul-rachhoya';
const RESUME = '/rahulrachhoya-resume.pdf';
const NAVIGATION = [['Work', 'projects'], ['About', 'about'], ['Experience', 'experience'], ['Skills', 'skills']];

const PROJECTS = [
  {
    id: 'voice', category: 'Voice AI', number: '01',
    title: 'Voice AI Career Counselor',
    intro: 'Making career guidance as natural as a conversation.',
    description: 'End-to-end voice agent with Claude/Bedrock, Sarvam AI speech-to-text and text-to-speech, and pgvector RAG. Includes emotion detection and real-time streaming.',
    detail: 'The system brings speech recognition, retrieval, dialogue and speech synthesis into one conversation flow, serving 10K+ sessions with 88% satisfaction and a 1.8s average response.',
    stack: ['Claude / Bedrock', 'Sarvam AI', 'pgvector', 'FastAPI', 'LangSmith'],
    metric: '10K+', metricLabel: 'sessions served',
  },
  {
    id: 'agents', category: 'Multi-agent', number: '02',
    title: 'Multi-Agent Document Intelligence',
    intro: 'Complex documents. Specialized agents. Connected insights.',
    description: 'A four-agent LangGraph workflow for extracting, validating and summarizing documents, with an orchestrator coordinating the work.',
    detail: 'The workflow processed 500+ documents at 94% accuracy and reduced handling time from 30 minutes to 7 minutes.',
    stack: ['LangGraph', 'Python', 'Function calling', 'AWS'],
    metric: '94%', metricLabel: 'document accuracy',
  },
  {
    id: 'observability', category: 'MLOps', number: '03',
    title: 'LLM Observability Dashboard',
    intro: 'A clearer picture of what happens after deployment.',
    description: 'A Streamlit dashboard for latency, cost, hallucination rate and user satisfaction, supported by Prometheus, Grafana and automated alerts.',
    detail: 'Monitoring spans systems used by 500+ daily users. The dashboard brings operational and quality signals together so degradation can be investigated.',
    stack: ['Streamlit', 'Prometheus', 'Grafana', 'AWS', 'LangSmith'],
    metric: '500+', metricLabel: 'daily users',
  },
];

const EXPERIENCE = [
  {
    company: 'Careers360', initials: 'C360', period: 'Jan 2026 — Sep 2026',
    role: 'AI Engineer — Voice AI & Conversational Systems', location: 'Hyderabad, India',
    bullets: [
      'Architected a voice AI career counselor using Claude/Bedrock, Sarvam AI and pgvector serving 10K+ sessions.',
      'Built a RAG pipeline that reduces hallucinations by 35%, with LangSmith tracking latency, cost and quality.',
      'Optimized session costs by 40% through prompt caching and A/B testing.',
      'Built a multi-agent workflow improving accuracy by 28%, deployed on AWS Lambda with 99.7% uptime.',
    ],
    stack: ['Claude / Bedrock', 'Sarvam AI', 'pgvector', 'LangSmith', 'AWS Lambda', 'FastAPI'],
  },
  {
    company: 'Crystaltech Services', initials: 'CT', period: 'Aug 2024 — Dec 2025',
    role: 'AI Engineer', location: 'Remote, India',
    bullets: [
      'Built hybrid-search RAG pipelines with BM25, vectors and Cohere reranking, improving retrieval from 85% to 91%.',
      'A/B tested GPT-4 and Claude, achieving 60% cost savings while tracking 50+ LLM iterations in W&B.',
      'Built a four-agent document system using LangGraph, processing 500+ documents with 94% accuracy and reducing processing time from 30 minutes to 7 minutes.',
    ],
    stack: ['LangGraph', 'Hybrid search', 'Cohere', 'W&B'],
  },
  {
    company: 'STL Digital Limited', initials: 'STL', period: 'Jun 2022 — Jul 2024',
    role: 'System Engineer (AI/ML Focus)', location: 'Pune, India',
    bullets: [
      'Built a RAG system with ChromaDB and GPT-3.5, improving accuracy from 65% to 91% across 500+ daily queries.',
      'Reduced validation errors by 60% with AI-assisted workflows and deployed a Streamlit dashboard on AWS.',
      'Implemented a pytest suite with 85% coverage and continuous delivery through GitHub Actions.',
    ],
    stack: ['ChromaDB', 'GPT-3.5', 'Streamlit', 'AWS', 'pytest', 'GitHub Actions'],
  },
];

const SKILLS = [
  { number: '01', title: 'Models & intelligence', description: 'The right model for the problem.', tags: ['Claude', 'OpenAI API', 'Prompt engineering', 'Tool calling', 'Voice agents', 'Sarvam AI'] },
  { number: '02', title: 'Agents & retrieval', description: 'Context, tools and orchestration.', tags: ['LangGraph', 'LangChain', 'LlamaIndex', 'MCP', 'pgvector', 'ChromaDB', 'Hybrid search', 'Cohere Rerank'] },
  { number: '03', title: 'Cloud & operations', description: 'Built to run beyond the demo.', tags: ['AWS Bedrock', 'EC2 / S3 / Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'LangSmith', 'W&B'] },
  { number: '04', title: 'The engineering layer', description: 'Everything that connects the system.', tags: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'pytest', 'Streamlit', 'Claude Code', 'Cursor'] },
];

const BLUEPRINTS = {
  'Voice AI': { icon: Microphone, input: 'A spoken question', steps: ['Listen', 'Retrieve', 'Reason', 'Respond'], output: 'A useful conversation', caption: 'Speech → context → intelligence → voice' },
  RAG: { icon: Database, input: 'A question + your documents', steps: ['Index', 'Retrieve', 'Rerank', 'Answer'], output: 'An answer with context', caption: 'Documents → retrieval → grounded answers' },
  Agents: { icon: Robot, input: 'A goal worth solving', steps: ['Plan', 'Delegate', 'Review', 'Deliver'], output: 'A coordinated result', caption: 'A shared goal → specialized agents → a result' },
};

function SectionLabel({ number, children }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function Header({ onContact }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = event => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell container">
        <a className="wordmark" href="#home" aria-label="Rahul Rachhoya, home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">r<span>.</span></span>
          <span>rahul rachhoya<span className="wordmark-role">AI ENGINEER</span></span>
        </a>
        <button ref={menuButton} className="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(value => !value)}>
          {open ? <X size={23} /> : <List size={25} />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={`main-nav ${open ? 'is-open' : ''}`}>
          {NAVIGATION.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
          <button className="nav-contact" type="button" aria-haspopup="dialog" aria-controls="contact-dialog" onClick={event => {
            const returnFocus = open ? menuButton.current : event.currentTarget;
            setOpen(false);
            onContact(returnFocus);
          }}>Let’s talk <ArrowUpRight size={17} /></button>
        </nav>
      </div>
    </header>
  );
}

function SystemBlueprint() {
  const [selected, setSelected] = useState('Voice AI');
  const blueprint = BLUEPRINTS[selected];
  const Icon = blueprint.icon;
  return (
    <div className="blueprint">
      <div className="blueprint-top"><span className="mono">FROM IDEA TO INTELLIGENCE</span><span className="blueprint-cross" aria-hidden="true">+</span></div>
      <div className="blueprint-options" role="group" aria-label="Explore an AI workflow">
        {Object.keys(BLUEPRINTS).map(name => <button key={name} type="button" aria-pressed={selected === name} onClick={() => setSelected(name)}>{name}</button>)}
      </div>
      <div className="blueprint-diagram" aria-live="polite" aria-atomic="true">
        <div className="blueprint-input"><span className="tiny-label">INPUT</span>{blueprint.input}</div>
        <span className="diagram-connector" aria-hidden="true" />
        <div className="intelligence-core">
          <div className="core-orbit orbit-one" aria-hidden="true" />
          <div className="core-orbit orbit-two" aria-hidden="true" />
          <div className="core-center"><Icon size={35} weight="light" /><span>{selected}</span></div>
          <span className="orbit-point point-one" aria-hidden="true" />
          <span className="orbit-point point-two" aria-hidden="true" />
          <span className="orbit-point point-three" aria-hidden="true" />
        </div>
        <div className="pipeline">{blueprint.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
        <div className="blueprint-output"><span className="output-dot" aria-hidden="true" />{blueprint.output}<ArrowUpRight size={16} aria-hidden="true" /></div>
      </div>
      <div className="blueprint-bottom"><span className="mono">SYSTEM BLUEPRINT</span><span>{blueprint.caption}</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <span className="availability"><span aria-hidden="true" />AVAILABLE FOR OPPORTUNITIES</span>
          <h1 id="hero-title">Engineering AI.<br /><span>Delivering</span><br /><span className="impact-word">impact<Sparkle weight="fill" aria-hidden="true" /></span></h1>
          <p className="hero-intro">Hi, I’m <strong>Rahul Rachhoya.</strong> I turn complex AI into useful, dependable systems — from the first conversation to the production pipeline.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">Explore my work <ArrowDown size={17} /></a>
            <a className="button button-outline" href={RESUME} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-location"><span className="location-symbol" aria-hidden="true">↗</span> Gurugram, India <span className="separator">/</span> Open to remote work</div>
        </div>
        <SystemBlueprint />
      </div>
      <div className="career-strip">
        <p>BUILT WITH REAL-WORLD<br /><strong>EXPERIENCE</strong></p>
        <span className="company-name careers">Careers<span>360</span></span>
        <span className="company-name crystal">crystaltech<span className="company-suffix"> SERVICES</span></span>
        <span className="company-name stl">STL<span> digital</span></span>
        <a href="#experience" className="career-link" aria-label="Explore my experience"><ArrowDown size={22} /></a>
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  if (type === 'voice') return (
    <div className="project-visual visual-voice" aria-hidden="true">
      <div className="visual-caption"><Microphone size={16} /><span>CONVERSATIONAL INTELLIGENCE</span><span>01 / 03</span></div>
      <div className="voice-orb"><Microphone size={28} weight="light" /></div>
      <div className="waveform">{[14, 22, 35, 26, 48, 66, 38, 58, 82, 51, 74, 95, 63, 42, 77, 55, 32, 60, 41, 26, 37, 19, 12].map((height, index) => <i key={index} style={{ '--wave-height': `${height}px` }} />)}</div>
      <div className="visual-footer"><span>SPEECH</span><span className="visual-line" /><span>CONTEXT</span><span className="visual-line" /><span>CONVERSATION</span></div>
    </div>
  );
  if (type === 'agents') return (
    <div className="project-visual visual-agents" aria-hidden="true">
      <div className="visual-caption"><Robot size={16} /><span>MULTI-AGENT ORCHESTRATION</span><span>02 / 03</span></div>
      <div className="agent-map">
        <svg viewBox="0 0 400 170" className="agent-lines"><path d="M75 40H150Q200 40 200 85M75 130H150Q200 130 200 85M200 85Q200 40 250 40H325M200 85Q200 130 250 130H325" /><circle cx="200" cy="85" r="35" /></svg>
        <span className="agent-node researcher">Extract</span><span className="agent-node extractor">Validate</span>
        <span className="agent-hub"><Robot size={28} weight="light" /></span>
        <span className="agent-node auditor">Summarize</span><span className="agent-node reporter">Orchestrate</span>
      </div>
      <div className="visual-footer"><span>SPECIALIZED AGENTS</span><span className="visual-line" /><span>ONE CONNECTED WORKFLOW</span></div>
    </div>
  );
  return (
    <div className="project-visual visual-observability" aria-hidden="true">
      <div className="visual-caption"><Database size={16} /><span>VISIBILITY AFTER DEPLOYMENT</span><span>03 / 03</span></div>
      <div className="observability-grid"><span>Latency</span><span>Cost</span><span>Quality</span></div>
      <svg className="observability-chart" viewBox="0 0 480 110"><path className="chart-grid" d="M0 20H480M0 55H480M0 90H480M60 0V110M180 0V110M300 0V110M420 0V110" /><path className="chart-path" d="M0 82L32 72L64 77L96 46L128 59L160 50L192 61L224 27L256 38L288 31L320 43L352 21L384 33L416 17L448 24L480 10" /></svg>
      <div className="visual-footer"><span>MONITOR</span><span className="visual-line" /><span>UNDERSTAND</span><span className="visual-line" /><span>IMPROVE</span></div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All work');
  const filters = ['All work', ...PROJECTS.map(project => project.category)];
  const visibleProjects = filter === 'All work' ? PROJECTS : PROJECTS.filter(project => project.category === filter);
  return (
    <section className="work-section section-pad" id="projects" aria-labelledby="work-title">
      <div className="container">
        <SectionLabel number="01">SELECTED WORK</SectionLabel>
        <div className="section-heading"><h2 id="work-title">Built to solve.<br /><span>Designed to work.</span></h2><p>A selection of my work in voice, agents,<br className="desktop-break" /> language models and production AI.</p></div>
        <div className="work-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">{filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}{name === 'All work' && <span>{String(PROJECTS.length).padStart(2, '0')}</span>}</button>)}</div>
          <span className="project-count mono" role="status">{String(visibleProjects.length).padStart(2, '0')} PROJECTS</span>
        </div>
        <div className="project-grid">
          {visibleProjects.map(project => (
            <article className={`project-card project-${project.id}`} key={project.id}>
              <ProjectVisual type={project.id} />
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3><p className="project-intro">{project.intro}</p>
                <p className="project-description">{project.description}</p>
                <Tags items={project.stack} />
                <div className="project-bottom"><div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                  <details className="project-details"><summary>Project overview <span aria-hidden="true">+</span></summary><p>{project.detail}</p></details>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="github-work-link" href={GITHUB} target="_blank" rel="noreferrer"><GithubLogo size={22} /><span>More experiments. More possibilities.<strong>Explore my GitHub</strong></span><ArrowUpRight size={22} /></a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-pad container" id="about" aria-labelledby="about-title">
      <div className="about-heading"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel><h2 id="about-title">Curiosity drives me.<br /><span>Engineering grounds me.</span></h2></div>
      <div className="about-grid">
        <div className="about-art" aria-hidden="true"><div className="about-monogram">rr<span>.</span></div><div className="about-art-caption"><span>THINK IN SYSTEMS.<br />BUILD FOR PEOPLE.</span><Sparkle size={35} weight="light" /></div></div>
        <div className="about-copy"><p className="about-lead">I’m Rahul, an AI engineer who cares about what happens <em>after the prototype.</em></p><p>Most recently at Careers360, I built voice-first AI counselors and the infrastructure behind them. My work connects language models, retrieval, specialized agents and the engineering that makes them useful in everyday life.</p><p>I’m interested in the practical questions: Is the answer grounded? Does the system respond quickly? Can we understand its behavior? And does it make someone’s day easier?</p>
          <div className="about-facts"><div><span>BASED IN</span><strong>Gurugram, India</strong></div><div><span>EDUCATION</span><strong>University of Hyderabad</strong><small>Master of Computer Applications</small></div></div>
          <a className="text-link" href={RESUME} target="_blank" rel="noreferrer">The full story, in my résumé <DownloadSimple size={18} /></a>
        </div>
      </div>
      <div className="impact-strip"><div><strong>10K<span>+</span></strong><p>Voice AI sessions served</p></div><div><strong>35<span>%</span></strong><p>Reduction in hallucinations</p></div><div><strong>40<span>%</span></strong><p>Lower session costs</p></div><a href="#experience"><span>THE WORK<br />BEHIND THE NUMBERS</span><ArrowDown size={24} /></a></div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="experience-heading"><SectionLabel number="03">THE JOURNEY SO FAR</SectionLabel><h2 id="experience-title">From ideas<br /> to <span>production.</span></h2><p>Building, learning and shipping<br className="desktop-break" /> across teams and industries.</p><a className="text-link" href={RESUME} target="_blank" rel="noreferrer">View full résumé <ArrowUpRight size={18} /></a></div>
        <div className="experience-list">{EXPERIENCE.map((job, index) => (
          <details className="experience-item" name="experience" key={job.company} open={index === 0}>
            <summary><span className={`company-icon company-icon-${index}`} aria-hidden="true">{job.initials}</span><span className="job-heading"><span className="job-topline"><strong>{job.company}</strong>{job.current && <span className="current-tag">CURRENT</span>}</span><span className="job-role">{job.role}</span><span className="job-period">{job.period}</span></span><span className="disclosure-symbol" aria-hidden="true">+</span></summary>
            <div className="job-content"><span className="job-location">{job.location}</span><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><Tags items={job.stack} /></div>
          </details>
        ))}<div className="learning-note"><Sparkle size={18} /><span>ALWAYS LEARNING</span><p>Deep Learning Specialization <span>· Coursera, 2022</span></p></div></div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section container section-pad" id="skills" aria-labelledby="skills-title">
      <SectionLabel number="04">MY TOOLKIT</SectionLabel><div className="section-heading"><h2 id="skills-title">The tools behind<br /><span>the thinking.</span></h2><p>Selected for the problem.<br />Connected to the bigger picture.</p></div>
      <div className="skill-grid">{SKILLS.map(group => <article className="skill-card" key={group.title}><span className="skill-number mono">/{group.number}</span><h3>{group.title}</h3><p>{group.description}</p><Tags items={group.tags} /></article>)}</div>
    </section>
  );
}

function Contact({ onContact }) {
  const [copyState, setCopyState] = useState('');
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState('Email copied');
    } catch {
      setCopyState('Please select and copy the email address above.');
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState(''), 4500);
  };
  return (
    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-top"><span className="availability availability-dark"><span aria-hidden="true" />OPEN TO WHAT’S NEXT</span><Sparkle size={40} weight="light" aria-hidden="true" /></div>
        <h2 id="contact-title">Have something<br /><span>worth building?</span></h2><div className="contact-bottom"><p>An interesting problem, a new team, or an idea<br className="desktop-break" /> that needs a little intelligence. Let’s talk.</p><button className="button button-lime" type="button" aria-haspopup="dialog" aria-controls="contact-dialog" onClick={event => onContact(event.currentTarget)}>Start a conversation <ArrowUpRight size={19} /></button></div>
        <div className="contact-links"><div className="email-group"><a href={CONTACT_LINK}>{EMAIL}</a><button type="button" className="copy-button" onClick={copyEmail} aria-label="Copy email address">{copyState === 'Email copied' ? <Check size={17} /> : <Copy size={17} />}</button></div><div className="social-links"><a href={GITHUB} target="_blank" rel="noreferrer"><GithubLogo size={18} />GitHub <ArrowUpRight size={13} /></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedinLogo size={18} />LinkedIn <ArrowUpRight size={13} /></a></div></div>
        <p className="copy-status" role="status">{copyState}</p>
      </div>
    </section>
  );
}

function ContactDialog({ dialogRef, onClose }) {
  const [status, setStatus] = useState('');
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus('Email copied. Paste it into a new message.');
    } catch {
      setStatus('Select the email address above to copy it manually.');
    }
  };
  return (
    <dialog ref={dialogRef} id="contact-dialog" className="contact-dialog" aria-labelledby="contact-dialog-title" aria-describedby="contact-dialog-description" onClose={() => { setStatus(''); onClose(); }}>
      <form method="dialog" className="dialog-close-form"><button className="dialog-close" type="submit" aria-label="Close contact options"><X size={21} /></button></form>
      <p className="section-label">LET’S CONNECT</p>
      <h2 id="contact-dialog-title">Start a conversation.</h2>
      <p id="contact-dialog-description" className="dialog-intro">Choose where to write your message. Works on desktop and mobile.</p>
      <div className="contact-options">
        <a className="contact-option" href={GMAIL_LINK} target="_blank" rel="noopener noreferrer"><span className="email-provider" aria-hidden="true">G</span><span><strong>Compose in Gmail</strong><small>Open Gmail in a new browser tab</small></span><ArrowUpRight size={20} aria-hidden="true" /></a>
        <a className="contact-option" href={OUTLOOK_LINK} target="_blank" rel="noopener noreferrer"><span className="email-provider" aria-hidden="true">O</span><span><strong>Compose in Outlook</strong><small>Open Outlook in a new browser tab</small></span><ArrowUpRight size={20} aria-hidden="true" /></a>
        <a className="contact-option" href={CONTACT_LINK} onClick={() => setStatus('If your email app doesn’t open, choose Gmail or Outlook, or copy the address below.')}><span className="email-provider" aria-hidden="true">@</span><span><strong>Use my email app</strong><small>Use the default mail app on this device</small></span><ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
      <div className="dialog-email"><span>{EMAIL}</span><button type="button" onClick={copyEmail} aria-label="Copy email address"><Copy size={17} />Copy</button></div>
      <p className="dialog-status" role="status">{status}</p>
      <p className="dialog-note">Gmail or Outlook may ask you to sign in. A message is only sent when you press Send.</p>
    </dialog>
  );
}

export default function Portfolio() {
  const contactDialog = useRef(null);
  const contactReturnFocus = useRef(null);
  const openContact = returnFocus => {
    contactReturnFocus.current = returnFocus;
    contactDialog.current.showModal();
  };
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header onContact={openContact} />
      <main id="main-content" tabIndex={-1}><Hero /><Projects /><About /><Experience /><Skills /><Contact onContact={openContact} /></main>
      <footer className="site-footer container"><a className="footer-name" href="#home">rahul rachhoya<span>.</span></a><a className="footer-email" href={CONTACT_LINK}>{EMAIL} <ArrowUpRight size={15} aria-hidden="true" /></a><p>© {new Date().getFullYear()} · Built with intention.</p><a className="back-to-top" href="#home">Back to top <ArrowUpRight size={17} /></a></footer>
      <ContactDialog dialogRef={contactDialog} onClose={() => contactReturnFocus.current?.focus()} />
    </>
  );
}
