import { z } from "zod"

export const formSchema = z.object({
	username: z.string().min(2, {
		message: "Kullanıcı adı en az 2 karakter olmalıdır."
	}),
	email: z.string().email({
		message: "Geçersiz email adresi."
	}),
	password: z.string().min(6, {
		message: "Şifre en az 6 karakter olmalıdır."
	}),
	phone: z.string().min(10, {
		message: "Telefon numarası en az 10 karakter olmalıdır."
	})
})
