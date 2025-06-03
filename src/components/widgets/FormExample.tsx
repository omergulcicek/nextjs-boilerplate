"use client"

import { useTranslations } from "next-intl"

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
	const t = useTranslations("FormExample")
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
			<h2 className="text-xl font-medium">{t("title")}</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<AlphaInput
						control={form.control}
						register={form.register}
						name="name"
						label={t("name")}
						placeholder={t("namePlaceholder")}
					/>

					<EmailInput
						control={form.control}
						register={form.register}
						name="email"
						label={t("email")}
						placeholder={t("emailPlaceholder")}
					/>

					<PasswordInput
						control={form.control}
						register={form.register}
						name="password"
						label={t("password")}
						placeholder=""
					/>

					<PhoneInput
						control={form.control}
						register={form.register}
						name="phone"
						label={t("phone")}
						placeholder={t("phonePlaceholder")}
					/>

					<TCKNInput
						control={form.control}
						register={form.register}
						name="tckn"
						label={t("tckn")}
						placeholder={t("tcknPlaceholder")}
					/>

					<TextInput
						control={form.control}
						register={form.register}
						name="details"
						label={t("details")}
						placeholder={t("detailsPlaceholder")}
					/>

					<CreditCardInput
						control={form.control}
						register={form.register}
						name="cardNumber"
						label={t("cardNumber")}
						placeholder={t("cardNumberPlaceholder")}
						showCardIcon
					/>

					<div className="grid grid-cols-2 gap-4 items-start">
						<ExpiryDateInput
							control={form.control}
							register={form.register}
							name="expiryDate"
							label={t("expiryDate")}
							placeholder={t("expiryDatePlaceholder")}
						/>

						<CVVInput
							control={form.control}
							register={form.register}
							name="cvv"
							label={t("cvv")}
							placeholder={t("cvvPlaceholder")}
						/>
					</div>

					<URLInput
						control={form.control}
						register={form.register}
						name="url"
						label={t("url")}
						placeholder={t("urlPlaceholder")}
					/>

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className="w-full"
					>
						{t("signIn")}
					</Button>
				</form>
			</Form>
		</section>
	)
}
