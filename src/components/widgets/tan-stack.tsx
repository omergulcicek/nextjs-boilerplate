"use client";

import { Button } from "@/ui";
import { UserListSkeletons } from "@/skeletons";

import { useUsers } from "@/hooks";

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

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">TanStack Query</h2>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => refetch()}
          className="w-40"
          disabled={!!isLoading}
        >
          {isLoading ? "Loading..." : "Get all users"}
        </Button>

        <ul className="flex flex-col gap-2">
          {isLoading && <UserListSkeletons />}
          {error && <li>Error: {error.message}</li>}
          {userListData.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
