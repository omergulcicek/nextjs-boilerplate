"use client"

import { useShallow } from "zustand/react/shallow"

import { Button } from "@/ui"
import { useCountStore } from "@/stores"

export function Store() {
	const [count, increaseCount, decreaseCount, removeAllCount] = useCountStore(
		useShallow((state) => [
			state.count,
			state.increaseCount,
			state.decreaseCount,
			state.removeAllCount
		])
	)

	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">Zustand State Managment</h2>

			<div className="flex flex-wrap gap-2">
				<Button variant="link" size="icon">
					{count}
				</Button>

				<Button variant="secondary" onClick={increaseCount}>
					Add count
				</Button>

				<Button variant="secondary" onClick={decreaseCount}>
					Subtracts count
				</Button>

				<Button variant="secondary" onClick={removeAllCount}>
					Remove all counts
				</Button>
			</div>
		</section>
	)
}
