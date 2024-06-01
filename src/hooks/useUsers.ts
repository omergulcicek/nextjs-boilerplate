import { userAPI } from "@/services"
import { useQuery } from "@tanstack/react-query"

export function useUsers(enabled = true) {
	return useQuery({
		queryKey: ["userList"],
		queryFn: userAPI.getAll,
		enabled
	})
}
