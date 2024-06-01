"use client"

import { Icons } from "@/icons"

import { UserListSkeletons } from "@/skeletons"
import { Button } from "@/ui"
import { useUsers } from "@/hooks"

export function Query() {
	const {
		data: userListData = [],
		isLoading,
		error,
		refetch
	} = useUsers(false) as {
		data: { id: number; name: string }[]
		isLoading: boolean
		error: Error
		refetch: () => void
	}

	const buttonContent = isLoading ? (
		<>
			<Icons.loader className="mr-2 h-4 w-4 animate-spin" />
			<span>Loading...</span>
		</>
	) : (
		<span>Get all users</span>
	)

	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">TanStack Query</h2>
			<div className="flex flex-col gap-2">
				<Button
					onClick={() => refetch()}
					className="w-40"
					disabled={!!isLoading}
				>
					{buttonContent}
				</Button>

				<ul className="flex flex-col gap-2">
					{isLoading && <UserListSkeletons />}
					{error && <li>Error: {error.message}</li>}
					{userListData.map(({ id, name }) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			</div>
		</section>
	)
}
