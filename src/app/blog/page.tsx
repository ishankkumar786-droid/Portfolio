import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileCode, Clock, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/data/blogData'

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 uppercase tracking-widest">
            <FileCode className="h-3.5 w-3.5" />
            Engineering Writings
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Articles & <span className="text-gradient">Systems Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In-depth technical essays on Full-Stack Development, AI integration, and Competitive Programming strategies.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="glass-card border-border/60 hover:border-violet-500/50 transition-all duration-300 group p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="px-2.5 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-md font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-violet-400 transition-colors mb-3">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </CardTitle>

              <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                {post.description}
              </CardDescription>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 bg-secondary text-muted-foreground rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 font-mono text-xs w-fit" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read Article <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
