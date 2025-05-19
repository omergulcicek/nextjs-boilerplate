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

export function CVVInput({
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
							maxLength={3}
							value={field.value || ""}
							{...registerWithMask(name, "999", {
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
