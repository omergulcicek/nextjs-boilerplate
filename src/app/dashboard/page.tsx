import { Count } from "@/widgets/count";
import { DarkTheme } from "@/widgets/darkTheme";
import { TanStack } from "@/widgets/tanStack";

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
