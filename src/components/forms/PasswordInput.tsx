"use client"

import { FormFieldProps } from "@/types"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

export function PasswordInput({
	control,
	register,
	name,
	label = "",
	placeholder = ""
}: FormFieldProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							type="password"
							placeholder={placeholder}
							{...field}
							{...register(name)}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
