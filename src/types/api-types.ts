import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface ApiResponse<T> {
	data: T
	status: number
	message?: string
}

export interface ApiError {
	message: string
	status: number
	errors?: Record<string, string[]>
}

export type ApiConfig = AxiosRequestConfig

export type ApiResponseType<T> = AxiosResponse<T>
