"use client"

import { FormData } from "@/types"

import { useFormState } from "@/hooks"

import {
	AlphaInput,
	CreditCardInput,
	CVVInput,
	EmailInput,
	ExpiryDateInput,
	PasswordInput,
	PhoneInput,
	TCKNInput,
	TextInput,
	URLInput
} from "@/components/forms"
import { Button, Form } from "@/ui"

export function FormExample() {
	const form = useFormState()

	function onSubmit(data: FormData) {
		console.log({
			...data,
			expiryDate: null,
			expireMonth: data.expiryDate.slice(0, 2),
			expireYear: data.expiryDate.slice(2)
		})
	}

	return (
		<section className="flex flex-col gap-4 p-4 rounded-lg border">
			<h2 className="text-xl font-medium">Form Example</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<AlphaInput
						control={form.control}
						register={form.register}
						name="name"
						label="Your Name"
						placeholder="Letters only"
					/>

					<EmailInput
						control={form.control}
						register={form.register}
						name="email"
						label="Email Address"
						placeholder="Email format"
					/>

					<PasswordInput
						control={form.control}
						register={form.register}
						name="password"
						label="Password"
						placeholder=""
					/>

					<PhoneInput
						control={form.control}
						register={form.register}
						name="phone"
						label="Phone Number"
						placeholder="(555) 555 55 55"
					/>

					<TCKNInput
						control={form.control}
						register={form.register}
						name="tckn"
						label="ID Number"
						placeholder="11 digits and ID format"
					/>

					<TextInput
						control={form.control}
						register={form.register}
						name="details"
						label="Detailed Information"
						placeholder="Letters, numbers, special characters"
					/>

					<CreditCardInput
						control={form.control}
						register={form.register}
						name="cardNumber"
						label="Credit Card Number"
						placeholder="16 digits and card format"
						showCardIcon
					/>

					<div className="grid grid-cols-2 gap-4 items-start">
						<ExpiryDateInput
							control={form.control}
							register={form.register}
							name="expiryDate"
							label="Expiry Date"
							placeholder="MM/YY"
						/>

						<CVVInput
							control={form.control}
							register={form.register}
							name="cvv"
							label="CVV"
							placeholder="000"
						/>
					</div>

					<URLInput
						control={form.control}
						register={form.register}
						name="url"
						label="URL"
						placeholder="https://www.google.com"
					/>

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className="w-full"
					>
						Sign In
					</Button>
				</form>
			</Form>
		</section>
	)
}
