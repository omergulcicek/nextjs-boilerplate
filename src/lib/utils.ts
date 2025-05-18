import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const validateTCKN = (tckn: string): boolean => {
	if (tckn.length !== 11) return false

	if (tckn[0] === "0") return false
	if (!/^\d{11}$/.test(tckn)) return false

	let sum1 = 0
	let sum2 = 0
	for (let i = 0; i < 9; i++) {
		if (i % 2 === 0) sum1 += parseInt(tckn[i])
		else sum2 += parseInt(tckn[i])
	}

	const check1 = (sum1 * 7 - sum2) % 10
	const check2 = (sum1 + sum2 + check1) % 10

	return parseInt(tckn[9]) === check1 && parseInt(tckn[10]) === check2
}

export function validateCreditCard(cardNumber: string) {
	const regexPattern = {
		MASTERCARD:
			/^(5[1-5][0-9]{14}|2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12})$/,
		VISA: /^4[0-9]{12}(?:[0-9]{3})?$/
	}

	for (const card in regexPattern) {
		if (
			cardNumber
				.replace(/[^\d]/g, "")
				.match(regexPattern[card as keyof typeof regexPattern])
		) {
			console.clear()
			console.log(`Kart tipi: ${card}`)

			if (cardNumber) {
				return cardNumber &&
					/^[1-6]{1}[0-9]{14,15}$/i.test(
						cardNumber.replace(/[^\d]/g, "").trim()
					)
					? true
					: false
			}
		}
	}
	return false
}
