import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

export const ShowcaseCard = ({
	title,
	description,
	className,
	children
}: {
	title: string
	description: string
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				"flex overflow-hidden relative flex-col col-span-1 gap-10 justify-between items-center p-10 rounded-xl border shadow-md bg-background",
				className
			)}
		>
			<div className="flex justify-center items-center">{children}</div>
			<div className="flex flex-col gap-2 mx-auto max-w-lg text-center">
				<Balancer
					as="h2"
					className="text-xl font-bold md:text-3xl md:font-medium"
				>
					{title}
				</Balancer>
				<Balancer
					as="p"
					className="leading-normal text-muted-foreground prose-sm md:prose"
				>
					{description}
				</Balancer>
			</div>
		</div>
	)
}
