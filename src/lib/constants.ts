export const baseUrl =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

export const CONTENT_TYPES = {
	JSON: "application/json",
	FORM_URLENCODED: "application/x-www-form-urlencoded",
	FORM_DATA: "multipart/form-data",
	TEXT: "text/plain",
	HTML: "text/html",
	XML: "application/xml"
} as const

export const DEFAULT_CONTENT_TYPE = CONTENT_TYPES.JSON
