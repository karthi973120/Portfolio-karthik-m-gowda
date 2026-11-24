// ============================================================
// PORTFOLIO DATA — Karthik M Gowda
// Source: Latest Resume (Primary Source of Truth)
// ============================================================

export const SITE_CONFIG = {
  name: 'Karthik M',
  fullName: 'Karthik M Gowda',
  initials: 'KM',
  title: 'Senior Software Engineer | Frontend Architect',
  tagline: 'React & React Native Specialist | AI/ML Enthusiast | Agentic Workflows',
  headline: 'Building scalable digital experiences through engineering, architecture and innovation.',
  description:
    'Senior Software Engineer with 8+ years of experience building and modernizing enterprise, e-commerce, and healthcare applications. Deep expertise in React.js, React Native, TypeScript, and frontend architecture, with proven impact across high-traffic platforms (90K+ DAU, 99.9% crash-free sessions). Actively pioneering AI-assisted and agentic development workflows.',
  shortBio:
    'Senior Software Engineer with 8+ years of experience modernizing high-scale platforms across Morgan Stanley, Flipkart, and GE Healthcare. Specialized in React.js, React Native, micro-frontends, and performance engineering — transitioning into AI-powered and agentic workflows.',
  email: 'karthi973120@gmail.com',
  phone: '+91 9620003983',
  location: 'Bengaluru, India',
  availability: 'Open to Senior Software Engineer, Staff Engineer & Frontend Architect roles',
  socialLinks: {
    github: 'https://github.com/karthi973120',
    linkedin: 'https://www.linkedin.com/in/karthikmgowda5',
    twitter: 'https://x.com/coolkarthik_m',
    greatLearning: 'https://www.mygreatlearning.com/eportfolio/karthik-m45',
    portfolio: 'https://portfolio-karthik-m-gowda.netlify.app',
  },
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Daily Active Users', value: '90K+' },
    { label: 'Crash-Free Sessions', value: '99.9%' },
    { label: 'Workflows Associated', value: '₹100 Cr+' },
  ],
  resumeUrl: '/resume.pdf',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// ---- EXPERIENCE (Exact from Resume) ----
