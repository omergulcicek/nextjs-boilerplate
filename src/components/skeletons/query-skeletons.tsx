import { Skeleton } from "@/ui"

export function QuerySkeleton() {
	return (
		<div className="flex flex-col gap-2">
			{[...Array(5)].map((_, i) => (
				<div key={i} className="space-y-2">
					<Skeleton className="w-full h-[58px]" />
				</div>
			))}
		</div>
	)
}
