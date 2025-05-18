export const CONTENT_TYPES = {
	json: "application/json",
	formUrlEncoded: "application/x-www-form-urlencoded",
	formData: "multipart/form-data",
	text: "text/plain",
	html: "text/html",
	xml: "application/xml"
} as const

export type ContentType = keyof typeof CONTENT_TYPES
