import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, GraduationCap, Calendar, Sparkles, CheckCircle2, Building2, Flame, Award } from 'lucide-react'
import { EXPERIENCES, DSA_STATS } from '@/lib/data/experienceData'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Briefcase className="h-3.5 w-3.5" />
            Experience & Achievements
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Research, Education & <span className="text-gradient">Contests</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Academic achievements at IIITDM Kurnool, research experience in LLM reliability, and competitive programming highlights.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-border/60 pl-6 md:pl-8 space-y-10 ml-2 md:ml-4">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-5 w-5 rounded-full bg-background border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20" />

              <Card className="glass-card border-border/60 hover:border-cyan-500/50 transition-all duration-300 p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/40 pb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground pt-1">
                      <Building2 className="h-4 w-4 text-cyan-400" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-secondary border border-border/60 rounded-full text-cyan-300 w-fit">
                    {item.period}
                  </span>
                </div>

                <CardContent className="px-0 pb-0 pt-2 space-y-4">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider font-semibold">Key Highlights & Accomplishments:</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-secondary/80 text-muted-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
