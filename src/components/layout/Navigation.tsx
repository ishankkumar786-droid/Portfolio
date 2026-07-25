'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/use-theme'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { Menu, X, Moon, Sun, Search, Terminal, Sparkles } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <>
      <nav className="sticky top-0 z-40 w-full glass-nav transition-all">
        <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-background rounded-[11px] flex items-center justify-center">
                <Terminal className="h-4 w-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70">
              {siteConfig.name}
              <span className="text-cyan-400 font-mono text-sm ml-1">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm font-medium transition-all relative',
                    isActive
                      ? 'text-cyan-400 font-semibold bg-cyan-500/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  )}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Actions & Controls */}
          <div className="flex items-center space-x-2">
            {/* Quick Command K Trigger */}
            <button
              onClick={() => {
                const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true })
                window.dispatchEvent(event)
              }}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/60 bg-secondary/30 text-muted-foreground text-xs hover:border-cyan-500/40 hover:text-foreground transition-all"
            >
              <Search className="h-3.5 w-3.5 text-cyan-400" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded border border-border/80 bg-card text-[10px] font-mono text-muted-foreground">⌘K</kbd>
            </button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden border-b border-border/60 bg-card/95 backdrop-blur-2xl animate-fade-in">
            <div className="container py-4 space-y-1.5 px-4">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Global Command Palette Component */}
      <CommandPalette />
    </>
  )
}
