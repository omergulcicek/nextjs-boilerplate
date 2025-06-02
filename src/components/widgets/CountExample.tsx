"use client"

import { ChevronDown, ChevronUp } from "lucide-react"

import { useCountStore } from "@/stores/count-store"

import { Button } from "@/ui"

export function CountExample() {
	const { decrease, increase, reset } = useCountStore()

	return (
		<div className="flex gap-2 items-center">
			<Button variant="secondary" size="icon" onClick={decrease}>
				<ChevronDown />
			</Button>

			<Button variant="secondary" size="sm" onClick={reset}>
				Reset
			</Button>

			<Button variant="secondary" size="icon" onClick={increase}>
				<ChevronUp />
			</Button>
		</div>
	)
}
