export interface ProjectItem {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  category: 'AI Infrastructure' | 'Machine Learning' | 'Distributed Systems' | 'Web Applications'
  tags: string[]
  status: 'Active' | 'Completed' | 'In Progress'
  githubUrl: string
  liveUrl?: string
  featured: boolean
  metrics: { label: string; value: string }[]
  overview: string
  problem: string
  architecture: string
  keyFeatures: string[]
  techStack: string[]
  challenges: string[]
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'travento',
    title: 'Travento – AI Powered Travel Itinerary Platform',
    slug: 'travento',
    tagline: 'Personalized AI travel itinerary generator built with React Native & LLM APIs',
    description: 'A full-stack cross-platform mobile application utilizing Gemini & Groq APIs for instant personalized itinerary creation with secure Clerk authentication and MongoDB Atlas backend.',
    category: 'Web Applications',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Gemini API', 'Groq API', 'Cloudinary'],
    status: 'Completed',
    githubUrl: 'https://github.com/ishankkumar/travento',
    liveUrl: 'https://travento-demo.vercel.app',
    featured: true,
    metrics: [
      { label: 'Itinerary Generation Speed', value: '< 2.5s' },
      { label: 'LLM APIs Integrated', value: 'Gemini + Groq' },
      { label: 'Platform Support', value: 'iOS & Android' },
    ],
    overview: 'Travento was designed to solve the hassle of manual vacation planning. By harnessing high-speed inference from Groq and deep reasoning from Gemini, users get tailored day-by-day travel schedules matching their budget, preferences, and duration.',
    problem: 'Travel planning often requires hours of cross-referencing maps, reviews, and activity costs. Existing travel apps lack dynamic AI customization based on real-time user constraints.',
    architecture: 'React Native mobile frontend connected to a modular Node.js/Express REST API backend with Clerk JWT authentication, MongoDB Atlas spatial queries, and Cloudinary media pipelines.',
    keyFeatures: [
      'Built an AI-powered travel application using React Native, Node.js/Express, and MongoDB Atlas for personalized itinerary planning.',
      'Designed scalable REST APIs with Clerk authentication, JWT, and modular backend architecture.',
      'Integrated Gemini and Groq APIs for dynamic itinerary generation with optimized prompt workflows.',
      'Managed media using Cloudinary and deployed backend/frontend on Render and Vercel.'
    ],
    techStack: ['React Native', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Clerk Auth', 'Gemini API', 'Groq API', 'Cloudinary', 'Render', 'Vercel'],
    challenges: [
      'Structuring complex JSON prompts to ensure deterministic itinerary responses from LLM APIs without format breaking',
      'Optimizing image upload pipelines in React Native for seamless mobile UX'
    ]
  },
  {
    id: 'khabarpath',
    title: 'KhabarPath – Online News Portal',
    slug: 'khabarpath',
    tagline: 'SEO-optimized full-stack news platform with multi-role access control',
    description: 'Production-ready news portal featuring dedicated Admin, Reporter, and Reader modules with dynamic categorization, content moderation, and fast Next.js rendering.',
    category: 'Web Applications',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'TailwindCSS'],
    status: 'Completed',
    githubUrl: 'https://github.com/ishankkumar/khabarpath',
    liveUrl: 'https://khabarpath-news.vercel.app',
    featured: true,
    metrics: [
      { label: 'User Roles', value: 'Admin / Reporter / User' },
      { label: 'Lighthouse SEO Score', value: '98/100' },
      { label: 'API Endpoints', value: '25+ REST Routes' },
    ],
    overview: 'KhabarPath provides a digital newsroom experience allowing journalists to draft, submit, and manage news articles while admins perform editorial approval and reader management.',
    problem: 'Traditional CMS platforms are often bloated, slow, and lack streamlined role separation for multi-reporter newsrooms needing instant SEO indexing.',
    architecture: 'Next.js App Router frontend with server-side rendering for optimal SEO, communicating with a decoupled Express/MongoDB API service.',
    keyFeatures: [
      'Built a full-stack news portal featuring Admin, Reporter, and User modules with secure role-based authentication.',
      'Developed REST APIs for article publishing, category management, reporter workflows, and content moderation.',
      'Created an SEO-friendly Next.js frontend with dynamic news pages, search, category filtering, and responsive UI.',
      'Integrated Cloudinary for media storage and deployed the application with production-ready configuration.'
    ],
    techStack: ['Next.js 15', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'TailwindCSS', 'Render', 'Vercel'],
    challenges: [
      'Implementing multi-tier role-based access control (RBAC) middleware for reporter submission vs admin publishing permissions',
      'Configuring dynamic meta tags and open-graph imagery for live news URL shares'
    ]
  },
  {
    id: 'llm-reliability-suite',
    title: 'LLM Reliability Analysis via Web Services',
    slug: 'llm-reliability-suite',
    tagline: 'Research evaluation pipeline measuring model variance across diverse LLM APIs',
    description: 'Undergraduate research project conducting automated reliability and consistency benchmarks across multi-prompt web services and LLM providers.',
    category: 'Machine Learning',
    tags: ['Python', 'LLM APIs', 'Pandas', 'NumPy', 'REST APIs', 'Statistical Analysis'],
    status: 'Completed',
    githubUrl: 'https://github.com/ishankkumar/llm-reliability-analysis',
    featured: true,
    metrics: [
      { label: 'LLM APIs Evaluated', value: 'Multiple Providers' },
      { label: 'Evaluation Datasets', value: 'Structured Validation' },
      { label: 'Research Period', value: 'Jan - Apr 2026' },
    ],
    overview: 'Conducted research on the reliability, response variance, and consistency of Large Language Models (LLMs) when invoked via web API services.',
    problem: 'Commercial LLMs exhibit non-deterministic outputs and varying degradation over time, creating unpredictable behavior in production web applications.',
    architecture: 'Python automated data extraction and validation pipeline querying LLM APIs, cleaning responses, and running statistical variance calculations.',
    keyFeatures: [
      'Conducted research on the reliability and consistency of Large Language Models (LLMs) using automated evaluation pipelines.',
      'Developed Python automation scripts to collect responses from multiple LLM APIs across diverse prompts and tasks.',
      'Built workflows for data extraction, cleaning, normalization, and validation to generate structured evaluation datasets.',
      'Performed statistical analysis and visualization to measure model reliability and response variance.'
    ],
    techStack: ['Python', 'REST APIs', 'Pandas', 'NumPy', 'Matplotlib', 'JSON Schema', 'Data Extraction'],
    challenges: [
      'Handling API rate limits and transient connection errors during automated multi-model batch evaluations',
      'Normalizing unstructured free-text responses into validated datasets for quantitative statistical comparison'
    ]
  }
]
