# Matthew Aberham's Portfolio

My personal website built with Next.js, TypeScript, and Tailwind CSS.

## Content Management

This site uses [Contentlayer](https://contentlayer.dev/) to manage content in MDX format. Content is organized into three types:

- **Projects** (`content/projects/*.mdx`)
- **Experience** (`content/experience/*.mdx`)
- **Crafts** (`content/crafts/*.mdx`)

### Adding Content

#### Projects

```mdx
---
title: 'Project Name'
description: 'Brief project description'
date: 2024-01-01
published: true
technologies: ['Tech1', 'Tech2']
---
```

#### Experience

```mdx
---
company: 'Company Name'
role: 'Your Role'
description: 'Brief description of responsibilities'
startDate: 2024-01-01
endDate: 2024-12-31 # omit for current position
current: false # set to true for current position
technologies: ['Tech1', 'Tech2']
---
```

#### Crafts

```mdx
---
title: 'Craft Name'
description: 'Brief description'
date: 2024-01-01
slug: 'unique-slug'
---
```

## Development

```bash
# Install dependencies
npm install

# Start development server (includes content generation)
npm run dev

# Build for production (includes content generation)
npm run build

# Start production server
npm run start

# Generate content types (if needed)
npm run contentlayer
```

### Content Updates

When adding or modifying content:

1. Place MDX files in the appropriate directory under `content/`
2. Content types will be automatically generated on dev/build
3. Changes to content structure require updates to `contentlayer.config.ts`

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev/)
- [MDX](https://mdxjs.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
