import { Skeleton } from "@/ui"

export function QuerySkeleton() {
	return (
		<div className="space-y-2 min-h-72">
			{[...Array(5)].map((_, i) => (
				<div key={i} className="space-y-2">
					<Skeleton className="w-3/4 h-4" />
					<Skeleton className="w-1/2 h-4" />
				</div>
			))}
		</div>
	)
}
