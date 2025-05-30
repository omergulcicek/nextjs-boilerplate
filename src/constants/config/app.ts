export const APP_CONFIG = {
	GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || "/",
	JSON_PLACEHOLDER_URL: process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL,
	API_TIMEOUT: 10000,
	APP_NAME: "NextJS Boilerplate",
	APP_VERSION: "1.0.0",
	DEFAULT_LANGUAGE: "tr",
	DEFAULT_THEME: "light"
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
