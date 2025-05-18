import { z } from "zod"

import { ALPHA_REGEX } from "@/constants"

import { validateCreditCard, validateTCKN, validateURL } from "@/lib/utils"

export const formSchema = z.object({
	name: z
		.string()
		.regex(new RegExp(`^${ALPHA_REGEX.source}*$`), "Sadece harf girebilirsiniz")
		.min(3, "Adınız en az 3 karakter olmalıdır"),
	details: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalıdır"),
	email: z.string().email("Geçerli bir email adresi giriniz"),
	password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
	phone: z.string().regex(/^\d{10}$/, "Geçerli bir telefon numarası giriniz"),
	tckn: z
		.string()
		.regex(/^\d{11}$/, "TCKN 11 haneli olmalıdır")
		.refine((val) => validateTCKN(val), {
			message: "Geçersiz TCKN"
		}),
	creditCard: z
		.string()
		.regex(/^\d{16}$/, "Kredi Kartı 16 haneli olmalıdır")
		.refine((val) => validateCreditCard(val), {
			message: "Geçersiz Kredi Kartı"
		}),
	url: z.string().refine((val) => validateURL(val), {
		message: "Geçersiz URL"
	})
})
