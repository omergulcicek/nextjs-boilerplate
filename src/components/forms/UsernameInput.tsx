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

interface UsernameInputProps {
	control: Control<FormData>
	name: keyof FormData
	placeholder: string
	label?: string
}

export function UsernameInput({
	control,
	name,
	label = "",
	placeholder = ""
}: UsernameInputProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
