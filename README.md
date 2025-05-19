# Next.js Boilerplate

An open source boilerplate built using **Next.js 15.3**, **TypeScript**, and **Tailwind CSS**

## Features

With this template, you get all the awesomeness you need:

- Advanced Folder Structures
- [Next.js](https://nextjs.org/) with App Router support
- Type checking [TypeScript](https://www.typescriptlang.org/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
- State management with [Zustand](https://zustand-demo.pmnd.rs/)
- Authentication with [NextAuth.js](https://next-auth.js.org/)
- UI Components built with [shadcn/ui](https://ui.shadcn.com/)
- Data Fetching, Caching and Mutation with [TanStack Query](https://tanstack.com/query/latest)
- Linter with [ESLint](https://eslint.org/)
- Code Formatter with [Prettier](https://prettier.io/)
- Form handling with [React Hook Form](https://react-hook-form.com/)
- Validation library with [Zod](https://zod.dev/)
- [Storybook](https://storybook.js.org/) for UI development
- Beautiful and consistent icons from [Lucide](https://lucide.dev/)
- Loading UI using [Skeleton Components](https://ui.shadcn.com/docs/components/skeleton)
- Dark theme with [next-themes](https://npmjs.com/package/next-themes)
- [Absolute Imports](https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases) with `@` prefix
- [Husky](https://typicode.github.io/husky/) for Git Hooks
- Sitemap.xml and robots.txt with [next-sitemap](https://www.npmjs.com/package/next-sitemap)
- Metadata files optimized for SEO
- Storage helpers for Local, Session, Cookies
- 💯 Maximize lighthouse score

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
├── eslint.config.mjs                # ESLint config
├── next.config.mjs                  # Next.js config
├── postcss.config.js                # PostCSS config
├── README.md                       # README file
├── tailwind.config.js               # Tailwind CSS config
└── tsconfig.json                    # TypeScript config
```

## File Naming Conventions

The project follows consistent file naming conventions:

| File Type | Example | Style |
|------------|-------|------|
| Component | `LoginForm.tsx` | PascalCase |
| Hook | `useLogin.ts` | camelCase |
| Helper, Schema | `form-schema.ts` | kebab-case |
| Folder | `login-form/` | kebab-case |
| Folder | `ALPHA_REGEX` | SNAKE_CASE |
