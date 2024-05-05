import { useQuery } from "@tanstack/react-query";

import { userAPI } from "@/services";

export function useUsers(enabled = true) {
  return useQuery({
    queryKey: ["userList"],
    queryFn: userAPI.getAll,
    enabled,
  });
}
