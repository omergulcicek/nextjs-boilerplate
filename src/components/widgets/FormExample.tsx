"use client"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import { FormData } from "@/types"

import { formSchema } from "@/schemas"

import { EmailInput } from "@/components/forms/EmailInput"
import { PasswordInput } from "@/components/forms/PasswordInput"
import { PhoneInput } from "@/components/forms/PhoneInput"
import { TCKNInput } from "@/components/forms/TCKNInput"
import { UsernameInput } from "@/components/forms/UsernameInput"
import { Button, Form } from "@/ui"

export function FormExample() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			phone: "",
			tckn: ""
		},
		mode: "onChange"
	})

	function onSubmit(data: FormData) {
		console.log(data)
	}

	return (
		<section className="max-w-xs">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<UsernameInput
						control={form.control}
						register={form.register}
						name="username"
						placeholder="Kullanıcı adınızı giriniz"
						label="Kullanıcı Adı"
					/>
					<EmailInput
						control={form.control}
						register={form.register}
						name="email"
						placeholder="Email adresinizi giriniz"
						label="Email Adresi"
					/>
					<PasswordInput
						control={form.control}
						register={form.register}
						name="password"
						placeholder="Şifrenizi giriniz"
						label="Şifre"
					/>
					<PhoneInput
						control={form.control}
						register={form.register}
						name="phone"
						placeholder="Telefon numaranızı giriniz"
						label="Telefon Numarası"
					/>
					<TCKNInput
						control={form.control}
						register={form.register}
						name="tckn"
						placeholder="Kimlik Numaranızı giriniz"
						label="Kimlik Numarası"
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
