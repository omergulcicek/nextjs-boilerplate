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
