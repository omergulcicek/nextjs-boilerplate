export const APP_CONFIG = {
	GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || "/",
	JSON_PLACEHOLDER_URL: process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL,
	GA_ID: process.env.NEXT_PUBLIC_GA_ID,
	SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
	API_TIMEOUT: 10000,
	APP_NAME: "NextJS Boilerplate",
	APP_VERSION: "1.0.0",
	DEFAULT_LANGUAGE: "tr",
	DEFAULT_THEME: "light",
	SITE_URL: process.env.NEXT_PUBLIC_APP_URL || "",
	APP_DESCRIPTION:
		"Modern Next.js 15 boilerplate with TypeScript & Tailwind CSS",
	APP_KEYWORDS: [
		"nextjs",
		"typescript",
		"tailwind",
		"boilerplate",
		"react"
	] as string[],
	CREATOR: "@omergulcicek",
	TWITTER_HANDLE: "@omergulcicek",
	PERSONAL_WEBSITE: "https://omergulcicek.com"
} as const

export type AppConfig = keyof typeof APP_CONFIG

export const CURRENCY_CONFIG = {
	TRY: {
		locale: "tr-TR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	USD: {
		locale: "en-US",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	EUR: {
		locale: "de-DE",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}
} as const

export const DEFAULT_CURRENCY = "TRY" as const
export type CurrencyCode = keyof typeof CURRENCY_CONFIG
