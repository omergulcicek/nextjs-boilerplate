"use client"

import { useLocale } from "next-intl"
import { useParams } from "next/navigation"

import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { Globe } from "lucide-react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/ui"

export function LanguageSelector() {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()
	const locale = useLocale()

	return (
		<div className="flex items-center gap-2">
			<Globe className="w-4 h-4 text-muted-foreground" />
			<Select
				defaultValue={locale}
				onValueChange={(value: string) => {
					router.replace(
						// @ts-expect-error -- TypeScript will validate that only known `params`
						{ pathname, params },
						{ locale: value }
					)
				}}
			>
				<SelectTrigger className="w-24">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{routing.locales.map((cur) => (
						<SelectItem key={cur} value={cur}>
							{cur === "tr" ? "Türkçe" : "English"}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
