"use client";

import { useTheme } from "next-themes";
import { useShallow } from "zustand/react/shallow";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { UserListSkeletons } from "@/skeletons/userListSkeletons";
import { useCountStore } from "@/stores/countStore";
import { useUserList } from "@/hooks/useUserList";

export default function Dashboard() {
  return (
    <div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pt-10">
      <h1 className="text-2xl font-medium">Dashboard</h1>

      <Count />
      <DarkTheme />
      <TanStack />
    </div>
  );
}

export function Count() {
  const [count, increaseCount, decreaseCount, removeAllCount] = useCountStore(
    useShallow((state) => [
      state.count,
      state.increaseCount,
      state.decreaseCount,
      state.removeAllCount,
    ]),
  );

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">Zustand State Managment</h2>

      <div className="flex gap-2">
        <Button variant="link" size="icon">
          {count}
        </Button>

        <Button variant="secondary" onClick={increaseCount}>
          Add count
        </Button>

        <Button variant="secondary" onClick={decreaseCount}>
          Subtracts count
        </Button>

        <Button variant="secondary" onClick={removeAllCount}>
          Remove all counts
        </Button>
      </div>
    </section>
  );
}

export function DarkTheme() {
  const { setTheme } = useTheme();

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">Dark Theme</h2>

      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}

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
