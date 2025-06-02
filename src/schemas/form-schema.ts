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

export const formSchema = z.object({
	name: z
		.string()
		.regex(new RegExp(`^${ALPHA_REGEX.source}*$`), "Only letters are allowed")
		.min(3, "Name must be at least 3 characters"),
	details: z.string().min(3, "Username must be at least 3 characters"),
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
	phone: z.string().regex(PHONE_REGEX, "Please enter a valid phone number"),
	tckn: z
		.string()
		.regex(TCKN_REGEX, "TCKN must be 11 digits")
		.refine((val) => validateTCKN(val), {
			message: "Invalid TCKN"
		}),
	cardNumber: z
		.string()
		.regex(CARD_REGEX, "Credit card must be 16 digits")
		.refine((val) => validateCreditCard(val), {
			message: "Invalid credit card"
		}),
	cvv: z.string().regex(CVV_REGEX, "CVV must be 3 digits"),
	expiryDate: z
		.string()
		.regex(EXPIRY_DATE_REGEX, "Please enter a valid expiry date (MM/YY)")
		.refine((val) => validateExpiryDate(val), {
			message: "Your card has expired"
		}),
	url: z.string().regex(URL_REGEX, "Please enter a valid URL")
})
