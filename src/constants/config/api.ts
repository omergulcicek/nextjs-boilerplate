import type {
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig
} from "axios"

export const API_CONFIG = {
	BASE_URL: process.env.NEXT_PUBLIC_API_URL,
	TIMEOUT: 10000,
	RETRY_COUNT: 3,
	RETRY_DELAY: 1000,
	CACHE_TIME: 5 * 60 * 1000 // 5 dakika
} as const

export type ApiConfig = keyof typeof API_CONFIG

export const setupInterceptors = (instance: AxiosInstance) => {
	// Request interceptor
	instance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			const token = localStorage.getItem("token")
			if (token) {
				config.headers.set("Authorization", `Bearer ${token}`)
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	// Response interceptor
	instance.interceptors.response.use(
		(response: AxiosResponse) => {
			return response
		},
		(error) => {
			if (error.response?.status === 401) {
			}
			return Promise.reject(error)
		}
	)
}
