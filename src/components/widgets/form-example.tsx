"use client"

import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { NAME_REGEX, PHONE_REGEX } from "@/lib/constants"

import { Button, Label } from "@/ui"

const formSchema = z.object({
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

type FormData = z.infer<typeof formSchema>

export function FormExample() {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(formSchema)
	})

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<section className="max-w-sm">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="name">Ad</Label>
					<Controller
						name="name"
						control={control}
						render={({ field: { ref, ...field } }) => (
							<IMaskInput
								mask={NAME_REGEX}
								placeholder="Adınızı giriniz"
								{...field}
								inputRef={ref}
								className="flex px-3 py-2 w-full h-10 text-sm rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							/>
						)}
					/>
					{errors.name && (
						<p className="text-sm text-red-500">{errors.name.message}</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone">Telefon Numarası</Label>
					<Controller
						name="phone"
						control={control}
						render={({ field: { ref, ...field } }) => (
							<IMaskInput
								type="tel"
								placeholder="0(5**) *** ****"
								mask="f(5d0) 000 00 00"
								definitions={{
									f: /[0]/,
									"5": /[5]/,
									d: /[0-9]/
								}}
								{...field}
								inputRef={ref}
								className="flex px-3 py-2 w-full h-10 text-sm rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							/>
						)}
					/>
					{errors.phone && (
						<p className="text-sm text-red-500">{errors.phone.message}</p>
					)}
				</div>

				<Button type="submit" className="w-full">
					Gönder
				</Button>
			</form>
		</section>
	)
}
