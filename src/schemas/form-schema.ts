import { NAME_REGEX, PHONE_REGEX } from "@/constants"
import { z } from "zod"

export const formSchema = z.object({
	name: z
		.string({ required_error: "Ad alanı zorunludur" })
		.min(2, "Ad en az 2 karakter olmalıdır")
		.regex(NAME_REGEX, "Sadece harf girebilirsiniz"),
	phone: z
		.string({ required_error: "Telefon alanı zorunludur" })
		.min(14, "Geçerli bir telefon numarası giriniz")
		.regex(
			PHONE_REGEX,
			"Telefon numarası 0(5xx) xxx xx xx formatında olmalıdır"
		)
})
