"use client"

import { ChangeEvent, useTransition } from "react"
import { Locale, useLocale, useTranslations } from "next-intl"
import { useParams } from "next/navigation"

import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import clsx from "clsx"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/ui"

export default function LocaleSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()
	const locale = useLocale()
	const [isPending, startTransition] = useTransition()
	const t = useTranslations("LocaleSwitcher")

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value as Locale
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				{ pathname, params },
				{ locale: nextLocale }
			)
		})
	}

	return (
		<label>
			<p className="sr-only">{t("label")}</p>
			<Select
				defaultValue={locale}
				disabled={isPending}
				onValueChange={(value: string) => {
					onSelectChange({
						target: { value }
					} as ChangeEvent<HTMLSelectElement>)
				}}
			>
				<SelectTrigger
					className={clsx(
						"relative text-gray-400",
						isPending && "transition-opacity [&:disabled]:opacity-30"
					)}
				>
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					{routing.locales.map((cur) => (
						<SelectItem key={cur} value={cur}>
							{t("locale", { locale: cur })}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</label>
	)
}
