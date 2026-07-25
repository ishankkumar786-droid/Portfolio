export const siteConfig = {
  name: 'Ishank Kumar',
  title: 'Full-Stack Developer | AI Integrator | Competitive Programmer',
  description: 'B.Tech CSE Student at IIITDM Kurnool. Solved 700+ DSA problems (LeetCode Global Rank 996). Building AI-powered full-stack web & mobile applications.',
  url: 'https://ishank-kumar.vercel.app',
  ogImage: '/og.jpg',
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    leetcode: 'https://leetcode.com',
    geeksforgeeks: 'https://geeksforgeeks.org',
    codeforces: 'https://codeforces.com',
    email: 'mailto:ishankkumar786@gmail.com',
    phone: 'tel:+917408410682',
  },
  navItems: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Research', href: '/research' },
    { title: 'Experience', href: '/experience' },
    { title: 'Blog', href: '/blog' },
    { title: 'Uses', href: '/uses' },
    { title: 'Contact', href: '/contact' },
  ],
}

export type SiteConfig = typeof siteConfig
