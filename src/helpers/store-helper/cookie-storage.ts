import {
	deleteCookie,
	getCookie,
	getCookies,
	hasCookie,
	setCookie
} from "cookies-next"

type CookieOptions = {
	maxAge?: number
	expires?: Date
	path?: string
	domain?: string
	secure?: boolean
	httpOnly?: boolean
	sameSite?: "strict" | "lax" | "none"
}

export const cookieStorageHelper = {
	set: (key: string, value: string, options: CookieOptions = {}): void => {
		setCookie(key, value, options)
	},

	get: (key: string): string | null => {
		return getCookie(key) as string | null
	},

	getAll: (): Record<string, string> => {
		return getCookies() as Record<string, string>
	},

	has: (key: string): boolean => {
		return hasCookie(key) as boolean
	},

	remove: (key: string, options: CookieOptions = {}): void => {
		deleteCookie(key, options)
	}
}
