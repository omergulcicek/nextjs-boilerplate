# Next.js Boilerplate

An open source boilerplate built using **Next.js 15.3**, **TypeScript**, and **Tailwind CSS**

## Features

With this template, you get all the awesomeness you need:

- [x] Advanced Folder Structures
- [x] [Next.js](https://nextjs.org/) with App Router support
- [x] Type checking [TypeScript](https://www.typescriptlang.org/)
- [x] Styled using [Tailwind CSS](https://tailwindcss.com/)
- [x] State management with [Zustand](https://zustand-demo.pmnd.rs/)
- [ ] Authentication with [NextAuth.js](https://next-auth.js.org/)
- [x] UI Components built with [shadcn/ui](https://ui.shadcn.com/)
- [x] Data Fetching, Caching and Mutation with [TanStack Query](https://tanstack.com/query/latest)
- [x] Linter with [ESLint](https://eslint.org/)
- [x] Code Formatter with [Prettier](https://prettier.io/)
- [x] Form handling with [React Hook Form](https://react-hook-form.com/)
- [x] Validation library with [Zod](https://zod.dev/)
- [ ] [Storybook](https://storybook.js.org/) for UI development
- [ ] Error tracking with [Sentry](https://sentry.io/)
- [ ] Analytics with [Google Analytics](https://analytics.google.com/)
- [x] Beautiful and consistent icons from [Lucide](https://lucide.dev/)
- [x] Loading UI using [Skeleton Components](https://ui.shadcn.com/docs/components/skeleton)
- [x] Dark theme with [next-themes](https://npmjs.com/package/next-themes)
- [x] [Absolute Imports](https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases) with `@` prefix
- [ ] [Husky](https://typicode.github.io/husky/) for Git Hooks
- [ ] Sitemap.xml and robots.txt with [next-sitemap](https://www.npmjs.com/package/next-sitemap)
- [ ] Metadata files optimized for SEO
- [ ] Storage helpers for Local, Session, Cookies
- [ ] 💯 Maximize lighthouse score

## Project structure

```shell
│
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── assets                      # Static assets (images, fonts, etc.)
│   ├── components                  # React components
│   │   ├── forms                   # Form components
│   │   ├── icons                   # svg icons
│   │   ├── shared                  # Header, footer, aside components
│   │   ├── skeletons               # Loading components
│   │   ├── ui                      # Atomic components
│   │   └── widgets                 # Advanced components
│   ├── constants                   # Project-wide constants
│   ├── data                        # Static or mock data
│   ├── helpers                     # Reusable utility functions (e.g., API, formatting, storage)
│   ├── hooks                       # Reusable custom React hooks
│   ├── lib                         # Common utility functions
│   ├── providers                   # Global context providers (theme, data fetching, notifications, i18n)
│   ├── schemas                     # Validation schemas
│   ├── services                    # API request functions
│   ├── stores                      # Global state
│   └── types                       # TypeScript type definitions
├── .env                            # Environment variables
├── .gitignore                      # Git ignore rules
├── .prettierrc                     # Prettier config
├── components.json                 # shadcn/ui config
├── eslint.config.mjs               # ESLint config
├── next.config.mjs                 # Next.js config
├── postcss.config.js               # PostCSS config
├── README.md                       # README file
├── tailwind.config.js              # Tailwind CSS config
└── tsconfig.json                   # TypeScript config
```

## File Naming Conventions

The project follows consistent file naming conventions:

| File Type | Example | Style |
|------------|-------|------|
| Component | `LoginForm.tsx` | PascalCase |
| Hook | `useLogin.ts` | camelCase |
| Helper, Schema | `form-schema.ts` | kebab-case |
| Folder | `login-form/` | kebab-case |
| Constants | `ALPHA_REGEX` | SNAKE_CASE |

## Monitoring & Analytics

### Error Tracking
We use [Sentry](https://sentry.io/) for error tracking and performance monitoring. To set up:

1. Create a Sentry account
2. Add your DSN to `.env`:
```env
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Analytics
We use [Google Analytics](https://analytics.google.com/) for tracking user behavior. To set up:

1. Create a Google Analytics account
2. Add your Measurement ID to `.env`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Contributors

- [@omergulcicek](https://github.com/omergulcicek)
