export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  status: 'active' | 'completed' | 'archived'
  githubUrl?: string
  liveUrl?: string
  coverImage?: string
  gallery: string[]
  problem: string
  motivation: string
  requirements: string[]
  architecture: string
  systemDiagram?: string
  databaseDesign?: string
  folderStructure?: string
  technologyDecisions: string[]
  tradeoffs: string[]
  implementation: string
  challenges: string[]
  performance: string
  futureImprovements: string[]
  lessonsLearned: string[]
  featured: boolean
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  content: string
  category: string
  tags: string[]
  coverImage?: string
  readingTime: number
  published: boolean
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Research {
  id: string
  title: string
  slug: string
  description: string
  content: string
  topic: string
  status: 'idea' | 'in-progress' | 'completed' | 'published'
  papers?: string[]
  experiments?: string[]
  futureWork: string[]
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'education'
  startDate: Date
  endDate?: Date
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  order: number
}

export interface Skill {
  id: string
  name: string
  category: string
  level: 'expert' | 'advanced' | 'intermediate' | 'learning'
  years: number
}

export interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: Date
}

export interface SiteSettings {
  id: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  status: string
  availability: boolean
  githubUsername: string
  linkedinUsername: string
  twitterUsername: string
  email: string
  location: string
}
