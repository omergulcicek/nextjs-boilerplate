"use client"

import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { NAME_REGEX } from "@/constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"

import { formSchema } from "@/schemas"

import { Button, Label } from "@/ui"

type FormData = z.infer<typeof formSchema>

export function FormExample() {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: ""
		}
	})

	const onSubmit = (data: FormData) => {
		toast(data.name, {
			description: data.phone
		})
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