export const EXPERIENCE = [
  {
    id: 'exp-morgan-stanley',
    company: 'Wissen Technology',
    client: 'Morgan Stanley',
    position: 'Senior Software Engineer',
    clientCategory: 'Leading Investment Banking Client',
    type: 'Consultant',
    period: 'Nov 2025 – Present',
    duration: 'Present',
    location: 'Bengaluru, India',
    description:
      'Contributed to IDEA (Intelligent Data Enablement Agent) and Control Layer initiatives, building enterprise UI capabilities for AI-driven data enablement and agent orchestration workflows.',
    achievements: [
      'Contributed to IDEA (Intelligent Data Enablement Agent) and Control Layer initiatives, building enterprise UI capabilities for AI-driven data enablement and agent orchestration workflows.',
      'Designed and developed scalable React.js frontend architectures for the Control Layer, translating complex data, system workflows, and agent interactions into intuitive user experiences.',
      'Developed and integrated Python FastAPI services within the Control Layer, supporting backend workflows and seamless interaction between frontend interfaces and underlying services.',
      'Leveraged AI coding agents and GitHub Copilot to accelerate development, code generation, and engineering workflows while establishing reusable documentation, coding standards, and agent guidelines.',
      'Worked with enterprise GitOps-based build, deployment, and release strategies, leveraging automated workflows and organizational deployment standards to streamline application delivery.',
      'Explored MCP-based integrations and agentic engineering workflows to enhance developer productivity, standardize practices, and enable AI-assisted software development.',
    ],
    metrics: [
      { label: 'AI Agent Orchestration', type: 'cyan' },
      { label: 'Control Layer Architecture', type: 'amber' },
      { label: 'FastAPI + React', type: 'cyan' },
      { label: 'GitOps & MCP Tooling', type: 'amber' },
    ],
    techStack: ['React.js', 'TypeScript', 'Python FastAPI', 'GitHub Copilot', 'MCP', 'GitOps', 'Agentic Workflows'],
  },
  {
    id: 'exp-flipkart',
    company: 'Wissen Technology',
    client: 'Flipkart',
    position: 'Senior Software Engineer',
    clientCategory: 'Leading E-commerce Client',
    type: 'Consultant',
    period: 'May 2021 – Sep 2025',
    duration: '4 yrs 5 mos',
    location: 'Bengaluru, India',
    description:
      'Engineered and delivered large-scale modernization of Flipkart Seller Hub and Seller Lifecycle Management (SLM), supporting critical seller-facing workflows and business operations.',
    achievements: [
      'Engineered and delivered large-scale modernization of Flipkart Seller Hub and Seller Lifecycle Management (SLM), supporting critical seller-facing workflows and business operations.',
      'Executed zero-downtime platform migrations during Big Billion Days, maintaining 100% application availability throughout a high-traffic, business-critical period.',
      'Modernized the Seller Hub web dashboard using React.js, supporting 90K+ daily active users and business workflows associated with ₹100 Cr+ GMV.',
      'Led the Seller App migration to React Native, enabling a unified cross-platform mobile architecture and streamlined feature delivery across Android and iOS.',
      'Contributed to Android and iOS releases, improving mobile stability to 99.9% crash-free sessions, achieving a 4.2 Play Store rating, and reducing application size by 12 MB.',
      'Collaborated with product, UX, and engineering teams to deliver data-driven enhancements, contributing to a 90% improvement in seller satisfaction.',
      'Strengthened release quality and production monitoring through canary deployments, performance analytics, code reviews, and monitoring tools including Grafana, Snoopy, and Mixpanel.',
    ],
    metrics: [
      { label: '90K+ DAU', type: 'cyan' },
      { label: '₹100 Cr+ GMV', type: 'amber' },
      { label: '99.9% Crash-Free', type: 'cyan' },
      { label: '4.2 Play Store Rating', type: 'amber' },
      { label: '–12 MB App Size', type: 'cyan' },
      { label: '90% Seller Satisfaction', type: 'amber' },
    ],
    techStack: ['React.js', 'React Native', 'TypeScript', 'Android', 'iOS', 'Mixpanel', 'Snoopy', 'Grafana', 'Canary Deploys'],
  },
  {
    id: 'exp-ge-healthcare',
    company: 'Wissen Technology',
    client: 'GE Healthcare',
    position: 'Associate Software Engineer',
    clientCategory: 'Leading Healthcare Technology Company',
    type: 'Consultant',
    period: 'Feb 2020 – Mar 2021',
    duration: '1 yr 2 mos',
    location: 'Bengaluru, India',
    description:
      'Re-architected and modernized the MyGE Healthcare mobile application using React Native, consolidating iOS and Android development into a unified codebase and accelerating feature delivery.',
    achievements: [
      'Re-architected and modernized the MyGE Healthcare mobile application using React Native, consolidating iOS and Android development into a unified codebase and accelerating feature delivery.',
      'Implemented data-driven A/B testing and analytics, optimizing user journeys and increasing funnel conversion rates by 30%.',
      'Adopted GraphQL and scalable engineering practices, improving maintainability, simplifying data integration, and reducing developer onboarding effort by 30%.',
      'Optimized performance and bundling via Webpack configuration, code splitting, and lazy loading, enabling scalability to support 50% traffic growth.',
    ],
    metrics: [
      { label: '50% Traffic Growth', type: 'cyan' },
      { label: '30% Conversion Boost', type: 'amber' },
      { label: '30% Faster Onboarding', type: 'cyan' },
      { label: 'Unified iOS & Android', type: 'amber' },
    ],
    techStack: ['React Native', 'GraphQL', 'JavaScript', 'TypeScript', 'Webpack', 'A/B Testing', 'iOS', 'Android'],
  },
  {
    id: 'exp-mofosys',
    company: 'Mofosys Technologies Private Limited',
    client: null,
    position: 'Software Developer',
    clientCategory: 'Software Services & Products',
    type: 'Full-time',
    period: 'Nov 2017 – Jan 2020',
    duration: '2 yrs 3 mos',
    location: 'Bengaluru, India',
    description:
      'Developed responsive web applications using React and Redux, contributing to a 30% increase in user engagement.',
    achievements: [
      'Developed responsive web applications using React and Redux, contributing to a 30% increase in user engagement.',
      'Optimized frontend performance through lazy loading and SVG optimization.',
      'Developed REST APIs and backend workflows using MongoDB and Laravel.',
    ],
    metrics: [
      { label: '30% User Engagement', type: 'cyan' },
      { label: 'REST APIs & MongoDB', type: 'amber' },
      { label: 'SVG & Lazy Loading Opt.', type: 'cyan' },
    ],
    techStack: ['React.js', 'Redux', 'JavaScript', 'MongoDB', 'Laravel', 'REST APIs', 'Performance Optimization'],
  },
];

