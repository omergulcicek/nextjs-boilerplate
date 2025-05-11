"use client"

import { useHookFormMask } from "use-mask-input"

import { FormFieldProps } from "@/types"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

export function PhoneInput({
	control,
	register,
	name,
	label = "",
	placeholder = ""
}: FormFieldProps) {
	const registerWithMask = useHookFormMask(register)

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							type="tel"
							placeholder={placeholder}
							{...field}
							{...registerWithMask(name, "(999) 999 99 99", {
								showMaskOnFocus: false,
								showMaskOnHover: false
							})}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
