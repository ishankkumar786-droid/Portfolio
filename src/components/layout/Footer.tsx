import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Github, Linkedin, Mail, Twitter, Terminal, Heart, ArrowUpRight, Code, Flame } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-md relative py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
                <div className="h-full w-full bg-background rounded-[7px] flex items-center justify-center">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full-Stack Developer, AI Integrator & Competitive Programmer (700+ DSA Solved). IIITDM Kurnool CSE.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for Full-Stack & AI Engineering roles
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cyan-400 transition-colors inline-flex items-center group">
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Coding Profiles */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Coding Profiles</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <Flame className="h-4 w-4 text-amber-400" />
                <span>LeetCode (#996 Rank)</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <a
                href={siteConfig.links.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <Code className="h-4 w-4 text-emerald-400" />
                <span>GeeksforGeeks</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. B.Tech CSE IIITDM Kurnool.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> for Next.js, AI & DSA
          </p>
        </div>
      </div>
    </footer>
  )
}
