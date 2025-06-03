"use client"

import { FormData, FormFieldProps } from "@/types"
import { ALPHA_REGEX } from "@/constants"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

export function AlphaInput({
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
							type="text"
							placeholder={placeholder}
							onKeyDown={(e) => {
								if (!ALPHA_REGEX.test(e.key)) {
									e.preventDefault()
								}
							}}
							{...field}
							{...register(name as keyof FormData)}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
