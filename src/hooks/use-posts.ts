import { useQuery } from "@tanstack/react-query"

import { Post, postsService } from "@/services/posts-service"

export const usePosts = () => {
	return useQuery<Post[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await postsService.getPosts()
			return response.data
		}
	})
}
