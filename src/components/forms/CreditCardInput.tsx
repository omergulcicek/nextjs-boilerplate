"use client"

import { useHookFormMask } from "use-mask-input"

import { FormFieldProps } from "@/types"
import { CARD_ICONS } from "@/constants/cards"

import { getCardType } from "@/lib/utils"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

export function CreditCardInput({
	control,
	register,
	name,
	label = "",
	placeholder = "",
	showCardIcon = true
}: FormFieldProps) {
	const registerWithMask = useHookFormMask(register)

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const cardType = field.value ? getCardType(field.value) : null
				const CardIcon = cardType ? CARD_ICONS[cardType] : null

				return (
					<FormItem>
						{label && <FormLabel>{label}</FormLabel>}
						<FormControl>
							<div className="relative">
								<Input
									type="tel"
									placeholder={placeholder}
									maxLength={19}
									{...field}
									{...registerWithMask(name, "9999 9999 9999 9999", {
										showMaskOnFocus: false,
										showMaskOnHover: false,
										autoUnmask: true,
										placeholder: ""
									})}
								/>
								{showCardIcon && CardIcon && (
									<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
										<CardIcon />
									</div>
								)}
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)
			}}
		/>
	)
}
