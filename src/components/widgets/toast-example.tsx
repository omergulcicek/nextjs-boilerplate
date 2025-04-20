"use client"

import { toast } from "sonner"

import { Button } from "@/ui"

export function ToastExample() {
	return (
		<div>
			<Button
				variant="outline"
				onClick={() =>
					toast("Event has been created", {
						description: "Sunday, December 03, 2023 at 9:00 AM"
					})
				}
			>
				Show Toast
			</Button>
		</div>
	)
}
