import {
	EmailInput,
	PasswordInput,
	PhoneInput,
	TCKNInput,
	UsernameInput
} from "@/components/forms"

export const FORM_FIELDS = [
	{
		name: "username",
		label: "Kullanıcı Adı",
		placeholder: "Kullanıcı adınızı giriniz",
		Component: UsernameInput
	},
	{
		name: "email",
		label: "Email Adresi",
		placeholder: "Email adresinizi giriniz",
		Component: EmailInput
	},
	{
		name: "password",
		label: "Şifre",
		placeholder: "Şifrenizi giriniz",
		Component: PasswordInput
	},
	{
		name: "phone",
		label: "Telefon Numarası",
		placeholder: "Telefon numaranızı giriniz",
		Component: PhoneInput
	},
	{
		name: "tckn",
		label: "Kimlik Numarası",
		placeholder: "Kimlik Numaranızı giriniz",
		Component: TCKNInput
	}
] as const
