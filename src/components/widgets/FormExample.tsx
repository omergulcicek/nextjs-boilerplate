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
	TextInput
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
						label="Email Adresi"
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
						label="Telefon Numarası"
						placeholder="10 haneli"
					/>

					<TCKNInput
						control={form.control}
						register={form.register}
						name="tckn"
						label="Kimlik Numarası"
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
						name="creditCard"
						label="Kredi Kartı Numarası"
						placeholder="16 haneli ve Kredi Kartı formatı"
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
