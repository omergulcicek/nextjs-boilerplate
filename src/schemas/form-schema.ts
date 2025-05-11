import { z } from "zod"

export const formSchema = z.object({
	username: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalıdır"),
	email: z.string().email("Geçerli bir email adresi giriniz"),
	password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
	phone: z.string().regex(/^\d{10}$/, "Geçerli bir telefon numarası giriniz")
})
