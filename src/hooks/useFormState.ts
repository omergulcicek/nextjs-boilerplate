import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import { FormData } from "@/types"

import { formSchema } from "@/schemas"

export function useFormState() {
	return useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			details: "",
			email: "",
			password: "",
			phone: "",
			tckn: "",
			cardNumber: "",
			url: ""
		},
		mode: "onChange"
	})
}
