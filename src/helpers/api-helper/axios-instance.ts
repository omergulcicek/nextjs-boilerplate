import axios from "axios"

import { API_CONFIG, CONTENT_TYPES } from "@/constants"

const axiosInstance = axios.create({
	baseURL: API_CONFIG.BASE_URL,
	timeout: API_CONFIG.TIMEOUT,
	headers: {
		"Content-Type": CONTENT_TYPES.json
	}
})

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// Response interceptor
axiosInstance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default axiosInstance