// ---- CATEGORIZED TECHNICAL SKILLS (Exact from Resume) ----
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend & UI',
    icon: 'Monitor',
    color: 'cyan',
    skills: [
      'React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
      'Redux', 'EmotionJS', 'Storybook', 'Next.js', 'Tailwind CSS',
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture & APIs',
    icon: 'Layers',
    color: 'violet',
    skills: [
      'Frontend Architecture', 'Reusable Components', 'GraphQL', 'REST APIs',
      'Python FastAPI', 'Node.js', 'Express.js', 'Micro-frontends', 'Performance Engineering',
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: 'Brain',
    color: 'amber',
    skills: [
      'GitHub Copilot', 'MCP-based Tooling', 'Agent-driven Workflows',
      'RAG Concepts', 'Mistral-7B', 'MLOps', 'Vector Embeddings', 'Python',
    ],
  },
  {
    id: 'testing',
    label: 'Testing & Quality',
    icon: 'ShieldCheck',
    color: 'cyan',
    skills: [
      'Jest', 'React Testing Library', 'Robot Framework', 'Code Reviews',
      'Performance Optimization', 'Canary Releases', 'A/B Testing',
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Platforms',
    icon: 'Cloud',
    color: 'violet',
    skills: [
      'Jenkins', 'GitHub Actions', 'GitOps', 'CI/CD', 'Docker',
      'Kubernetes', 'Grafana', 'Redis', 'MongoDB', 'Firebase', 'Webpack', 'Babel',
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools & Workflow',
    icon: 'Wrench',
    color: 'amber',
    skills: [
      'GitHub', 'Jira', 'Postman', 'CodePush', 'Prettier', 'ESLint',
      'Visual Studio', 'Android Studio', 'Xcode', 'Snoopy', 'Mixpanel',
    ],
  },
];

// ---- PROJECTS (Enterprise & AI/ML with Exact GitHub Repos from Resume) ----
export const PROJECTS = [
  {
    id: 'morgan-stanley-idea',
    title: 'IDEA Control Layer (Morgan Stanley)',
    subtitle: 'Agentic Data Enablement & UI Architecture',
    description:
      'Enterprise UI architecture and Control Layer for AI-driven data enablement (IDEA) and agent orchestration workflows. Built using React.js and Python FastAPI with GitOps-based automated release pipelines.',
    tags: ['React.js', 'Python FastAPI', 'AI Agents', 'MCP', 'GitOps', 'TypeScript'],
    metrics: ['AI Agent Orchestration', 'Control Layer UI', 'FastAPI Services'],
    type: 'Enterprise',
    featured: true,
    links: { github: null, live: null },
    icon: 'Brain',
    color: 'cyan',
  },
  {
    id: 'flipkart-seller-hub',
    title: 'Flipkart Seller Hub & SLM Modernization',
    subtitle: 'Enterprise Commerce Platform at Scale',
    description:
      'Engineered large-scale modernization of Seller Hub and Seller Lifecycle Management (SLM). Supported 90K+ DAU and ₹100 Cr+ GMV workflows with zero-downtime platform migrations during Big Billion Days.',
    tags: ['React.js', 'TypeScript', 'Redux', 'REST APIs', 'Mixpanel', 'Snoopy', 'Grafana'],
    metrics: ['90K+ DAU', '₹100 Cr+ GMV', 'Zero-Downtime BBD', '90% CSAT'],
    type: 'Enterprise',
    featured: true,
    links: { github: null, live: null },
    icon: 'ShoppingBag',
    color: 'amber',
  },
  {
    id: 'flipkart-seller-app',
    title: 'Flipkart Seller App (React Native)',
    subtitle: 'High-Performance Mobile Migration',
    description:
      'Led the end-to-end migration of Flipkart Seller App from native Android & iOS to React Native. Improved stability to 99.9% crash-free sessions, elevated Play Store rating to 4.2, and decreased app size by 12 MB.',
    tags: ['React Native', 'Android', 'iOS', 'TypeScript', 'Redux', 'CodePush'],
    metrics: ['99.9% Crash-Free', '4.2 Play Store', '–12 MB Size'],
    type: 'Mobile',
    featured: true,
    links: { github: null, live: 'https://play.google.com/store/apps/details?id=com.flipkart.seller' },
    icon: 'Smartphone',
    color: 'violet',
  },
  {
    id: 'medical-assistant-rag',
    title: 'Medical Assistant (Generative AI & RAG)',
    subtitle: 'Mistral-7B LLM with Document Embeddings',
    description:
      'Developed a Retrieval-Augmented Generation (RAG) prototype using medical reference documents to provide context-aware responses. Implemented document chunking, vector embeddings, semantic retrieval, and LLM-based response generation using Mistral-7B.',
    tags: ['Generative AI', 'RAG', 'Mistral-7B', 'Vector Embeddings', 'Python', 'LLMs'],
    metrics: ['RAG Pipeline', 'Mistral-7B', 'Semantic Retrieval'],
    type: 'AI / GenAI',
    featured: true,
    links: { github: 'https://github.com/karthi973120/Medical-AI-Assistant', live: null },
    icon: 'Brain',
    color: 'cyan',
  },
  {
    id: 'tourism-prediction-mlops',
    title: 'Tourism Package Prediction & MLOps',
    subtitle: 'Predictive Modeling with Automated CI/CD Pipeline',
    description:
      'Developed a predictive model to identify customers likely to purchase wellness tourism packages, implementing data preprocessing, hyperparameter tuning, and experiment tracking with a Dockerized MLOps pipeline on GitHub Actions.',
    tags: ['Machine Learning', 'MLOps', 'Docker', 'GitHub Actions', 'Python', 'CI/CD'],
    metrics: ['Automated CI/CD', 'Dockerized MLOps', 'Hyperparameter Tuning'],
    type: 'ML / MLOps',
    featured: true,
    links: { github: 'https://github.com/karthi973120/tourism-package-prediction', live: null },
    icon: 'Trophy',
    color: 'amber',
  },
  {
    id: 'super-kart-sales',
    title: 'SuperKart Sales Prediction',
    subtitle: 'Machine Learning Deployment & Flask APIs',
    description:
      'Built a predictive model to forecast supermarket sales using data preprocessing, exploratory data analysis, and model optimization. Containerized and deployed the model using Docker and Flask APIs.',
    tags: ['Machine Learning', 'Flask APIs', 'Docker', 'EDA', 'Python'],
    metrics: ['Containerized API', 'Sales Forecast', 'Docker & Flask'],
    type: 'Machine Learning',
    featured: false,
    links: { github: 'https://github.com/karthi973120/super-kart', live: null },
    icon: 'Heart',
    color: 'violet',
  },
  {
    id: 'myge-healthcare-app',
    title: 'MyGE Healthcare Mobile Application',
    subtitle: 'Cross-Platform React Native Consolidation',
    description:
      'Re-architected and modernized the MyGE Healthcare mobile application using React Native, consolidating iOS and Android into a unified codebase. Introduced GraphQL, A/B testing, and Webpack optimizations driving 50% traffic growth.',
    tags: ['React Native', 'GraphQL', 'Webpack', 'A/B Testing', 'iOS', 'Android'],
    metrics: ['50% Traffic Growth', '30% Conversion Rate', '30% Faster Dev Onboarding'],
    type: 'Mobile',
    featured: false,
    links: { github: null, live: null },
    icon: 'Heart',
    color: 'cyan',
  },
];

// ---- EDUCATION (Exact from Resume) ----
export const EDUCATION = [
  {
    id: 'pgp-aiml-ut-austin',
    institution: 'The University of Texas at Austin',
    degree: 'Post Graduate Program in Artificial Intelligence and Machine Learning',
    field: 'Artificial Intelligence & Machine Learning (Online Program)',
    period: 'Dec 2025 – Dec 2026',
    status: 'in-progress',
    statusLabel: 'Grade: A',
    description:
      'Rigorous postgraduate program focusing on Machine Learning, Deep Learning, Generative AI, RAG concepts, LLM orchestration, and MLOps deployment.',
    highlights: [
      'Machine Learning & Predictive Modeling',
      'Generative AI, RAG & LLMs (Mistral-7B)',
      'Vector Embeddings & Semantic Search',
      'Dockerized MLOps & Automated CI/CD Pipelines',
      'Achieved Grade: A',
    ],
    link: 'https://www.mygreatlearning.com/eportfolio/karthik-m45',
    color: 'cyan',
  },
  {
    id: 'be-mvjce',
    institution: 'MVJ College of Engineering, Bengaluru',
    degree: 'Bachelor of Engineering — Information Science Engineering',
    field: 'Information Science & Engineering',
    period: 'Mar 2013 – Aug 2017',
    status: 'completed',
    statusLabel: 'Completed',
    description:
      'Solid foundation in core computer science, software engineering methodologies, data structures, algorithms, operating systems, and database architectures.',
    highlights: [
      'Data Structures & Algorithms',
      'Software Architecture & System Design',
      'Database Management Systems',
      'Operating Systems & Networking',
    ],
    link: null,
    color: 'violet',
  },
];

// ---- CERTIFICATIONS / HIGHLIGHTS ----
export const CERTIFICATIONS = [
  {
    id: 'cert-1',
    name: 'Post Graduate Program — Artificial Intelligence and Machine Learning',
    issuer: 'The University of Texas at Austin',
    year: 'Dec 2025 – Dec 2026',
    status: 'Grade: A',
    link: 'https://www.mygreatlearning.com/eportfolio/karthik-m45',
  },
  {
    id: 'cert-2',
    name: 'React Native & Frontend Architecture Mastery',
    issuer: 'Wissen Technology / Flipkart Production Excellence',
    year: '2021 – 2025',
    status: 'Enterprise Certified',
    link: null,
  },
];

// ---- BLOG POSTS ----
export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'Migrating Native Mobile Apps to React Native at 90K+ DAU Scale',
    excerpt:
      'Architectural decisions, bridge communication, native module optimization, and release canary strategies that delivered 99.9% crash-free sessions for Flipkart Seller App.',
    tags: ['React Native', 'Mobile Arch', 'Performance'],
    readTime: '7 min read',
    date: 'Engineering Insight',
    color: 'cyan',
  },
  {
    id: 'blog-2',
    title: 'Building AI Agent Control Layers: React Meets FastAPI & MCP',
    excerpt:
      'How to build intuitive user interfaces for AI agent orchestration, streaming responses, tool calling visibility, and Model Context Protocol integrations.',
    tags: ['AI Agents', 'React.js', 'FastAPI', 'MCP'],
    readTime: '6 min read',
    date: 'AI Engineering',
    color: 'violet',
  },
  {
    id: 'blog-3',
    title: 'Zero-Downtime E-Commerce Migrations During High-Traffic BBD Sales',
    excerpt:
      'Managing zero-downtime deployments for ₹100 Cr+ GMV seller lifecycle workflows during India’s biggest online shopping festival.',
    tags: ['System Design', 'Reliability', 'Monitoring'],
    readTime: '8 min read',
    date: 'Architecture',
    color: 'amber',
  },
];
