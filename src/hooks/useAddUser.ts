import { useMutation } from "@tanstack/react-query";

import { addUser } from "@/services";

export function useAddUser() {
  return useMutation(addUser);
}
