# Next.js Boilerplate

Modern **Next.js 15.3** boilerplate with **TypeScript** & **Tailwind CSS**

Live Demo: https://nextjs15-boilerplate.vercel.app/en

## Features

With this template, you get all the awesomeness you need:

- 📂 Advanced Folder Structures
- ⚡ [Next.js](https://nextjs.org/) with App Router support
- 💎 Type checking [TypeScript](https://www.typescriptlang.org/)
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/)
- 📦 State management with [Zustand](https://zustand-demo.pmnd.rs/)
- 🗺️ [next-intl](https://next-intl.dev/) for internationalization
- 🧩 UI Components built with [shadcn/ui](https://ui.shadcn.com/)
- 🔄 Data Fetching, Caching and Mutation with [TanStack Query](https://tanstack.com/query/latest)
- ⌨️ Form handling with [React Hook Form](https://react-hook-form.com/)
- 🔴 Validation library with [Zod](https://zod.dev/)
- 🌸 Smart masking and validation with [@omergulcicek/forms](https://www.npmjs.com/package/@omergulcicek/forms)
- 🧹 Linter with [ESLint](https://eslint.org/)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🎉 [Storybook](https://storybook.js.org/) for UI development
- 🚨 Error tracking with [Sentry](https://sentry.io/)
- 📊 Analytics with [Google Analytics](https://analytics.google.com/)
- ⏳ Loading UI using [Skeleton Components](https://ui.shadcn.com/docs/components/skeleton)
- 🌓 Dark theme with [next-themes](https://npmjs.com/package/next-themes)
- 💡 [Absolute Imports](https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases) with `@` prefix
- ✨ Beautiful and consistent icons from [Lucide](https://lucide.dev/)
- 🐶 [Husky](https://typicode.github.io/husky/) for Git Hooks
- 🤖 Sitemap.xml and robots.txt
- ⚙️ Metadata files optimized for SEO
- 🍪 Storage helpers for Local, Session, Cookies
- 💯 Maximize lighthouse score

## Project structure

```shell
│
├── .husky                          # Husky git hook scripts
├── messages                        # i18n messages
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── assets                      # Static assets (images, fonts, etc.)
│   ├── components                  # React components
│   │   ├── icons                   # svg icons
│   │   ├── features                # Components with hooks and calculations
│   │   ├── shared                  # Header, footer, aside components
│   │   ├── skeletons               # Loading components
│   │   ├── ui                      # Atomic components
│   │   └── widgets                 # Advanced UI components
│   ├── constants                   # Project-wide constants
│   ├── data                        # Static or mock data
│   ├── helpers                     # Reusable utility functions (e.g., API, formatting, storage)
│   ├── hooks                       # Reusable custom React hooks
│   ├── i18n                        # Internationalization setup
│   ├── lib                         # Common utility functions
│   ├── providers                   # Global context providers (theme, data fetching, notifications, i18n)
│   ├── schemas                     # Validation schemas
│   ├── services                    # API request functions
│   ├── stores                      # Global state
│   ├── types                       # TypeScript type definitions
│   └── .middleware                 # Middleware for Next.js
├── .env                            # Environment variables
├── .gitignore                      # Git ignore rules
├── .prettierrc                     # Prettier config
├── components.json                 # shadcn/ui config
├── eslint.config.mjs               # ESLint config
├── next.config.mjs                 # Next.js config
├── package.json                    # Project dependencies and scripts
├── postcss.config.js               # PostCSS config
├── README.md                       # README file
├── tailwind.config.js              # Tailwind CSS config
└── tsconfig.json                   # TypeScript config
```

## File Naming Conventions

The project follows consistent file naming conventions:

| File Type      | Example          | Style      |
| -------------- | ---------------- | ---------- |
| Component      | `LoginForm.tsx`  | PascalCase |
| Hook           | `useLogin.ts`    | camelCase  |
| Helper, Schema | `form-schema.ts` | kebab-case |
| Folder         | `login-form/`    | kebab-case |
| Constants      | `ALPHA_REGEX`    | SNAKE_CASE |

## Monitoring & Analytics

🚧 Don't forget to replace all FIXME tags with proper code before finalizing the changes.

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
2. Add your ID to `.env`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Contributors

- [@omergulcicek](https://github.com/omergulcicek)
