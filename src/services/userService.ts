import axios from "axios";

import { delay } from "@/utils";

export async function getUsers() {
  return axios
    .get(`${process.env.NEXT_PUBLIC_USERS_LIST}/users`)
    .then((res) => res.data);
}

export async function addUser(newUser: any) {
  return axios.post(`${process.env.NEXT_PUBLIC_USERS_LIST}/users`, newUser);
}
