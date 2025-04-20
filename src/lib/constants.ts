export const jsonPlaceholderUrl = process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL

export const apiTimeout = 10000

export const contentTypes = {
	json: "application/json",
	formUrlEncoded: "application/x-www-form-urlencoded",
	formData: "multipart/form-data",
	text: "text/plain",
	html: "text/html",
	xml: "application/xml"
} as const
