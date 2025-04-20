"use client"

import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
	name: z
		.string()
		.min(2, "Ad en az 2 karakter olmalıdır")
		.regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, "Sadece harf girebilirsiniz"),
	phone: z
		.string()
		.min(14, "Geçerli bir telefon numarası giriniz")
		.regex(
			/^05[0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9]\s[0-9][0-9]$/,
			"Telefon numarası 05xx xxx xx xx formatında olmalıdır"
		)
})

type FormData = z.infer<typeof formSchema>

export function FormExample() {
	const {
		register,
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
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700"
				>
					Ad
				</label>
				<input
					id="name"
					{...register("name")}
					className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
				{errors.name && (
					<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="phone"
					className="block text-sm font-medium text-gray-700"
				>
					Telefon
				</label>
				<Controller
					name="phone"
					control={control}
					render={({ field }) => (
						<IMaskInput
							id="phone"
							mask="0000 000 00 00"
							{...field}
							className="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					)}
				/>
				{errors.phone && (
					<p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
				)}
			</div>

			<button
				type="submit"
				className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Gönder
			</button>
		</form>
	)
}
