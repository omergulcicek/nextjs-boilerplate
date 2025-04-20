import { API_TIMEOUT, CONTENT_TYPES, JSON_PLACEHOLDER_URL } from "@/constants"
import axios from "axios"

const axiosInstance = axios.create({
	baseURL: JSON_PLACEHOLDER_URL,
	timeout: API_TIMEOUT,
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
