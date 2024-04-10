"use client";

import { Button } from "@/ui";
import { UserListSkeletons } from "@/skeletons";

import { useUsers, useAddUser } from "@/hooks";

export function TanStack() {
  const {
    data: userListData = [],
    isLoading,
    error,
    refetch,
  } = useUsers(false) as {
    data: { id: number; name: string }[];
    isLoading: boolean;
    error: Error;
    refetch: () => void;
  };

  const { mutate: addUserMutate } = useAddUser();

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <div className="flex items-center gap-2">
        <h2 className="font-medium">TanStack Query</h2>
        <Button onClick={() => refetch()} className="w-40">
          Get all users
        </Button>
      </div>

      <ul className="flex flex-col gap-2">
        {isLoading && <UserListSkeletons />}
        {error && <li>Error: {error.message}</li>}
        {userListData.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>

      <Button
        onClick={() => {
          addUserMutate();
        }}
        className="w-40"
        variant="secondary"
      >
        Add new user
      </Button>
    </section>
  );
}
