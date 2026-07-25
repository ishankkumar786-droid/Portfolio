import { Card, CardTitle } from '@/components/ui/card'
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest justify-center">
            <Mail className="h-3.5 w-3.5" />
            Contact Ishank Kumar
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let's Connect & <span className="text-gradient">Collaborate</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Interested in discussing full-stack web/mobile roles, AI integration projects, or competitive programming opportunities? Reach out directly via email or connect with me on my professional profiles.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <Card className="glass-card border-border/80 p-8 space-y-8">
            <CardTitle className="text-2xl font-bold text-center">Direct Contact & Profiles</CardTitle>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Email Address</p>
                  <a href="mailto:ishankkumar786@gmail.com" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                    ishankkumar786@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-cyan-500/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Phone Number</p>
                  <a href="tel:+917408410682" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                    +91-7408410682
                  </a>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/ishank-kumar-b7a431252"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
                    <p className="text-sm font-medium group-hover:text-cyan-400">Ishank Kumar</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400" />
              </a>

              <a
                href="https://github.com/ishankkumar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">GitHub</p>
                    <p className="text-sm font-medium group-hover:text-cyan-400">Ishank Kumar</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400" />
              </a>
            </div>
          </Card>

          <Card className="glass-card border-border/80 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Location & Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based in India • B.Tech CSE Student at <strong className="text-cyan-300">IIITDM Kurnool</strong> (Graduating 2026).
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
