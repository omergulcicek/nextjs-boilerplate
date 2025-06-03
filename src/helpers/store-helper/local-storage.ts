type StorageValue<T> = T | null

export const localStorageHelper = {
	set: <T>(key: string, value: T): void => {
		if (typeof window === "undefined") return
		localStorage.setItem(key, JSON.stringify(value))
	},

	get: <T>(key: string): StorageValue<T> => {
		if (typeof window === "undefined") return null
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : null
	},

	remove: (key: string): void => {
		if (typeof window === "undefined") return
		localStorage.removeItem(key)
	},

	clear: (): void => {
		if (typeof window === "undefined") return
		localStorage.clear()
	}
}
