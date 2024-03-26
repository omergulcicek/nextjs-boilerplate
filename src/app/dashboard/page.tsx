"use client";

import { Button } from "@/ui/button";

import { useCountStore } from "@/stores/countStore";

export default function Dashboard() {
  const [count, increaseCount, decreaseCount, removeAllCount] = useCountStore(
    (state) => [
      state.count,
      state.increaseCount,
      state.decreaseCount,
      state.removeAllCount,
    ],
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 divide-y">
      <h1 className="text-2xl font-medium">Dashboard</h1>

      <section className="flex flex-col gap-2 pt-6">
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
    </div>
  );
}
