import { useQuery } from "@tanstack/react-query";

import { getUserList } from "@/services";

export function useUserList() {
  return useQuery({
    queryKey: ["userList"],
    queryFn: getUserList,
  });
}
