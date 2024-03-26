import { delay } from "@/utils";

export async function getUserList() {
  return await fetch(`${process.env.NEXT_PUBLIC_USERS_LIST}/users`)
    .then((res) => res.json())
    .then(delay(2000));
}
