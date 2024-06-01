import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function delay(ms = 1000) {
	return function (x: any) {
		return new Promise((resolve) => setTimeout(() => resolve(x), ms))
	}
}
