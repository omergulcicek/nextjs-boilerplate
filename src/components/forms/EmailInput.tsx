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

export function EmailInput({
	control,
	register,
	name,
	label = "",
	placeholder = "",
	required = false
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
							type="email"
							placeholder={placeholder}
							required={required}
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
