export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  type: 'Full-time' | 'Contract' | 'Education' | 'Research'
  description: string
  achievements: string[]
  technologies: string[]
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'research-exp',
    role: 'Research Student – LLM Reliability Analysis via Web Services',
    company: 'IIITDM Kurnool',
    period: 'Jan 2026 – Apr 2026',
    type: 'Research',
    description: 'Conducted research on the reliability and consistency of Large Language Models (LLMs) using automated evaluation pipelines and web service collection workflows.',
    achievements: [
      'Developed Python automation scripts to collect responses from multiple LLM APIs across diverse prompts and tasks.',
      'Built workflows for data extraction, cleaning, normalization, and validation to generate structured evaluation datasets.',
      'Performed statistical analysis and visualization to measure model reliability and response variance.'
    ],
    technologies: ['Python', 'LLM APIs', 'Data Extraction', 'REST APIs', 'Statistical Analysis', 'Visualization']
  },
  {
    id: 'education-iiitdm',
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Indian Institute of Information Technology, Design and Manufacturing Kurnool (IIITDM Kurnool)',
    period: '2022 – 2026',
    type: 'Education',
    description: 'Pursuing Bachelor of Technology in CSE with a strong focus on Data Structures & Algorithms, Full-Stack Development, and AI Applications.',
    achievements: [
      'Cumulative GPA: 8.28 / 10.0',
      'Global Rank 996 in LeetCode Bi-Weekly Contest 163.',
      'Solved 700+ DSA problems across LeetCode, GeeksforGeeks, and Codeforces.',
      'Cleared Flipkart Grid 6.0 Technical Round.'
    ],
    technologies: ['Data Structures', 'Algorithms', 'C++', 'Python', 'Web Engineering', 'DBMS', 'OS', 'Networks']
  }
]

export interface SkillCategory {
  category: string
  skills: { name: string; level: number }[]
}

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    category: 'Programming & DSA',
    skills: [
      { name: 'C++ / Algorithms', level: 95 },
      { name: 'Python', level: 92 },
      { name: 'JavaScript / HTML / SQL', level: 90 },
      { name: 'C Language', level: 85 },
      { name: 'Problem Solving (700+ Solved)', level: 95 }
    ]
  },
  {
    category: 'Full-Stack Development',
    skills: [
      { name: 'Next.js & React.js', level: 92 },
      { name: 'React Native (Mobile)', level: 88 },
      { name: 'Node.js & Express.js', level: 90 },
      { name: 'REST APIs & JWT Auth', level: 92 },
      { name: 'MongoDB Atlas & Cloudinary', level: 90 }
    ]
  },
  {
    category: 'AI, LLMs & Vector Search',
    skills: [
      { name: 'LLM Integration (Gemini, Groq)', level: 92 },
      { name: 'Retrieval-Augmented Gen (RAG)', level: 88 },
      { name: 'Prompt Engineering & Agents', level: 90 },
      { name: 'Qdrant & Vector DBs', level: 85 },
      { name: 'Semantic & Hybrid Search', level: 88 }
    ]
  }
]

export const DSA_STATS = {
  totalSolved: '700+',
  leetcodeRank: '996',
  leetcodeContest: 'Bi-Weekly Contest 163',
  flipkartGrid: 'Cleared Technical Round 6.0',
  platforms: [
    { name: 'LeetCode', link: 'https://leetcode.com' },
    { name: 'GeeksforGeeks', link: 'https://geeksforgeeks.org' },
    { name: 'Codeforces', link: 'https://codeforces.com' },
  ]
}
