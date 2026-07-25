import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  longDescription: z.string().min(1, 'Long description is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  status: z.enum(['active', 'completed', 'archived']),
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
  coverImage: z.string().url().optional().or(z.literal('')),
  gallery: z.array(z.string()),
  problem: z.string().min(1, 'Problem statement is required'),
  motivation: z.string().min(1, 'Motivation is required'),
  requirements: z.array(z.string()),
  architecture: z.string().min(1, 'Architecture description is required'),
  technologyDecisions: z.array(z.string()),
  tradeoffs: z.array(z.string()),
  implementation: z.string().min(1, 'Implementation details are required'),
  challenges: z.array(z.string()),
  performance: z.string().min(1, 'Performance details are required'),
  futureImprovements: z.array(z.string()),
  lessonsLearned: z.array(z.string()),
  featured: z.boolean(),
})

export type ProjectFormData = z.infer<typeof projectSchema>

export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  content: z.string().min(1, 'Content is required'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()),
  coverImage: z.string().url().optional().or(z.literal('')),
  published: z.boolean(),
})

export type BlogPostFormData = z.infer<typeof blogPostSchema>
