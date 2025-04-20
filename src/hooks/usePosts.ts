import { useQuery } from "@tanstack/react-query"

import { PostType } from "@/types"

import { postsService } from "@/services/posts-service"

export const usePosts = () => {
	return useQuery<PostType[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await postsService.getPosts()
			return response.data
		}
	})
}
