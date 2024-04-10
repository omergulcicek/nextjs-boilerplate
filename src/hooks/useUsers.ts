import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/services";

export function useUsers(enabled = true) {
  return useQuery({
    queryKey: ["userList"],
    queryFn: getUsers,
    enabled,
  });
}
