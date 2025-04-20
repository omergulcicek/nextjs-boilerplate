import { apiHelper } from "@/helpers/api-helper/api-helper"

import { PostType } from "@/types"
import { ApiResponseType } from "@/types/api-types"

import { JSON_PLACEHOLDER_URL } from "@/lib/constants"

export const postsService = {
	getPosts: async (): Promise<ApiResponseType<PostType[]>> => {
		return apiHelper.get<PostType[]>(`${JSON_PLACEHOLDER_URL}/posts`)
	}
}
