import axios from "axios";

import { delay } from "@/utils";

export async function getUserList() {
  return axios
    .get(`${process.env.NEXT_PUBLIC_USERS_LIST}/users`)
    .then((res) => res.data);
}
