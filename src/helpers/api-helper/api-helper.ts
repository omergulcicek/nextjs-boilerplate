import axiosInstance from "@/helpers/api-helper/axios-instance"

import { ApiConfig, ApiResponseType } from "@/types"

type HttpMethod = "get" | "post" | "put" | "delete"

class ApiHelper {
	private async request<T>(
		method: HttpMethod,
		url: string,
		data?: unknown,
		config?: ApiConfig
	): Promise<ApiResponseType<T>> {
		try {
			const response = await axiosInstance[method]<T>(url, data, config)
			return response
		} catch (error) {
			throw this.handleError(error)
		}
	}

	async get<T>(url: string, config?: ApiConfig): Promise<ApiResponseType<T>> {
		return this.request<T>("get", url, undefined, config)
	}

	async post<T>(
		url: string,
		data?: unknown,
		config?: ApiConfig
	): Promise<ApiResponseType<T>> {
		return this.request<T>("post", url, data, config)
	}

	async put<T>(
		url: string,
		data?: unknown,
		config?: ApiConfig
	): Promise<ApiResponseType<T>> {
		return this.request<T>("put", url, data, config)
	}

	async delete<T>(
		url: string,
		config?: ApiConfig
	): Promise<ApiResponseType<T>> {
		return this.request<T>("delete", url, undefined, config)
	}

	private handleError(error: unknown): Error {
		if (error instanceof Error) {
			return error
		}
		return new Error("Bilinmeyen bir hata oluştu")
	}
}

export const apiHelper = new ApiHelper()
