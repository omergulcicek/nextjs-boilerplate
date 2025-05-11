export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "/"
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

export const FORM_REGEX = {
	name: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/,
	phone: /^0\(5\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/
} as const
