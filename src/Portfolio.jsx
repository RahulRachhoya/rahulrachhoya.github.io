import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, ArrowRight, Check, Copy, Database,
  DownloadSimple, GithubLogo, LinkedinLogo, List, X, Plus, Minus,
  Cpu, GitBranch, Code, Envelope, Flask, CircleHalf,
} from '@phosphor-icons/react';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import { projects } from './projects';
import './portfolio.css';

const EMAIL = 'its.rahul.rachhoya@gmail.com';
const GITHUB = 'https://github.com/RahulRachhoya';
const LINKEDIN = 'https://linkedin.com/in/rahul-rachhoya';
const RESUME = '/rahulrachhoya-resume.pdf';
const SUBJECT = encodeURIComponent('Let\'s build something together');
const MAIL = `mailto:${EMAIL}?subject=${SUBJECT}`;
const NAV = [['Work', 'projects'], ['About', 'about'], ['Experience', 'experience'], ['Skills', 'skills']];

const jobs = [
  { company: 'Careers360', role: 'AI Engineer, Voice AI & Conversational Systems', dates: 'Jan 2026 - Sep 2026', description: 'Built a voice AI career counselor with Claude on AWS Bedrock, Sarvam AI speech, and pgvector retrieval.', results: ['10K+ voice sessions', '40% lower session cost', '35% fewer hallucinations'], detail: 'Owned the conversation pipeline and AWS deployment. Used prompt caching and A/B testing to reduce session cost from $0.40 to $0.24, with LangSmith tracking latency, cost, and quality.' },
  { company: 'Crystaltech Services', role: 'AI Engineer', dates: 'Aug 2024 - Dec 2025', description: 'Built a four-agent document workflow with LangGraph and hybrid retrieval with Cohere reranking.', results: ['94% document accuracy', '30 min to 7 min handling', '85% to 91% retrieval'], detail: 'Processed 500+ documents and compared GPT-4 and Claude configurations across 50+ tracked iterations. The workflow coordinated extraction, validation, and summarization.' },
  { company: 'STL Digital Limited', role: 'System Engineer (AI/ML Focus)', dates: 'Jun 2022 - Jul 2024', description: 'Built RAG services with ChromaDB and GPT-3.5, supported by Python tests and continuous delivery.', results: ['500+ daily queries', '65% to 91% accuracy', '85% test coverage'], detail: 'Built AI-assisted validation and deployed a Streamlit dashboard on AWS. Used pytest and GitHub Actions to keep changes testable and repeatable.' },
];

function External({ href, children, className = '', ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}</a>;
}

