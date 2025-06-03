type StorageValue<T> = T | null

export const sessionStorageHelper = {
	set: <T>(key: string, value: T): void => {
		if (typeof window === "undefined") return
		sessionStorage.setItem(key, JSON.stringify(value))
	},

	get: <T>(key: string): StorageValue<T> => {
		if (typeof window === "undefined") return null
		const item = sessionStorage.getItem(key)
		return item ? JSON.parse(item) : null
	},

	remove: (key: string): void => {
		if (typeof window === "undefined") return
		sessionStorage.removeItem(key)
	},

	clear: (): void => {
		if (typeof window === "undefined") return
		sessionStorage.clear()
	}
}
