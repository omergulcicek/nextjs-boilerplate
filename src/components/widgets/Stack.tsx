"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui"

import { stackData } from "@/data/stack-data"

export function Stack() {
	return (
		<div className="flex items-center justify-center gap-6">
			{stackData.map((stack) => (
				<Tooltip key={stack.text}>
					<TooltipTrigger>
						<stack.icon className="size-6" />
					</TooltipTrigger>
					<TooltipContent>
						<p>{stack.text}</p>
					</TooltipContent>
				</Tooltip>
			))}
		</div>
	)
}
