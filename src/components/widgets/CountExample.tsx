"use client"

import { useTranslations } from "next-intl"

import { ChevronDown, ChevronUp } from "lucide-react"

import { useCountStore } from "@/stores/count-store"

import { Button } from "@/ui"

export function CountExample() {
	const { decrease, increase, reset } = useCountStore()
	const t = useTranslations("Appearance")

	return (
		<div className="flex gap-2 items-center">
			<Button
				variant="secondary"
				size="icon"
				onClick={decrease}
				aria-label="Decrease"
			>
				<ChevronDown />
			</Button>

			<Button variant="secondary" size="sm" onClick={reset}>
				{t("reset")}
			</Button>

			<Button
				variant="secondary"
				size="icon"
				onClick={increase}
				aria-label="Increase"
			>
				<ChevronUp />
			</Button>
		</div>
	)
}
