export const projects = [
  {
    id: 1,
    title: "TradeKit",
    description: "A production-ready real-time trading platform with 500:1 leverage. Features WebSocket gateway, order execution engine, market data streaming, and Razorpay integration. Built with Cloudflare Pages, Deno Deploy, Supabase, and Upstash Redis.",
    tags: ["Deno", "TypeScript", "WebSocket", "Supabase", "Redis", "Trading"],
    github: "https://github.com/RahulRachhoya/tradekit",
    demo: null,
    image: "https://images.unsplash.com/photo-1642790106117-e13e435ed1a9?w=800&h=400&fit=crop",
    highlights: [
      "REST API with 34 endpoints",
      "WebSocket gateway with 115 tests",
      "Order execution engine with SL/TP",
      "Zero-cost infrastructure"
    ],
    color: "#10b981"
  },
  {
    id: 2,
    title: "AI Agent OS",
    description: "Multi-agent freelance automation business targeting the Indian market. Built with CrewAI, LangGraph, AWS Bedrock, and Supabase. Automates client acquisition, project management, and delivery workflows.",
    tags: ["Python", "CrewAI", "LangGraph", "AWS Bedrock", "AI/ML"],
    github: "https://github.com/RahulRachhoya/ai_agent_os",
    demo: null,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    highlights: [
      "Multi-agent orchestration",
      "HITL (Human-in-the-loop) workflows",
      "Razorpay integration",
      "Celery task queues"
    ],
    color: "#6366f1"
  },
  {
    id: 3,
    title: "OSploit Framework",
    description: "Cross-platform exploit framework for security research and penetration testing. Features automated vulnerability scanning, exploit modules, and reporting capabilities.",
    tags: ["Python", "Security", "Pentesting", "Selenium", "Nmap"],
    github: "https://github.com/RahulRachhoya/OSploit",
    demo: null,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    highlights: [
      "CVE database integration",
      "Exploit automation",
      "Multi-platform support",
      "Custom payload generation"
    ],
    color: "#ef4444"
  },
  {
    id: 4,
    title: "Refine OSS Contribution",
    description: "Active contributor to the Refine open-source framework. Fixed the swizzle command bug where AutoSaveIndicator component had incorrect import paths causing folder structure errors.",
    tags: ["TypeScript", "React", "Open Source", "Refine"],
    github: "https://github.com/refinedev/refine/pull/7416",
    demo: null,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    highlights: [
      "PR #7416 merged",
      "Bug fix for swizzle command",
      "Import path correction",
      "Community contribution"
    ],
    color: "#f59e0b"
  }
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Rust", "Go", "Java", "C++"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue", "Django", "FastAPI", "Node.js", "Express", "LangGraph", "CrewAI"]
  },
  {
    category: "AI/ML",
    items: ["AWS Bedrock", "OpenAI", "Claude", "LLM Agents", "RAG", "Vector DBs", "LangChain"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "Redis", "MongoDB", "ClickHouse", "Neo4j"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Vercel", "Cloudflare", "Deno Deploy"]
  },
  {
    category: "Security",
    items: ["Penetration Testing", "Bug Bounty", "OS/System Security", "CVE Research", "SSDLC"]
  }
];

export const experience = [
  {
    id: 1,
    role: "Aspiring AI Agent Engineer",
    company: "Freelance / Building AI Agent OS",
    duration: "2024 - Present",
    description: "Building a multi-agent autonomous business that automates freelance operations. Specializing in agent orchestration, HITL workflows, and production AI systems.",
    skills: ["CrewAI", "LangGraph", "AWS Bedrock", "Multi-Agent Systems"]
  },
  {
    id: 2,
    role: "Security Researcher (Aspiring)",
    company: "Bug Bounty Programs",
    duration: "2024 - Present",
    description: "Active in vulnerability research and security testing. Building OSploit framework for automated security assessment.",
    skills: ["Penetration Testing", "Web Security", "CVE Analysis", "OS/Hardware Security"]
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "Projects: TradeKit, AI Agent OS",
    duration: "2023 - Present",
    description: "Built production-grade fintech and AI platforms with zero-cost infrastructure. Open source contributor to major frameworks.",
    skills: ["TypeScript", "Deno", "PostgreSQL", "Redis", "WebSocket", "Real-time Systems"]
  }
];
