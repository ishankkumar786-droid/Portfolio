'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, FileText, Code, Home, User, Briefcase, Mail, Cpu, X } from 'lucide-react'
import { PROJECTS_DATA } from '@/lib/data/projectsData'
import { BLOG_POSTS } from '@/lib/data/blogData'

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isOpen) return null

  const pages = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About', href: '/about', icon: User },
    { title: 'Projects', href: '/projects', icon: Code },
    { title: 'Research', href: '/research', icon: Cpu },
    { title: 'Experience', href: '/experience', icon: Briefcase },
    { title: 'Blog', href: '/blog', icon: FileText },
    { title: 'Contact', href: '/contact', icon: Mail },
  ]

  const filteredPages = pages.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  )
  const filteredBlog = BLOG_POSTS.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) || b.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleNavigate = (path: string) => {
    router.push(path)
    setIsOpen(false)
    setQuery('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-md animate-fade-in p-4">
      <div className="w-full max-w-2xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden glass-card">
        {/* Search Header */}
        <div className="flex items-center px-4 border-b border-border/60">
          <Search className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            className="w-full py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
            placeholder="Type a command or search projects, blog, pages... (ESC to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-md text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4">
          {/* Pages */}
          {filteredPages.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pages</div>
              {filteredPages.map((page) => {
                const Icon = page.icon
                return (
                  <button
                    key={page.href}
                    onClick={() => handleNavigate(page.href)}
                    className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-foreground/90 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors group"
                  >
                    <Icon className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-cyan-400" />
                    <span>{page.title}</span>
                  </button>
                )
              })}
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Projects</div>
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleNavigate(`/projects/${project.slug}`)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-foreground/90 hover:bg-violet-500/10 hover:text-violet-400 transition-colors group text-left"
                >
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-violet-400 flex-shrink-0" />
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">{project.category}</span>
                </button>
              ))}
            </div>
          )}

          {/* Blog Articles */}
          {filteredBlog.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Articles</div>
              {filteredBlog.map((blog) => (
                <button
                  key={blog.id}
                  onClick={() => handleNavigate(`/blog/${blog.slug}`)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-foreground/90 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors group text-left"
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-cyan-400 flex-shrink-0" />
                    <span className="font-medium line-clamp-1">{blog.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{blog.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {filteredPages.length === 0 && filteredProjects.length === 0 && filteredBlog.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">No matching results found for "{query}".</div>
          )}
        </div>
        <div className="px-4 py-2 border-t border-border/50 text-xs text-muted-foreground flex justify-between items-center bg-secondary/30">
          <span>Navigate with mouse or keyboard</span>
          <span className="px-1.5 py-0.5 rounded border border-border bg-card">ESC to exit</span>
        </div>
      </div>
    </div>
  )
}
