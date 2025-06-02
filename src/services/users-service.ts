import { apiHelper } from "@/helpers/api-helper/api-helper"

import { UserType } from "@/types"
import { ApiResponseType } from "@/types/api-types"
import { APP_CONFIG } from "@/constants"

export const usersService = {
	getUsers: async (): Promise<ApiResponseType<UserType[]>> => {
		return apiHelper.get<UserType[]>(`${APP_CONFIG.JSON_PLACEHOLDER_URL}/users`)
	}
}
