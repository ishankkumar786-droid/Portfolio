'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, ExternalLink, Search, Sparkles, ArrowRight, Layers, Filter } from 'lucide-react'
import Link from 'next/link'
import { PROJECTS_DATA, ProjectItem } from '@/lib/data/projectsData'

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Web Applications', 'Machine Learning', 'AI Integration']

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Layers className="h-3.5 w-3.5" />
            Engineering Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Projects & <span className="text-gradient">System Architectures</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Case studies of full-stack web and mobile applications, AI and LLM integrations, and robust architectures.
          </p>
        </div>

        {/* Interactive Search and Filter Toolbar */}
        <div className="glass-card p-4 rounded-2xl border-border/80 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <Input
              type="text"
              placeholder="Search by keyword, tool (PyTorch, Rust, Go)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-secondary/50 border-border/60 focus:border-cyan-500/50 rounded-xl text-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 flex-wrap w-full md:w-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 shadow-md shadow-cyan-500/20 rounded-lg text-xs font-medium'
                    : 'border-border/60 hover:border-cyan-500/40 hover:bg-secondary text-muted-foreground rounded-lg text-xs font-medium'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="glass-card border-border/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-cyan-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm pt-2 text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0 space-y-4">
                  {/* Highlights Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-secondary/40 p-2 rounded-lg border border-border/40 text-center">
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                        <p className="text-sm font-bold font-mono text-cyan-300">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2 py-0.5 bg-secondary/80 text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="w-full bg-secondary hover:bg-cyan-500/20 hover:text-cyan-300 border border-border/60 text-xs" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        Read Case Study
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg border border-border/60 bg-secondary/50 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
                      title="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center rounded-2xl space-y-4">
            <p className="text-lg text-muted-foreground">No projects match search term "{searchQuery}".</p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
