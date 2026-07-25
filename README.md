# Portfolio

A production-grade digital identity platform for an AI Engineer and Systems Architect.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Database**: MongoDB Atlas with Prisma ORM
- **Authentication**: Auth.js (NextAuth v5)
- **Validation**: Zod
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend + React Email
- **Images**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Resend account (for email)
- Cloudinary account (for images)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your values:
- `DATABASE_URL`: MongoDB connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your app URL
- `RESEND_API_KEY`: Resend API key
- Cloudinary credentials

3. Initialize Prisma:
```bash
npx prisma generate
npx prisma db push
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/             # Utilities and configurations
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── types/           # TypeScript types
└── config/          # Site configuration
```

## Features

- **Home**: Hero section, current focus, selected projects, research interests
- **About**: Modular cards for education, focus, mission, values
- **Projects**: Premium browsing with search, filter, case studies
- **Research**: Current topics, experiments, papers
- **Experience**: Timeline layout for career history
- **Blog**: MDX-powered blog with syntax highlighting
- **Uses**: Tech stack and tools (uses.tech style)
- **Contact**: Professional form with validation
- **Admin Dashboard**: Secure content management

## Performance Goals

- Lighthouse score: 95+
- Server Components by default
- Image optimization
- Code splitting
- Static generation where possible

## License

MIT
