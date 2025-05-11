import { z } from "zod"

import { NAME_REGEX, PHONE_REGEX } from "@/constants"

export const formSchema = z.object({
	username: z.string().min(2, {
		message: "Kullanıcı adı en az 2 karakter olmalıdır."
	}),
	password: z.string().min(6, {
		message: "Şifre en az 6 karakter olmalıdır."
	}),
	phone: z.string().min(10, {
		message: "Telefon numarası en az 10 karakter olmalıdır."
	})
})
