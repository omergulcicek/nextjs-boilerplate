import type { Metadata } from "next";

import {
  Count,
  DarkTheme,
  ReactHookForm,
  StorageHelpers,
  TanStack,
} from "@/widgets";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function Dashboard() {
  return (
    <main>
      <div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
        <h1 className="text-2xl font-medium">Dashboard</h1>

        <Count />
        <DarkTheme />
        <TanStack />
        <ReactHookForm />
        <StorageHelpers />
      </div>
    </main>
  );
}
