import { clsx, type ClassValue } from "clsx"
import { format as dateFnsFormat, setDefaultOptions } from "date-fns"
import { enUS, tr } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

import {
	ACCENTS_REGEX,
	APP_CONFIG,
	CARD_TYPE_REGEX,
	CHAR_MAP,
	CURRENCY_CONFIG,
	DEFAULT_CURRENCY,
	DIGITS_ONLY_REGEX,
	EDGE_DASHES_REGEX,
	INVALID_CHARS_REGEX,
	MULTIPLE_DASHES_REGEX,
	TURKISH_CHARS_REGEX,
	WHITESPACE_REGEX,
	type CardType,
	type CurrencyCode
} from "@/constants"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const slugify = (text: string) => {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(ACCENTS_REGEX, "")
		.replace(TURKISH_CHARS_REGEX, (c) => CHAR_MAP[c as keyof typeof CHAR_MAP])
		.replace(WHITESPACE_REGEX, "-")
		.replace(INVALID_CHARS_REGEX, "")
		.replace(MULTIPLE_DASHES_REGEX, "-")
		.replace(EDGE_DASHES_REGEX, "")
}

export const formatDate = (
	date: Date,
	format = "d MMMM yyyy",
	locale: "tr" | "en" = APP_CONFIG.DEFAULT_LANGUAGE
) => {
	setDefaultOptions({ locale: locale === "tr" ? tr : enUS })
	return dateFnsFormat(date, format)
}

export const formatCurrency = (
	amount: number,
	currency: CurrencyCode = DEFAULT_CURRENCY
) => {
	const config = CURRENCY_CONFIG[currency]

	return new Intl.NumberFormat(config.locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: config.minimumFractionDigits,
		maximumFractionDigits: config.maximumFractionDigits
	}).format(amount)
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

export const validateExpiryDate = (value: string) => {
	const [month, year] = [value.slice(0, 2), value.slice(2)]
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear() % 100
	const currentMonth = currentDate.getMonth() + 1

	const expiryYear = parseInt(year)
	const expiryMonth = parseInt(month)

	if (expiryYear < currentYear) return false

	if (expiryYear === currentYear && expiryMonth < currentMonth) return false

	return true
}
