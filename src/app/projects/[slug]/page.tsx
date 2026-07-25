import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROJECTS_DATA } from '@/lib/data/projectsData'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2, ShieldAlert, Layers, Terminal, Sparkles } from 'lucide-react'

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS_DATA.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Back Link */}
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cyan-400 -ml-2" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
              {project.category}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-cyan-300 font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white rounded-xl shadow-lg shadow-cyan-500/20" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View Source Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button size="lg" variant="outline" className="border-border/80 hover:border-cyan-500/40 rounded-xl" asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 text-cyan-400" />
                  Live System Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <Card key={idx} className="glass-card border-border/60 text-center p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-1">{metric.label}</p>
              <p className="text-3xl font-extrabold font-mono text-gradient">{metric.value}</p>
            </Card>
          ))}
        </div>

        {/* System Overview */}
        <div className="space-y-8">
          <Card className="glass-card border-border/60 p-8 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              System Overview & Motivation
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base">
              {project.overview}
            </p>
            <div className="bg-secondary/40 p-4 rounded-xl border border-border/40">
              <p className="text-xs font-mono uppercase text-muted-foreground mb-1">Core Problem Statement</p>
              <p className="text-sm text-foreground/80 leading-relaxed font-mono">{project.problem}</p>
            </div>
          </Card>

          {/* Architecture & Tech Stack */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card border-border/60 p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Layers className="h-5 w-5 text-violet-400" />
                Architectural Pattern
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </Card>

            <Card className="glass-card border-border/60 p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Terminal className="h-5 w-5 text-cyan-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-foreground/90 font-mono text-xs rounded-md border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Key Engineering Features */}
          <Card className="glass-card border-border/60 p-8 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              Key Capabilities & Innovations
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Engineering Challenges */}
          <Card className="glass-card border-border/60 p-8 space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-rose-400" />
              Technical Challenges Mitigated
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  )
}
