"use client"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"

import { formSchema } from "@/schemas"

import { PasswordInput } from "@/components/forms/PasswordInput"
import { PhoneInput } from "@/components/forms/PhoneInput"
import { UsernameInput } from "@/components/forms/UsernameInput"
import { Button, Form } from "@/ui"

type FormData = z.infer<typeof formSchema>

export function FormExample() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
			phone: ""
		}
	})

	function onSubmit(data: FormData) {
		toast.success("Form başarıyla gönderildi", {
			description: `Kullanıcı adı: ${data.username}`
		})
	}

	return (
		<section className="max-w-xs">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<UsernameInput
						control={form.control}
						name="username"
						placeholder="Kullanıcı adınızı giriniz"
						label="Kullanıcı Adı"
					/>
					<PasswordInput
						control={form.control}
						name="password"
						placeholder="Şifrenizi giriniz"
						label="Şifre"
					/>
					<PhoneInput
						control={form.control}
						name="phone"
						placeholder="Telefon numaranızı giriniz"
						label="Telefon Numarası"
					/>
					<Button type="submit">Giriş Yap</Button>
				</form>
			</Form>
		</section>
	)
}
