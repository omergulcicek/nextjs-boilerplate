"use client"

import { FormData } from "@/types"
import { FORM_FIELDS } from "@/constants"

import { useFormState } from "@/hooks"

import { Button, Form } from "@/ui"

export function FormExample() {
	const form = useFormState()

	function onSubmit(data: FormData) {
		console.log(data)
	}

	return (
		<section className="max-w-xs">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					{FORM_FIELDS.map(({ Component, ...props }) => (
						<Component
							key={props.name}
							control={form.control}
							register={form.register}
							{...props}
						/>
					))}

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className="w-full"
					>
						Giriş Yap
					</Button>
				</form>
			</Form>
		</section>
	)
}
