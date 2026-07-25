import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data/blogData'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto space-y-10">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cyan-400 -ml-2" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        {/* Article Meta Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-md font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-cyan-400 pl-4 py-1 italic">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-secondary text-muted-foreground rounded-md border border-border/40">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <Card className="glass-card border-border/60 p-8 md:p-12">
          <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-400 prose-pre:bg-secondary/80 prose-pre:border prose-pre:border-border/60 whitespace-pre-line text-foreground/90 leading-relaxed">
            {post.content}
          </article>
        </Card>
      </div>
    </main>
  )
}
