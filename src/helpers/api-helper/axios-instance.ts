import axios from "axios"

import { API_CONFIG, CONTENT_TYPES } from "@/constants"
import { setupInterceptors } from "@/constants/config/api"

const axiosInstance = axios.create({
	baseURL: API_CONFIG.BASE_URL,
	timeout: API_CONFIG.TIMEOUT,
	headers: {
		"Content-Type": CONTENT_TYPES.json
	}
})

setupInterceptors(axiosInstance)

export default axiosInstance
