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

interface PasswordInputProps {
	control: Control<FormData>
	name: keyof FormData
	placeholder: string
	label?: string
}

export function PasswordInput({
	control,
	name,
	label = "",
	placeholder = ""
}: PasswordInputProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input type="password" placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
