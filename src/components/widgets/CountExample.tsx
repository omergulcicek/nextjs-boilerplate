"use client"

import { ChevronDown, ChevronUp } from "lucide-react"

import { useCountStore } from "@/stores/count-store"

import { Button } from "@/ui"

export function CountExample() {
	const { count, decrease, increase } = useCountStore()

	return (
		<div className="flex gap-4 items-center">
			<Button variant="secondary" size="icon" onClick={decrease}>
				<ChevronDown />
			</Button>

			<div className="text-lg text-center min-w-5">{count}</div>

			<Button variant="secondary" size="icon" onClick={increase}>
				<ChevronUp />
			</Button>
		</div>
	)
}
