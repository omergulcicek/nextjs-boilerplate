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
