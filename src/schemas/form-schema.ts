import { z } from "zod"

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
	url: string
}

export function createFormSchema(messages: FormErrorMessages) {
	return z.object({
		alpha: z
			.string()
			.min(2, messages.nameMin)
			.regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, messages.nameOnlyLetters),
		email: z.string().email(messages.email),
		password: z.string().min(6, messages.passwordMin),
		phone: z.string().min(10, messages.phone),
		tckn: z
			.string()
			.length(11, messages.tcknDigits)
			.regex(/^\d{11}$/, messages.tcknInvalid),
		text: z.string().min(3, messages.detailsMin),
		cardNumber: z
			.string()
			.length(16, messages.cardNumberDigits)
			.regex(/^\d{16}$/, messages.cardNumberInvalid),
		expiryDate: z
			.string()
			.length(4, messages.expiryDate)
			.regex(/^(0[1-9]|1[0-2])\d{2}$/, messages.expiryDate),
		cvv: z
			.string()
			.length(3, messages.cvv)
			.regex(/^\d{3}$/, messages.cvv),
		url: z.string().url(messages.url)
	})
}
