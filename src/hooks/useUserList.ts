import { useQuery } from "@tanstack/react-query";

import { getUserList } from "@/services/getUserList";

export function useUserList() {
  return useQuery({
    queryKey: ["userList"],
    queryFn: getUserList,
  });
}
