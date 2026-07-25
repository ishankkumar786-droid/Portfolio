import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Target, Beaker, Heart, Award, TrendingUp, Cpu, Download, ArrowRight, Sparkles, Code, CheckCircle2, Flame, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { SKILLS_MATRIX, DSA_STATS } from '@/lib/data/experienceData'
import { siteConfig } from '@/config/site'

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-16">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Background & Bio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Computer Science & Engineering student at <strong className="text-cyan-300">IIITDM Kurnool</strong> (2022–2026, GPA 8.28). Passionate about Full-Stack web & mobile engineering, AI/LLM integrations, and algorithm optimization.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white rounded-xl shadow-lg shadow-cyan-500/20" asChild>
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border/80 hover:border-cyan-500/40 rounded-xl" asChild>
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 text-cyan-400" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Narrative */}
        <Card className="glass-card border-border/80 p-8 space-y-4">
          <h2 className="text-2xl font-bold">Background & Education</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed text-base">
            <p>
              I am pursuing my Bachelor of Technology in Computer Science and Engineering at the <strong>Indian Institute of Information Technology, Design and Manufacturing Kurnool (IIITDM Kurnool)</strong> with a current GPA of <strong>8.28</strong>.
            </p>
            <p>
              Over the last 3-4 years, I have built full-stack web and mobile applications using modern frameworks like <strong>Next.js, React.js, React Native, Node.js, Express.js, and MongoDB Atlas</strong>. I have also integrated state-of-the-art AI capabilities through <strong>Gemini API, Groq API, and Qdrant Vector Databases</strong>.
            </p>
            <p>
              Simultaneously, I have dedicated significant effort to algorithmic problem solving: solving <strong>700+ Data Structures & Algorithms problems</strong> across LeetCode, GeeksforGeeks, and Codeforces, achieving a <strong>Global Rank of 996</strong> in LeetCode Bi-Weekly Contest 163 and clearing the <strong>Flipkart Grid 6.0 Technical Round</strong>.
            </p>
          </div>
        </Card>

        {/* Competitive Coding Achievements */}
        <div className="glass-card rounded-2xl p-8 border-violet-500/30 space-y-6">
          <div className="flex items-center gap-3">
            <Flame className="h-6 w-6 text-amber-400 fill-amber-400" />
            <h2 className="text-2xl font-bold">Coding Profiles & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-secondary/40 p-4 rounded-xl border border-border/40 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-mono uppercase">LeetCode Contest Rank</p>
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">Rank #996</p>
              <p className="text-xs text-muted-foreground">Bi-Weekly Contest 163</p>
            </div>
            <div className="bg-secondary/40 p-4 rounded-xl border border-border/40 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-mono uppercase">Total DSA Solved</p>
              <p className="text-3xl font-extrabold text-violet-400 font-mono">700+ Problems</p>
              <p className="text-xs text-muted-foreground">LeetCode, GFG, Codeforces</p>
            </div>
            <div className="bg-secondary/40 p-4 rounded-xl border border-border/40 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-mono uppercase">Hackathon Milestone</p>
              <p className="text-xl font-bold text-emerald-400 font-mono pt-2">Flipkart Grid 6.0</p>
              <p className="text-xs text-muted-foreground">Cleared Technical Round</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {DSA_STATS.platforms.map((p) => (
              <a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary border border-border/60 hover:border-cyan-500/40 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                <span>{p.name} Profile</span>
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills Matrix</h2>
            <p className="text-muted-foreground text-sm">Detailed skill breakdown across programming, web/mobile development, and AI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS_MATRIX.map((cat, idx) => (
              <Card key={idx} className="glass-card border-border/60 p-6 space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 border-b border-border/40 pb-2">{cat.category}</h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span>{skill.name}</span>
                        <span className="font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
