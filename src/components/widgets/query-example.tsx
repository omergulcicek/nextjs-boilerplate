"use client"

import { PostType } from "@/types"

import { usePosts } from "@/hooks"

import { QuerySkeleton } from "@/skeletons"

export function QueryExample() {
	const { data: posts, isPending } = usePosts()

	if (isPending) return <QuerySkeleton />

	return (
		<div className="space-y-2">
			{posts?.slice(0, 3).map((post: PostType) => (
				<div key={post.id} className="p-2 rounded-lg border">
					<h2 className="mb-2 text-base font-semibold">{post.title}</h2>
					<p className="text-muted-foreground">{post.body}</p>
				</div>
			))}
		</div>
	)
}
