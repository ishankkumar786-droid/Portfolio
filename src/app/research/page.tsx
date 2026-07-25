import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Beaker, CheckCircle2, ExternalLink, FileText, BarChart3, Database, Bot } from 'lucide-react'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Beaker className="h-3.5 w-3.5" />
            Undergraduate Research
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Research & <span className="text-gradient">Academic Work</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Investigating LLM reliability across web services, building automated evaluation pipelines, and conducting statistical analysis on model consistency.
          </p>
        </div>

        {/* Primary Research Project */}
        <Card className="glass-card border-cyan-500/30 p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-2">
              <span className="text-xs px-3 py-1 font-mono rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 w-fit inline-block">
                Completed • Jan – Apr 2026
              </span>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                LLM Reliability Analysis via Web Services
              </CardTitle>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Beaker className="h-4 w-4 text-cyan-400" />
            <span>IIITDM Kurnool • Undergraduate Research Project</span>
          </div>

          <p className="text-foreground/90 leading-relaxed text-base">
            Conducted research on the reliability, consistency, and response variance of Large Language Models (LLMs) when invoked through commercial web API services. Built end-to-end automated evaluation pipelines to systematically measure model behavior across diverse prompts and tasks.
          </p>

          {/* Research Methodology */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="bg-secondary/40 p-5 rounded-xl border border-border/40 space-y-3">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <Database className="h-4 w-4 text-cyan-400" />
                Data Collection & Processing
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Developed Python automation scripts to collect responses from multiple LLM APIs across diverse prompts and tasks</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Built workflows for data extraction, cleaning, normalization, and validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/40 p-5 rounded-xl border border-border/40 space-y-3">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-violet-400" />
                Analysis & Results
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Performed statistical analysis and visualization to measure model reliability and response variance</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Generated structured evaluation datasets for quantitative comparison across providers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
            {['Python', 'LLM APIs', 'REST APIs', 'Pandas', 'NumPy', 'Matplotlib', 'Data Extraction', 'Statistical Analysis', 'JSON Schema'].map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 bg-secondary text-muted-foreground rounded-md">
                {t}
              </span>
            ))}
          </div>

          {/* Link to project case study */}
          <div className="pt-2">
            <Button size="sm" className="bg-secondary hover:bg-cyan-500/20 hover:text-cyan-300 border border-border/60 text-xs" asChild>
              <Link href="/projects/llm-reliability-suite">
                View Full Case Study
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </Card>

        {/* Research Interests */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Areas of Interest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card border-border/60 p-6 space-y-3 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold">LLM Applications & RAG</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building practical AI applications using Retrieval-Augmented Generation, prompt engineering, and multi-provider LLM orchestration.
              </p>
            </Card>

            <Card className="glass-card border-border/60 p-6 space-y-3 hover:border-violet-500/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold">AI Reliability & Evaluation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Measuring consistency, variance, and reproducibility of LLM outputs through systematic benchmarking and statistical evaluation.
              </p>
            </Card>

            <Card className="glass-card border-border/60 p-6 space-y-3 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold">Full-Stack AI Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Architecting web and mobile applications that seamlessly integrate AI services with modern full-stack frameworks.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
