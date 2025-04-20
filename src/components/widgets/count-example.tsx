import { useCountStore } from "@/stores/count-store"

import { Button } from "../ui/button"

export function CountExample() {
	const { count, decrease, increase } = useCountStore()

	return (
		<div className="flex gap-4 items-center">
			<Button variant="secondary" onClick={decrease}>
				-
			</Button>
			<div>{count}</div>
			<Button variant="secondary" onClick={increase}>
				+
			</Button>
		</div>
	)
}
