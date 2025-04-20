import { JSON_PLACEHOLDER_URL } from "@/constants"
import { apiHelper } from "@/helpers/api-helper/api-helper"

import { PostType } from "@/types"
import { ApiResponseType } from "@/types/api-types"

export const postsService = {
	getPosts: async (): Promise<ApiResponseType<PostType[]>> => {
		return apiHelper.get<PostType[]>(`${JSON_PLACEHOLDER_URL}/posts`)
	}
}
