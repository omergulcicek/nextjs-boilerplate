export const HTTP_METHODS = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH"
} as const

export type HttpMethod = keyof typeof HTTP_METHODS