function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function Header({ onContact }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'system'; } catch { return 'system'; }
  });
  const menu = useRef(null);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* System theme still works without storage. */ }
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-12% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const escape = event => { if (event.key === 'Escape' && open) { setOpen(false); menu.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <header className="site-header">
    <div className="nav-shell container">
      <a href="#home" className="wordmark" title="Home" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">r<span>.</span></span><span>rahul rachhoya<span className="wordmark-role">AI engineer</span></span></a>
      <button ref={menu} type="button" className="menu-toggle icon-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <List size={22} />}</button>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-nav ${open ? 'is-open' : ''}`}>
        {NAV.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <External href={GITHUB} className="nav-github"><GithubLogo size={19} weight="bold" />GitHub</External>
        <button className="nav-contact" type="button" aria-haspopup="dialog" aria-controls="contact-dialog" onClick={event => { const trigger = open ? menu.current : event.currentTarget; setOpen(false); onContact(trigger); }}>Let's talk <ArrowUpRight size={17} /></button>
      </nav>
      <label className="theme-control"><CircleHalf size={18} aria-hidden="true" /><span className="sr-only">Appearance</span><select aria-label="Appearance" value={theme} onChange={event => setTheme(event.target.value)}><option value="system">Auto</option><option value="light">Light</option><option value="dark">Dark</option></select></label>
    </div>
  </header>;
}

const accuracy = [{ label: 'Zero-shot', value: 36.9 }, { label: 'PyTorch', value: 90.0 }, { label: 'TF-IDF', value: 91.1 }, { label: 'QLoRA', value: 93.4 }];
const retrieval = [{ label: 'PG hybrid', value: 0.593 }, { label: 'Dense', value: 0.713 }, { label: 'Reranked', value: 0.703 }, { label: 'Hybrid', value: 0.725 }];

function BarChart({ data, max, unit = '', label }) {
  return <div className="bar-chart" role="img" aria-label={label}>
    <div className="chart-baseline" />
    {data.map((datum, i) => <div className={`chart-column ${i === data.length - 1 ? 'highlight' : ''}`} key={datum.label}>
      <span className="chart-value">{unit === '%' ? datum.value.toFixed(1) : datum.value.toFixed(3)}{unit}</span>
      <span className="chart-bar" style={{ '--bar-scale': datum.value / max }} />
      <span className="chart-label">{datum.label}</span>
    </div>)}
  </div>;
}

function HeroExperiment() {
  const [selected, setSelected] = useState('Fine-tuning');
  const tune = selected === 'Fine-tuning';
  return <figure className="hero-experiment">
    <figcaption><Flask size={20} weight="duotone" /><span>Inside the experiments</span><External href={tune ? projects[1].evidence : projects[3].evidence} aria-label="Read the experiment results on GitHub"><ArrowUpRight size={20} /></External></figcaption>
    <div className="experiment-switch" role="group" aria-label="Choose an experiment">{['Fine-tuning', 'Retrieval'].map(name => <button type="button" key={name} aria-pressed={selected === name} onClick={() => setSelected(name)}>{name}</button>)}</div>
    <div className="experiment-body" aria-live="polite" aria-atomic="true">
      <p className="experiment-title">{tune ? 'Small model. Measured progress.' : 'Measure before adding complexity.'}</p>
      <p className="experiment-subtitle">{tune ? 'Banking77 accuracy / 3,076 test queries' : 'SciFact nDCG@10 / 300 test queries'}</p>
      <BarChart data={tune ? accuracy : retrieval} max={tune ? 100 : 0.8} unit={tune ? '%' : ''} label={tune ? 'Test accuracy: zero-shot 36.9%, PyTorch 90%, TF-IDF 91.1%, QLoRA 93.4%.' : 'nDCG at 10: Postgres hybrid 0.593, dense 0.713, reranked 0.703, Qdrant hybrid 0.725.'} />
      <div className="experiment-takeaway"><span className="takeaway-icon"><ArrowUpRight size={22} /></span><p>{tune ? <>Trained <strong>1.2%</strong> of the parameters.<br />Changed the result by <strong>56.5 points.</strong></> : <>The reranker added latency.<br />The simpler hybrid scored <strong>higher.</strong></>}</p></div>
    </div>
    <div className="experiment-footer"><span>Recorded local benchmark</span><GithubLogo size={17} /></div>
  </figure>;
}

function Hero() {
  return <section id="home" className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="availability"><span aria-hidden="true" />Available for remote opportunities</p>
      <h1 id="hero-title">I build AI<br /><span>that holds up.</span></h1>
      <p className="hero-intro">I'm Rahul Rachhoya. I build agents, train models, and turn experiments into software people can use.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={18} /></a><External className="button button-text" href={RESUME}>View résumé <DownloadSimple size={18} /></External></div>
    </div>
    <HeroExperiment />
  </section>;
}

function ServingVisual() {
  const points = [11.6, 37.0, 121.0, 185.5, 144.9, 121.9]
    .map((value, index) => `${[38, 96, 165, 225, 289, 350][index]},${166 - value / 185.5 * 136}`).join(' ');
  return <div className="serving-visual"><div className="visual-heading"><Cpu size={23} /><span>Throughput under load</span></div><div className="serving-number">185.5 <span>req/s</span></div><svg viewBox="0 0 390 200" role="img" aria-label="Throughput peaks at 185.5 requests per second at 32 concurrent requests, then drops at 64 and 128."><line x1="30" y1="166" x2="363" y2="166" className="plot-axis" /><polyline points={points} className="plot-line" /><circle cx="225" cy="30" r="6" className="plot-dot" />{['1','4','16','32','64','128'].map((value, i) => <text x={[38,96,165,225,289,350][i]} y="191" textAnchor="middle" key={value}>{value}</text>)}</svg><p>Concurrent requests / one laptop GPU</p></div>;
}

function ProjectVisual({ project }) {
  if (project.id === 'research-agent') return <figure className="project-visual research-visual"><div className="research-image"><img src="/images/research-agent.webp" srcSet="/images/research-agent-small.webp 600w, /images/research-agent.webp 900w" sizes="(max-width: 767px) calc(100vw - 42px), (max-width: 1100px) calc((100vw - 98px) / 2), 623px" width="900" height="1015" loading="lazy" alt="Recorded research-agent conversation showing paper citations, search tool calls, and a follow-up answer." /></div><figcaption><Code size={17} />Recorded local demo on Claude / Bedrock</figcaption></figure>;
  if (project.id === 'model-serving') return <figure className="project-visual"><ServingVisual /><figcaption>Measured in a one-node k3d cluster</figcaption></figure>;
  const tune = project.id === 'fine-tuning';
  return <figure className="project-visual"><div className="benchmark-visual"><div className="visual-heading">{tune ? <Flask size={23} /> : <Database size={23} />}<span>{tune ? 'A fairer fine-tuning question' : 'What actually improves retrieval?'}</span></div><BarChart data={tune ? accuracy : retrieval} max={tune ? 100 : 0.8} unit={tune ? '%' : ''} label={tune ? 'Banking77 full-test accuracy: 36.9, 90.0, 91.1, and 93.4 percent.' : 'SciFact nDCG@10: 0.593, 0.713, 0.703, and 0.725.'} /></div><figcaption>{tune ? 'Same 3,076-query test set for these four models' : 'Same embeddings, 5,183 abstracts, 300 claims'}</figcaption></figure>;
}

function CaseStudy({ project }) {
  return <details className="case-study" id={`case-${project.id}`}>
    <summary>Read the case study <Plus size={18} className="expand-icon" /><Minus size={18} className="collapse-icon" /></summary>
    <div className="case-study-body">
      <h4>The question</h4><p>{project.question}</p>
      <ol className="architecture" aria-label="System architecture">{project.architecture.map(step => <li key={step}>{step}<ArrowRight size={15} aria-hidden="true" /></li>)}</ol>
      <h4>What I built</h4><p>{project.implementation}</p>
      <dl className="finding-grid">{project.findings.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <h4>What changed my mind</h4><p>{project.insight}</p>
      <h4>Scope & limitations</h4><p>{project.limit}</p><p>{project.build}</p>
      <External className="text-link" href={project.evidence}>Inspect the recorded results <ArrowUpRight size={17} /></External>
    </div>
  </details>;
}

function Projects() {
  const [filter, setFilter] = useState('All projects');
  const visible = filter === 'All projects' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="work-section container section-pad" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">Built. Tested. Open to inspection.</h2><p>Four public projects, with the code, measurements, and trade-offs behind each one.</p></div>
    <div className="work-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{['All projects','Agents & RAG','Fine-tuning','Inference'].map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}{name === 'All projects' && <span>4</span>}</button>)}</div><span role="status" className="project-count">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</span></div>
    <div className="project-grid">{visible.map(project => <article key={project.id} className={`project-card project-${project.id}`}>
      <ProjectVisual project={project} />
      <div className="project-content"><div className="project-meta"><span>{project.category}</span><span>{project.kind}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><Tags items={project.stack} />
        <div className="project-result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div>
        <div className="project-links"><External href={project.github} className="repo-link" aria-label={`View ${project.repo} on GitHub`}><GithubLogo size={19} weight="bold" /><span>{project.repo}</span><ArrowUpRight size={16} /></External>{project.demo && <External href={project.demo} className="demo-link">Try live demo <ArrowUpRight size={16} /></External>}</div>
        <CaseStudy project={project} />
      </div>
    </article>)}</div>
    <External href={GITHUB} className="github-banner"><div><GithubLogo size={31} /><span><strong>The work continues on GitHub.</strong><small>Browse the repositories, explore the code, or start a conversation.</small></span></div><ArrowUpRight size={27} /></External>
  </section>;
}

function About() {
  return <section id="about" className="about-section section-pad" aria-labelledby="about-title"><div className="container about-layout">
    <div className="about-heading"><h2 id="about-title">Curious by nature.<br /><span>Engineer by practice.</span></h2><a href="#experience" className="text-link">The experience behind the work <ArrowDown size={18} /></a></div>
    <div className="about-copy"><p className="about-lead">I like the part where an interesting idea has to survive real use.</p><p>I'm an AI engineer based in Gurugram, India, with 4+ years in software engineering and 3+ years in applied AI. Most recently, I built voice AI systems at Careers360.</p><p>My work now spans the full path: retrieval, agent memory, fine-tuning, inference, and the interface someone actually uses. I care about simple baselines, clear evaluation, and knowing where a system falls short.</p><dl className="about-facts"><div><dt>Education</dt><dd>MCA, University of Hyderabad</dd></div><div><dt>Looking for</dt><dd>Applied AI & engineering roles</dd></div></dl></div>
  </div></section>;
}

function Experience() {
  return <section id="experience" className="experience-section container section-pad" aria-labelledby="experience-title"><div className="section-heading"><h2 id="experience-title">Experience in production.</h2><p>Voice systems, document workflows, and the engineering that keeps them running.</p></div><div className="experience-list">{jobs.map((job, i) => <article className="job" key={job.company}><div className="job-heading"><span className="job-dates">{job.dates}</span><h3>{job.company}</h3><p>{job.role}</p></div><div className="job-body"><p>{job.description}</p><ul className="job-results">{job.results.map(result => <li key={result}><Check size={15} />{result}</li>)}</ul><details className="job-detail" open={i === 0}><summary>More about this role <Plus size={16} /></summary><p>{job.detail}</p></details></div></article>)}</div></section>;
}

const toolkit = [
  { icon: Flask, title: 'Train & evaluate', text: 'Start with a baseline. Make the improvement measurable.', tags: ['PyTorch', 'QLoRA / PEFT', 'Transformers', 'TRL', 'scikit-learn', 'MLflow'] },
  { icon: GitBranch, title: 'Retrieve & reason', text: 'Give models context, tools, and memory that persists.', tags: ['LangGraph', 'LangChain', 'Qdrant', 'pgvector', 'MongoDB', 'BM25 / RRF'] },
  { icon: Cpu, title: 'Serve & observe', text: 'Understand the cost of every request and every restart.', tags: ['vLLM', 'Kubernetes', 'Docker', 'AWS Bedrock', 'Prometheus', 'LangSmith'] },
  { icon: Code, title: 'Build the application', text: 'Connect the model to a useful, responsive experience.', tags: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'Vercel AI SDK', 'GitHub Actions'] },
];
function Skills() {
  return <section id="skills" className="skills-section container section-pad" aria-labelledby="skills-title"><div className="section-heading"><h2 id="skills-title">One connected toolkit.</h2><p>Every layer has a job. These are the tools I use to build across them.</p></div><div className="toolkit">{toolkit.map(({ icon: Icon, title, text, tags }) => <article key={title}><Icon size={30} weight="duotone" /><h3>{title}</h3><p>{text}</p><Tags items={tags} /></article>)}</div></section>;
}

function Contact({ onContact }) {
  return <section id="contact" className="contact-section container" aria-labelledby="contact-title"><div className="contact-panel"><div><p className="eyebrow">Open to what's next</p><h2 id="contact-title">Have a useful<br />problem to solve?</h2><p>I'd like to hear about it.</p><button className="button button-primary" type="button" aria-haspopup="dialog" aria-controls="contact-dialog" onClick={event => onContact(event.currentTarget)}>Start a conversation <ArrowUpRight size={20} /></button></div><div className="contact-address"><Envelope size={34} weight="light" /><a href={MAIL}>{EMAIL}</a><div><External href={GITHUB}><GithubLogo size={20} />GitHub <ArrowUpRight size={15} /></External><External href={LINKEDIN}><LinkedinLogo size={20} />LinkedIn <ArrowUpRight size={15} /></External></div><p>Based in Gurugram, India.<br />Available for remote work.</p></div></div></section>;
}

function ContactDialog({ dialogRef, onClose }) {
  const [status, setStatus] = useState('');
  const copy = async () => { try { await navigator.clipboard.writeText(EMAIL); setStatus('Email copied.'); } catch { setStatus('Select the address below and copy it manually.'); } };
  return <dialog ref={dialogRef} id="contact-dialog" className="contact-dialog" aria-labelledby="contact-dialog-title" onClose={() => { setStatus(''); onClose(); }}><form method="dialog"><button type="submit" className="dialog-close icon-button" aria-label="Close contact options"><X size={22} /></button></form><h2 id="contact-dialog-title">Let's talk.</h2><p>Choose where to write your message.</p><div className="contact-options"><External href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${SUBJECT}`}>Compose in Gmail <ArrowUpRight size={19} /></External><External href={`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}&subject=${SUBJECT}`}>Compose in Outlook <ArrowUpRight size={19} /></External><a href={MAIL}>Use my email app <ArrowUpRight size={19} /></a></div><div className="dialog-email"><span>{EMAIL}</span><button type="button" onClick={copy} className="icon-button" aria-label="Copy email address">{status === 'Email copied.' ? <Check size={19} /> : <Copy size={19} />}</button></div><p className="dialog-status" role="status">{status}</p></dialog>;
}

export default function Portfolio() {
  const dialog = useRef(null);
  const returnFocus = useRef(null);
  const onContact = trigger => { returnFocus.current = trigger; dialog.current.showModal(); };
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .about-layout, .toolkit, .contact-panel').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <><a href="#main-content" className="skip-link">Skip to content</a><Header onContact={onContact} /><main id="main-content" tabIndex={-1}><Hero /><Projects /><About /><Experience /><Skills /><Contact onContact={onContact} /></main><footer className="site-footer container"><a href="#home" className="footer-name">rahul rachhoya<span>.</span></a><External href={`${GITHUB}/rahulrachhoya.github.io`}><Code size={17} />Source for this site <ArrowUpRight size={15} /></External><span>© {new Date().getFullYear()} Rahul Rachhoya</span><a href="#home" className="back-top" aria-label="Back to top"><ArrowUpRight size={20} /></a></footer><ContactDialog dialogRef={dialog} onClose={() => returnFocus.current?.focus()} /></>;
}
