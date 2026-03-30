# CLAUDE.md - 灵吉AI网站项目

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**灵吉AI 官网** - Enterprise data provider's AI platform official website. Built with Next.js 15, TypeScript, and shadcn/ui.

## Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Inter, Roboto, Roboto Mono)
- **Design Style**: Google AI Developer Documentation style

## Design Philosophy

### Visual Identity
- **Dark Theme**: Primary theme (bg-zinc-950, bg-zinc-900)
- **Gradient Accents**: Blue-cyan-purple gradient for CTAs and highlights
- **Glass Morphism**: backdrop-blur and semi-transparent backgrounds
- **Modern Typography**: Large, bold headings with gradient text

### Color System
- **Primary**: Blue (#3B82F6) to Cyan (#06B6D4)
- **Backgrounds**: zinc-950, zinc-900, zinc-800
- **Text**: zinc-100 to zinc-400 hierarchy
- **Borders**: zinc-800, zinc-700 with opacity

### Component Patterns
- Cards with hover scale-105 and shadow-2xl
- Gradients for CTAs and key elements
- Consistent spacing and visual hierarchy
- Mobile-first responsive design

## Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── pricing/           # Pricing page
│   │   ├── docs/              # Documentation page
│   │   ├── register/          # Registration page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── header/            # Navigation header
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx       # Hero section with user cases
│   │   │   ├── social-proof.tsx
│   │   │   ├── product-demo.tsx
│   │   │   ├── pricing-preview.tsx
│   │   │   └── faq.tsx
│   │   └── ui/                # shadcn/ui components
│   │
│   └── lib/                    # Utility functions
│
├── public/                     # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Common Development Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Styling
```bash
# Tailwind CSS is configured with @import syntax
# Edit src/app/globals.css for global styles
# Components use Tailwind utility classes
```

## Important Design Rules

### Color Usage
- **Always use dark theme**: bg-zinc-950, bg-zinc-900, bg-zinc-800
- **Gradients only for**: CTAs, key highlights, hero badges
- **Text hierarchy**:
  - Headings: text-white, text-zinc-100
  - Body: text-zinc-300, text-zinc-400
  - Secondary: text-zinc-500, text-zinc-600

### Typography
- **Hero headings**: text-5xl to text-8xl
- **Section headings**: text-3xl to text-5xl
- **Body text**: text-base to text-xl
- Always use `leading-tight` or `leading-[1.05]` for large headings

### Component Spacing
- **Section padding**: py-24 (96px) or py-32 (128px)
- **Gap spacing**: gap-4, gap-8, gap-12
- **Container**: max-w-screen-2xl for sections
- **Card padding**: p-6 to p-12 depending on content

### Interactive Elements
- **Hover effects**: hover:scale-105, hover:shadow-2xl
- **Transition**: transition-all duration-300
- **Buttons**: h-14, px-10, text-lg for primary CTAs

## Content Guidelines

### Copywriting Style
- **Clear and direct**: Avoid vague language
- **Action-oriented**: Use imperative verbs
- **Benefit-focused**: Highlight user value
- **Specific**: Use concrete numbers and examples

### Do's and Don'ts
- ✅ Use "精准数据，零 AI 幻觉"
- ✅ Use "一键集成到智能体框架"
- ❌ Don't mention "信用卡" - use "无需付费" or "随时升级"
- ❌ Don't mention specific competitors - use generic terms

## Skill Set Preference

**IMPORTANT: Follow this preference when choosing skill sets:**

### For Project Planning → Use **gstack skills**
- Product discovery: `/office-hours`
- Architecture review: `/plan-eng-review`
- Design review: `/plan-design-review`
- Comprehensive review: `/autoplan`

### For Coding & Implementation → Use **Superpowers skills**
- Code analysis: `systematic-debugging`
- Implementation: `subagent-driven-development`
- Code review: `requesting-code-review`
- Testing: `test-driven-development`

## Combined Development Workflow

```
[Planning Phase]
gstack: /office-hours → gstack: /autoplan
    ↓
[Implementation Phase]
Superpowers: subagent-driven-development
    ├─ Task 1 → Superpowers: requesting-code-review
    ├─ Task 2 → Superpowers: requesting-code-review
    └─ Task N → Superpowers: requesting-code-review
    ↓
[Quality Assurance]
gstack: /review → gstack: /qa
    ↓
[Deployment]
gstack: /ship → git push
```

## Current Pages & Features

### Homepage (/)
- Hero section with gradient title
- User case cards (3 personas: 企业主, 律师, 投资人)
- Social proof with metrics
- Product demo
- Pricing preview
- FAQ section
- Footer (4 columns)

### Pricing Page (/pricing)
- 3 pricing tiers (免费版, 专业版, 企业版)
- FAQ section
- CTA section

### Documentation Page (/docs)
- Quick start guide
- Commands reference
- Configuration guide
- Troubleshooting

### Registration Page (/register)
- Registration form (TODO: implement backend)

## Known Issues & TODOs

### High Priority
1. [ ] Implement user authentication backend
2. [ ] Implement API Key generation system
3. [ ] Connect to actual enterprise data API
4. [ ] Add payment integration (Alipay, WeChat)

### Medium Priority
5. [ ] Add more user case studies
6. [ ] Implement usage dashboard
7. [ ] Add blog section
8. [ ] Optimize SEO

### Low Priority
9. [ ] Add internationalization (i18n)
10. [ ] Add dark/light mode toggle
11. [ ] Add analytics integration

## Git Workflow

1. Make changes locally
2. Test at http://localhost:3000
3. Commit changes with descriptive message
4. Push to GitHub when user approves

## Important Notes

- **Always test locally** before pushing to GitHub
- **Maintain design consistency** across all pages
- **Keep copywriting aligned** with brand voice
- **No hard-coded sensitive data** (API keys, secrets)
- **Follow Google AI design style** for inspiration
