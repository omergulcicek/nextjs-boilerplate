"use client"

import { Control } from "react-hook-form"

import { z } from "zod"

import { formSchema } from "@/schemas"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

type FormData = z.infer<typeof formSchema>

interface PhoneInputProps {
	control: Control<FormData>
	name: keyof FormData
	placeholder: string
	label?: string
}

export function PhoneInput({
	control,
	name,
	label = "",
	placeholder = ""
}: PhoneInputProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input type="tel" placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
