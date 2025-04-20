export const baseUrl = process.env.NEXT_PUBLIC_API_URL
export const jsonPlaceholderUrl = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL

export const CONTENT_TYPES = {
	JSON: "application/json",
	FORM_URLENCODED: "application/x-www-form-urlencoded",
	FORM_DATA: "multipart/form-data",
	TEXT: "text/plain",
	HTML: "text/html",
	XML: "application/xml"
} as const

export const DEFAULT_CONTENT_TYPE = CONTENT_TYPES.JSON
