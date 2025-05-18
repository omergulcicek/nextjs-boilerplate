import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { CARD_TYPE_REGEX, DIGITS_ONLY_REGEX, type CardType } from "@/constants"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getCardType(cardNumber: string): CardType | null {
	const cleanNumber = cardNumber.replace(DIGITS_ONLY_REGEX, "")

	for (const [type, regex] of Object.entries(CARD_TYPE_REGEX)) {
		if (regex.test(cleanNumber)) {
			return type as CardType
		}
	}

	return null
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

export function validateCreditCard(cardNumber: string): boolean {
	const cardType = getCardType(cardNumber)

	if (!cardType) return false

	const cleanNumber = cardNumber.replace(/[^\d]/g, "").trim()
	return /^[1-6]{1}[0-9]{14,15}$/i.test(cleanNumber)
}
