"use client";

import { UserListSkeletons } from "@/components/skeletons/user-list-skeletons";

import { useUserList } from "@/hooks/useUserList";

export function TanStack() {
  const {
    data: userListData = [],
    isLoading,
    error,
  } = useUserList() as {
    data: { id: number; name: string }[];
    isLoading: boolean;
    error: Error;
  };

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">TanStack Query</h2>

      <ul className="flex flex-col gap-2">
        {isLoading && <UserListSkeletons />}
        {error && <li>Error: {error.message}</li>}
        {userListData.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
