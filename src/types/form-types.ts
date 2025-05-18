import { Control, UseFormRegister } from "react-hook-form"

import { z } from "zod"

import { formSchema } from "@/schemas"

export type FormData = z.infer<typeof formSchema>

export interface FormFieldProps {
	control: Control<FormData>
	register: UseFormRegister<FormData>
	name: keyof FormData
	placeholder?: string
	label?: string
	required?: boolean
	disabled?: boolean
	showCardIcon?: boolean
}
