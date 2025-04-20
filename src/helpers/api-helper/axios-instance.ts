import { apiTimeout, contentTypes, jsonPlaceholderUrl } from "@/constants"
import axios from "axios"

const axiosInstance = axios.create({
	baseURL: jsonPlaceholderUrl,
	timeout: apiTimeout,
	headers: {
		"Content-Type": contentTypes.json
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
