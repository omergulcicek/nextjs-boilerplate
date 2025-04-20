export const JSON_PLACEHOLDER_URL = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL

export const API_TIMEOUT = 10000

export const CONTENT_TYPES = {
	json: "application/json",
	formUrlEncoded: "application/x-www-form-urlencoded",
	formData: "multipart/form-data",
	text: "text/plain",
	html: "text/html",
	xml: "application/xml"
} as const

export const NAME_REGEX = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/
export const PHONE_REGEX = /^0\(5\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/
