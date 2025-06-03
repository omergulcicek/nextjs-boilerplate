import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import { FormData } from "@/types"

import { createFormSchema, FormErrorMessages } from "@/schemas"

export function useFormState(errorMessages: FormErrorMessages) {
	return useForm<FormData>({
		resolver: zodResolver(createFormSchema(errorMessages)),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			phone: "",
			tckn: "",
			details: "",
			cardNumber: "",
			expiryDate: "",
			cvv: "",
			url: ""
		},
		mode: "onChange"
	})
}
