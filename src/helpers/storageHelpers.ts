// Local Storage
export const setLocal = (key: string, value: any): void => {
	localStorage.setItem(key, JSON.stringify(value))
}

export const getLocal = <T>(key: string): T | null => {
	const item = localStorage.getItem(key)
	return item ? JSON.parse(item) : null
}

export const removeLocal = (key: string): void => {
	localStorage.removeItem(key)
}

// Session Storage
export const setSession = (key: string, value: any): void => {
	sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSession = <T>(key: string): T | null => {
	const item = sessionStorage.getItem(key)
	return item ? JSON.parse(item) : null
}

export const removeSession = (key: string): void => {
	sessionStorage.removeItem(key)
}

// Cookies
export const setCookie = (key: string, value: any, days?: number): void => {
	let expires = ""
	if (days) {
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		expires = "; expires=" + date.toUTCString()
	}
	document.cookie = key + "=" + (value || "") + expires + "; path=/"
}

export const getCookie = (key: string): string | null => {
	const nameEQ = key + "="
	const cookies = document.cookie.split(";")
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i]
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1, cookie.length)
		}
		if (cookie.indexOf(nameEQ) === 0) {
			return cookie.substring(nameEQ.length, cookie.length)
		}
	}
	return null
}

export const removeCookie = (key: string): void => {
	document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
