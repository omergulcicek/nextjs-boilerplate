import { z } from "zod"

import {
	ALPHA_REGEX,
	CARD_REGEX,
	CVV_REGEX,
	EXPIRY_DATE_REGEX,
	PHONE_REGEX,
	TCKN_REGEX,
	URL_REGEX
} from "@/constants"

import {
	validateCreditCard,
	validateExpiryDate,
	validateTCKN
} from "@/lib/utils"

export type FormErrorMessages = {
	nameOnlyLetters: string
	nameMin: string
	detailsMin: string
	email: string
	passwordMin: string
	phone: string
	tcknDigits: string
	tcknInvalid: string
	cardNumberDigits: string
	cardNumberInvalid: string
	cvv: string
	expiryDate: string
	expiryDateExpired: string
	url: string
}

export function createFormSchema(messages: FormErrorMessages) {
	return z.object({
		name: z
			.string()
			.regex(new RegExp(`^${ALPHA_REGEX.source}*$`), messages.nameOnlyLetters)
			.min(3, messages.nameMin),
		details: z.string().min(3, messages.detailsMin),
		email: z.string().email(messages.email),
		password: z.string().min(6, messages.passwordMin),
		phone: z.string().regex(PHONE_REGEX, messages.phone),
		tckn: z
			.string()
			.regex(TCKN_REGEX, messages.tcknDigits)
			.refine((val) => validateTCKN(val), {
				message: messages.tcknInvalid
			}),
		cardNumber: z
			.string()
			.regex(CARD_REGEX, messages.cardNumberDigits)
			.refine((val) => validateCreditCard(val), {
				message: messages.cardNumberInvalid
			}),
		cvv: z.string().regex(CVV_REGEX, messages.cvv),
		expiryDate: z
			.string()
			.regex(EXPIRY_DATE_REGEX, messages.expiryDate)
			.refine((val) => validateExpiryDate(val), {
				message: messages.expiryDateExpired
			}),
		url: z.string().regex(URL_REGEX, messages.url)
	})
}
