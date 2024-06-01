import { Skeleton } from "@/ui"

export function UserListSkeletons() {
	return (
		<>
			{new Array(10).fill(null).map((_, index) => (
				<Skeleton className="h-6 w-[250px]" key={index} />
			))}
		</>
	)
}
