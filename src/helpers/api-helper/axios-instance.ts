import axios from "axios"

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json"
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
