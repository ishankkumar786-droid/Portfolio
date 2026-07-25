import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Cpu, Database, Network, Sparkles, Terminal, FileCode, CheckCircle2, ShieldAlert, Zap, Layers, Code, Award, GraduationCap, Flame, Globe } from 'lucide-react'
import { PROJECTS_DATA } from '@/lib/data/projectsData'
import { BLOG_POSTS } from '@/lib/data/blogData'
import { DSA_STATS } from '@/lib/data/experienceData'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 pt-16 md:pt-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl space-y-8">
          {/* IIITDM Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium shadow-lg shadow-cyan-500/10">
            <GraduationCap className="h-4 w-4 text-cyan-400" />
            IIITDM Kurnool B.Tech CSE (2022–2026) • GPA 8.28
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-semibold tracking-tight max-w-3xl mx-auto">
              Full-Stack Developer & AI Integrator
            </p>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
              Building AI-powered web & mobile applications with Next.js, React Native, Node.js, and LLM APIs. <strong className="text-cyan-300">700+ DSA Problems Solved</strong> (LeetCode Global Rank 996).
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-base px-8 h-12 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-xl shadow-cyan-500/25 border-0 rounded-xl" asChild>
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 border-border/80 hover:border-cyan-500/50 hover:bg-secondary/50 rounded-xl" asChild>
              <Link href="/contact">
                Contact Me
                <Mail className="ml-2 h-4 w-4 text-cyan-400" />
              </Link>
            </Button>
          </div>

          {/* Tech Stack Marquee */}
          <div className="pt-10 border-t border-border/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tech Stack & Tools</p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {['C++', 'Python', 'React Native', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Groq API', 'Qdrant', 'TailwindCSS'].map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-card/80 border border-border/60 text-xs font-mono font-medium text-foreground/90 shadow-sm hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Programming & DSA Showcase Section */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border-cyan-500/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-medium">
                <Flame className="h-4 w-4 text-amber-400 fill-amber-400" />
                Data Structures & Competitive Programming
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Problem Solving & Algorithm Mastery
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Extensive coding experience across LeetCode, GeeksforGeeks, and Codeforces. Proven problem-solving ability in contest environments and technical hackathons.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {DSA_STATS.platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary border border-border/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <span>{p.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="glass-card p-6 text-center rounded-xl border-border/60 space-y-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">DSA Solved</p>
                <p className="text-4xl font-extrabold font-mono text-cyan-400">{DSA_STATS.totalSolved}</p>
                <p className="text-[11px] text-muted-foreground">Problems across platforms</p>
              </div>

              <div className="glass-card p-6 text-center rounded-xl border-border/60 space-y-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">LeetCode Rank</p>
                <p className="text-4xl font-extrabold font-mono text-violet-400">#{DSA_STATS.leetcodeRank}</p>
                <p className="text-[11px] text-muted-foreground">Bi-Weekly Contest 163</p>
              </div>

              <div className="glass-card p-6 text-center rounded-xl border-border/60 space-y-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Flipkart Grid</p>
                <p className="text-xl font-bold font-mono text-emerald-400 pt-2">Cleared 6.0</p>
                <p className="text-[11px] text-muted-foreground">Technical Round</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              Core Competencies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I Build & Excel At</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Combining full-stack software development with artificial intelligence integrations and algorithmic rigor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-card border-border/60 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle className="text-xl">Full-Stack Web & Mobile</CardTitle>
              <CardDescription className="text-sm pt-2 text-muted-foreground leading-relaxed">
                Building responsive Web apps (Next.js, React) and cross-platform Mobile apps (React Native) with Node.js/Express & MongoDB backends.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card border-border/60 hover:border-violet-500/50 transition-all duration-300 group hover:-translate-y-1">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-6 w-6 text-violet-400" />
              </div>
              <CardTitle className="text-xl">AI & LLM Integration</CardTitle>
              <CardDescription className="text-sm pt-2 text-muted-foreground leading-relaxed">
                Integrating Gemini & Groq APIs, building Retrieval-Augmented Generation (RAG) pipelines, and setting up vector search with Qdrant.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card border-border/60 hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1">
            <CardHeader className="p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-amber-400" />
              </div>
              <CardTitle className="text-xl">Algorithms & Data Structures</CardTitle>
              <CardDescription className="text-sm pt-2 text-muted-foreground leading-relaxed">
                Strong foundation in C++ problem solving, dynamic programming, graph theory, and optimal space/time complexity design.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Layers className="h-3.5 w-3.5" />
              Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work & Case Studies</h2>
          </div>
          <Button variant="outline" className="w-fit border-border/80 hover:border-cyan-500/40" asChild>
            <Link href="/projects">
              View All Projects ({PROJECTS_DATA.length})
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="glass-card border-border/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group">
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
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-secondary/40 p-2 rounded-lg border border-border/40 text-center">
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className="text-sm font-bold font-mono text-cyan-300">{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 bg-secondary/80 text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Link Actions */}
                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="w-full bg-secondary hover:bg-cyan-500/20 hover:text-cyan-300 border border-border/60 text-xs" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      Case Study
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg border border-border/60 bg-secondary/50 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles & Insights */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 uppercase tracking-widest mb-2">
              <FileCode className="h-3.5 w-3.5" />
              Technical Writing & DSA Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Articles</h2>
          </div>
          <Button variant="outline" className="w-fit border-border/80 hover:border-violet-500/40" asChild>
            <Link href="/blog">
              Read All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="glass-card border-border/60 hover:border-violet-500/50 transition-all duration-300 group flex flex-col justify-between">
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-cyan-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-violet-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm pt-2 text-muted-foreground leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <Button size="sm" variant="ghost" className="px-0 hover:bg-transparent text-cyan-400 hover:text-cyan-300 text-xs font-mono" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read full article <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 border-border/80 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Interested in hiring or collaborating on full-stack web/mobile apps, AI/LLM integrations, or software engineering roles? I'd love to connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 h-12 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white rounded-xl shadow-lg shadow-cyan-500/20" asChild>
              <Link href="/contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 border-border/80 hover:border-cyan-500/40 rounded-xl" asChild>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4 text-cyan-400" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
