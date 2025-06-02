import { useQuery } from "@tanstack/react-query"

import { UserType } from "@/types"

import { usersService } from "@/services/users-service"

export const useUsers = () => {
	return useQuery<UserType[]>({
		queryKey: ["users"],
		queryFn: async () => {
			const response = await usersService.getUsers()
			return response.data
		}
	})
}
