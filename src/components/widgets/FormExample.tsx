"use client"

import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import { useTranslations } from "next-intl"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { useFormFields } from "@omergulcicek/forms"
import { createFormSchema, FormErrorMessages } from "@/schemas"

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from "@/ui"

export function FormExample() {
	const t = useTranslations("FormExample")

	const errorMessages: FormErrorMessages = {
		nameOnlyLetters: t("errors.nameOnlyLetters"),
		nameMin: t("errors.nameMin"),
		detailsMin: t("errors.detailsMin"),
		email: t("errors.email"),
		passwordMin: t("errors.passwordMin"),
		phone: t("errors.phone"),
		tcknDigits: t("errors.tcknDigits"),
		tcknInvalid: t("errors.tcknInvalid"),
		cardNumberDigits: t("errors.cardNumberDigits"),
		cardNumberInvalid: t("errors.cardNumberInvalid"),
		cvv: t("errors.cvv"),
		expiryDate: t("errors.expiryDate"),
		url: t("errors.url")
	}

	const formSchema = createFormSchema(errorMessages)
	type FormData = z.infer<typeof formSchema>

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			alpha: "",
			email: "",
			password: "",
			phone: "",
			tckn: "",
			text: "",
			cardNumber: "",
			expiryDate: "",
			cvv: "",
			url: ""
		},
		mode: "onChange"
	})
	const registerWithMask = useHookFormMask(form.register)

	const { alpha, email, password, phone, tckn, text, cardNumber, expiryDate, cvv, url } = useFormFields({
		fields: [
			{ name: "alpha", type: "alpha" },
			{ name: "email", type: "email" },
			{ name: "password", type: "password" },
			{ name: "phone", type: "phone" },
			{ name: "tckn", type: "tckn" },
			{ name: "text", type: "text" },
			{ name: "cardNumber", type: "cardNumber" },
			{ name: "expiryDate", type: "expiryDate" },
			{ name: "cvv", type: "cvv" },
			{ name: "url", type: "url" }
		],
		registerWithMask,
		register: form.register
	})

	function onSubmit(data: FormData) {
		console.log(data)
	}

	return (
		<section className="flex flex-col gap-4 p-4 rounded-lg border">
			<h2 className="text-xl font-medium">{t("title")}</h2>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="alpha"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("name")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("namePlaceholder")}
										{...field}
										{...alpha}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("email")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("emailPlaceholder")}
										{...field}
										{...email}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("password")}</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder=""
										{...field}
										{...password}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("phone")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("phonePlaceholder")}
										{...field}
										{...phone}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tckn"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("tckn")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("tcknPlaceholder")}
										{...field}
										{...tckn}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="text"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("details")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("detailsPlaceholder")}
										{...field}
										{...text}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cardNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("cardNumber")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("cardNumberPlaceholder")}
										{...field}
										{...cardNumber}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-2 gap-4 items-start">
						<FormField
							control={form.control}
							name="expiryDate"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("expiryDate")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("expiryDatePlaceholder")}
											{...field}
											{...expiryDate}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="cvv"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("cvv")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("cvvPlaceholder")}
											{...field}
											{...cvv}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="url"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("url")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("urlPlaceholder")}
										{...field}
										{...url}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button 
						type="submit" 
						className="w-full"
						disabled={!form.formState.isValid}
					>
						{t("signIn")}
					</Button>
				</form>
			</Form>
		</section>
	)
}
