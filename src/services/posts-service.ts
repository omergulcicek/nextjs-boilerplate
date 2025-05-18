import { apiHelper } from "@/helpers/api-helper/api-helper"

import { PostType } from "@/types"
import { ApiResponseType } from "@/types/api-types"
import { APP_CONFIG } from "@/constants"

export const postsService = {
	getPosts: async (): Promise<ApiResponseType<PostType[]>> => {
		return apiHelper.get<PostType[]>(`${APP_CONFIG.JSON_PLACEHOLDER_URL}/posts`)
	}
}
