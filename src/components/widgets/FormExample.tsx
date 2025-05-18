"use client"

import { FormData } from "@/types"

import { useFormState } from "@/hooks"

import {
	AlphaInput,
	CreditCardInput,
	EmailInput,
	PasswordInput,
	PhoneInput,
	TCKNInput,
	TextInput,
	URLInput
} from "@/components/forms"
import { Button, Form } from "@/ui"

export function FormExample() {
	const form = useFormState()

	function onSubmit(data: FormData) {
		console.log(data)
	}

	return (
		<section className="max-w-xs">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<AlphaInput
						control={form.control}
						register={form.register}
						name="name"
						label="Adınız"
						placeholder="Sadece harf"
					/>

					<EmailInput
						control={form.control}
						register={form.register}
						name="email"
						label="Email adresi"
						placeholder="Email formatı"
					/>

					<PasswordInput
						control={form.control}
						register={form.register}
						name="password"
						label="Şifre"
						placeholder=""
					/>

					<PhoneInput
						control={form.control}
						register={form.register}
						name="phone"
						label="Telefon numarası"
						placeholder="(555) 555 55 55"
					/>

					<TCKNInput
						control={form.control}
						register={form.register}
						name="tckn"
						label="Kimlik numarası"
						placeholder="11 haneli ve TCKN formatı"
					/>

					<TextInput
						control={form.control}
						register={form.register}
						name="details"
						label="Detaylı bilgi"
						placeholder="Harf, sayı, özel karakter"
					/>

					<CreditCardInput
						control={form.control}
						register={form.register}
						name="cardNumber"
						label="Kredi kartı numarası"
						placeholder="16 haneli ve kredi kartı formatı"
						showCardIcon
					/>

					<URLInput
						control={form.control}
						register={form.register}
						name="url"
						label="URL"
						placeholder="https://www.google.com"
					/>

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className="w-full"
					>
						Giriş Yap
					</Button>
				</form>
			</Form>
		</section>
	)
}
