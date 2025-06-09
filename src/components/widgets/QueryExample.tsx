"use client"

import { UserType } from "@/types"

import { useUsers } from "@/hooks"

import { Avatar, AvatarFallback } from "@/ui"
import { QuerySkeleton } from "@/skeletons"

export function QueryExample() {
	const { data: users, isPending } = useUsers()

	const Content = () => {
		return (
			<>
				{isPending ? (
					<QuerySkeleton />
				) : (
					<>
						{users?.slice(0, 5).map((user: UserType) => (
							<div
								key={user.id}
								className="flex gap-4 items-center p-2 rounded-lg border"
							>
								<Avatar>
									<AvatarFallback>
										{user.name.split(" ")?.[0].slice(0, 1).toUpperCase()}
										{user.name.split(" ")?.[1].slice(0, 1).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div>
									<h2 className="text-sm font-semibold">{user.name}</h2>
									<p className="text-sm text-muted-foreground">{user.email}</p>
								</div>
							</div>
						))}
					</>
				)}
			</>
		)
	}

	return (
		<section className="xl:col-span-2 flex flex-col gap-4 p-4 rounded-lg border">
			<h2 className="text-xl font-medium">TanStack Query</h2>
			<div className="space-y-2 min-h-72">
				<Content />
			</div>
		</section>
	)
}
