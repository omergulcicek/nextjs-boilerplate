import { Control, UseFormRegister } from "react-hook-form"

import { z } from "zod"

import { createFormSchema } from "@/schemas"

export type FormData = z.infer<ReturnType<typeof createFormSchema>>

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
