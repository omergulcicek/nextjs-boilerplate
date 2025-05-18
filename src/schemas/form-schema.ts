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
		.regex(new RegExp(`^${ALPHA_REGEX.source}*$`), "Sadece harf girebilirsiniz")
		.min(3, "Adınız en az 3 karakter olmalıdır"),
	details: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalıdır"),
	email: z.string().email("Geçerli bir email adresi giriniz"),
	password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
	phone: z.string().regex(PHONE_REGEX, "Geçerli bir telefon numarası giriniz"),
	tckn: z
		.string()
		.regex(TCKN_REGEX, "TCKN 11 haneli olmalıdır")
		.refine((val) => validateTCKN(val), {
			message: "Geçersiz TCKN"
		}),
	cardNumber: z
		.string()
		.regex(CARD_REGEX, "Kredi Kartı 16 haneli olmalıdır")
		.refine((val) => validateCreditCard(val), {
			message: "Geçersiz Kredi Kartı"
		}),
	cvv: z.string().regex(CVV_REGEX, "CVV 3 haneli olmalıdır"),
	expiryDate: z
		.string()
		.regex(EXPIRY_DATE_REGEX, "Geçerli bir son kullanım tarihi giriniz (AA/YY)")
		.refine((val) => validateExpiryDate(val), {
			message: "Kartınızın son kullanım tarihi geçmiş"
		}),
	url: z.string().regex(URL_REGEX, "Geçerli bir URL giriniz")
})
