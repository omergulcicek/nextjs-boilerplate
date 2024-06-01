# Next.js Boilerplate

An open source boilerplate built using **Next.js 14**, **TypeScript**, and **Tailwind CSS**

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
│   ├── components                  # React components
│   │   ├── features                # Containing logic operations
│   │   ├── shared                  # Header, footer, aside components
│   │   ├── skeletons               # Loading components
│   │   ├── ui                      # Atomic components
│   │   └── widgets                 # Advanced components
│   ├── config                      # Configuration files
│   ├── data                        # Static or mock data
│   ├── helpers                     # Helper functions
│   ├── hooks                       # React hooks
│   ├── lib                         # Utilities folder
│   ├── providers                   # All providers
│   ├── services                    # API services
│   ├── stores                      # Zustand stores
│   └── types                       # Type definitions
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── components.json                 # shadcn/ui configuration
├── next-sitemap.config.js          # next-sitemap configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.js               # PostCSS configuration
├── README.md                       # README file
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```
