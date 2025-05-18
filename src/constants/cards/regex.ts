export const CARD_REGEX = {
	MASTERCARD:
		/^(5[1-5][0-9]{14}|2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12})$/,
	VISA: /^4[0-9]{12}(?:[0-9]{3})?$/
} as const

export type CardType = keyof typeof CARD_REGEX
