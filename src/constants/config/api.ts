export const API_CONFIG = {
	BASE_URL: process.env.NEXT_PUBLIC_API_URL,
	TIMEOUT: 10000,
	RETRY_COUNT: 3,
	RETRY_DELAY: 1000,
	CACHE_TIME: 5 * 60 * 1000 // 5 dakika
} as const

export type ApiConfig = keyof typeof API_CONFIG
