import { Card } from '@/components/ui/card'
import { Monitor, Terminal, Globe, Cpu, Code, Wrench, Smartphone, Database, Sparkles } from 'lucide-react'

export default function UsesPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Wrench className="h-3.5 w-3.5" />
            Developer Setup
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Tools & <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The languages, frameworks, tools, and services I use daily for full-stack development, AI integrations, and competitive programming.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Code className="h-5 w-5 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['C++', 'Python', 'JavaScript', 'C', 'SQL', 'HTML/CSS'].map((lang) => (
                <span key={lang} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              C++ is my primary language for competitive programming and DSA problem solving. Python for AI/ML scripts and automation. JavaScript/TypeScript for full-stack web and mobile development.
            </p>
          </Card>

          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-violet-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-xl font-bold">Frontend Frameworks</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'React Native', 'TailwindCSS', 'Redux'].map((fw) => (
                <span key={fw} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {fw}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js for server-rendered web apps with SEO optimization. React Native for cross-platform mobile development. TailwindCSS and Redux for responsive UI styling and state management.
            </p>
          </Card>

          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Database className="h-5 w-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold">Backend & Database</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'REST APIs', 'MongoDB Atlas', 'Cloudinary', 'Clerk Auth', 'JWT'].map((be) => (
                <span key={be} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {be}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Node.js/Express.js for building modular REST APIs with JWT authentication. MongoDB Atlas for NoSQL data storage. Cloudinary for image/media management. Clerk for user authentication flows.
            </p>
          </Card>

          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-xl font-bold">AI & LLM Tools</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Gemini API', 'Groq API', 'RAG Pipelines', 'Qdrant Vector DB', 'Prompt Engineering'].map((ai) => (
                <span key={ai} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {ai}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Integrating Gemini and Groq APIs for intelligent content generation. Building Retrieval-Augmented Generation (RAG) pipelines with Qdrant vector databases for semantic search capabilities.
            </p>
          </Card>

          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold">Editor & Dev Tools</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Git & GitHub', 'Postman', 'Vercel', 'Render', 'npm/pnpm'].map((tool) => (
                <span key={tool} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VS Code as my primary editor with essential extensions. Git/GitHub for version control. Postman for API testing. Vercel and Render for seamless deployment of frontend and backend services.
            </p>
          </Card>

          <Card className="glass-card border-border/60 p-6 space-y-4 hover:border-rose-500/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-rose-400" />
              </div>
              <h2 className="text-xl font-bold">DSA & Competitive Programming</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['LeetCode', 'GeeksforGeeks', 'Codeforces', 'C++ STL', 'Graph Algorithms', 'Dynamic Programming'].map((cp) => (
                <span key={cp} className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-foreground/90 rounded-lg border border-border/50">
                  {cp}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solved 700+ problems across platforms. Proficient in C++ STL for contests. Focus areas: Graph algorithms, Dynamic Programming, Trees, Binary Search, and Greedy techniques.
            </p>
          </Card>
        </div>
      </div>
    </main>
  )
}
