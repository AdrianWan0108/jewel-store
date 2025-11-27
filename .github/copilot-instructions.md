# Jewel Store - AI Coding Agent Instructions

## Project Overview
This is a **Next.js 16** e-commerce storefront for jewelry products, bootstrapped with `create-next-app`. The project uses:
- **Framework**: Next.js 16 with App Router (React 19.2)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Language**: TypeScript 5 (strict mode enabled)
- **Code Quality**: ESLint with Next.js defaults

**Key Directories**:
- `app/` - Next.js App Router pages and layouts (entry point: `page.tsx`)
- `src/graphql/` - Reserved for GraphQL schema/queries (currently empty)
- `src/store/` - Reserved for state management (currently empty)
- `data/` - Reserved for product data/fixtures (currently empty)
- `public/` - Static assets (images/, videos/ subdirectories exist)

## Architecture Patterns

### Early-Stage Structure
The project is in early development with scaffolded but unpopulated feature directories. When building features:

1. **GraphQL Layer** (`src/graphql/`): Add query/mutation definitions and type generation config here
2. **State Management** (`src/store/`): Implement Redux, Zustand, or Context API solutions
3. **Product Data** (`data/`): Create seed files or data loaders for product catalogs

### Current Implementation
- Main page: `app/page.tsx` (starter template - edit this first)
- Root layout: `app/layout.tsx` (Geist font configuration, metadata)
- Global styles: `app/globals.css` (Tailwind v4 imports)

## Development Workflows

### Start Development Server
```bash
npm run dev
```
Runs Next.js dev server on `http://localhost:3000` with hot reload.

### Build & Production
```bash
npm run build      # Creates optimized production build (.next/)
npm start          # Starts production server
```

### Code Quality
```bash
npm run lint       # ESLint only (no auto-fix by default)
npm run lint -- --fix  # Auto-fix linting issues
```

**Linting Config**: ESLint 9 uses flat config (`eslint.config.mjs`). Uses `eslint-config-next/core-web-vitals` and `typescript` presets. Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`.

## Conventions & Patterns

### TypeScript
- **Strict Mode**: Enabled (`"strict": true`)
- **Path Aliases**: `@/*` maps to root for cleaner imports (e.g., `import { x } from '@/src/store'`)
- **React 19 JSX**: No need to import React in components

### Styling
- **Utility-First CSS**: Use Tailwind utility classes (e.g., `className="flex items-center gap-2"`)
- **Dark Mode**: Built-in support via `dark:` prefix (see `layout.tsx` for example)
- **Font System**: Use CSS variables `--font-geist-sans` and `--font-geist-mono` from `next/font/google`

### Component Structure
```tsx
// Example component pattern
import type { Metadata } from "next";

export const metadata: Metadata = { title: "..." };

export default function Component() {
  return <div className="...">...</div>;
}
```

### Image Optimization
Use `next/image` for all product/asset images:
```tsx
import Image from "next/image";
<Image src="/path" alt="description" width={800} height={600} priority />
```

## Important Notes

- **No external API configured**: GraphQL, database, and API routes not yet implemented. Plan integrations in `src/graphql/` and `src/store/`
- **Empty feature directories**: `src/graphql/`, `src/store/`, and `data/` exist for future features - populate as needed
- **Production metadata**: Update `metadata` in `app/layout.tsx` (currently placeholder)
- **Font system**: Geist is already configured; add additional fonts in `layout.tsx` if needed
- **Build output**: `.next/` contains compiled artifacts; regenerate after dependency changes

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server (hot reload) |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Check code quality |

## Next Steps for New Features
1. Update component/page templates in `app/`
2. Add API routes or GraphQL queries in `src/graphql/`
3. Implement state in `src/store/`
4. Add product data fixtures in `data/`
5. Store images/videos in `public/images/` and `public/videos/`
