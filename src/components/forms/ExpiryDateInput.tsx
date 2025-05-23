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

export function ExpiryDateInput({
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
							maxLength={5}
							value={field.value || ""}
							{...registerWithMask(name, "99/99", {
								showMaskOnFocus: false,
								showMaskOnHover: false,
								autoUnmask: true,
								placeholder: ""
							})}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
