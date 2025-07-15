"use client"

import Link from "next/link"

import { LucideIcon } from "lucide-react"

import { Button } from "@/ui"

export interface DeployButtons {
	href: string
	icon: LucideIcon
	text: string
}

interface DeployButtonsProps {
	buttons: DeployButtons[]
}

export function DeployButtons({ buttons }: DeployButtonsProps) {
	return (
		<div className="flex flex-wrap items-center gap-3 justify-center">
			{buttons.map((button, index) => {
				const Icon = button.icon
				return (
					<Button key={index} asChild variant="secondary" size="sm">
						<Link href={button.href} target="_blank">
							<Icon className="w-4 h-4" />
							{button.text}
						</Link>
					</Button>
				)
			})}
		</div>
	)
}
