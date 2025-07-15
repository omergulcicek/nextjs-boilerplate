"use client"

import Balancer from "react-wrap-balancer"

import { DeployButtons } from "./DeployButtons"

interface EnhancedHeaderProps {
	title: string
	subtitle: string
	deployButtons: DeployButtons[]
}

export function EnhancedHeader({
	title,
	subtitle,
	deployButtons
}: EnhancedHeaderProps) {
	return (
		<div className="text-center py-6 max-w-3xl mx-auto flex flex-col gap-6 items-center">
			<Balancer
				as="h1"
				className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white"
			>
				{title}
			</Balancer>
			<Balancer
				as="p"
				className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
			>
				{subtitle}
			</Balancer>

			<DeployButtons buttons={deployButtons} />
		</div>
	)
}
