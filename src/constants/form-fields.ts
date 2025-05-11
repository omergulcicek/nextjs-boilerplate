import {
	AlphaInput,
	EmailInput,
	PasswordInput,
	PhoneInput,
	TCKNInput,
	TextInput
} from "@/components/forms"

export const FORM_FIELDS = [
	{
		name: "name",
		label: "Adınız",
		placeholder: "Sadece harf",
		Component: AlphaInput
	},
	{
		name: "details",
		label: "Detaylı bilgi",
		placeholder: "Harf, sayı, özel karakter",
		Component: TextInput
	},
	{
		name: "email",
		label: "Email Adresi",
		placeholder: "Email formatı",
		Component: EmailInput
	},
	{
		name: "password",
		label: "Şifre",
		placeholder: "",
		Component: PasswordInput
	},
	{
		name: "phone",
		label: "Telefon Numarası",
		placeholder: "10 haneli",
		Component: PhoneInput
	},
	{
		name: "tckn",
		label: "Kimlik Numarası",
		placeholder: "11 haneli ve TCKN formatı",
		Component: TCKNInput
	}
] as const
