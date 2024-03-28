import { Count } from "@/widgets/count";
import { DarkTheme } from "@/widgets/dark-theme";
import { TanStack } from "@/widgets/tan-stack";
import { ReactHookForm } from "@/widgets/react-hook-form";

export default function Dashboard() {
  return (
    <div className="container flex min-h-screen max-w-2xl flex-col items-center gap-8 divide-y pb-96 pt-10">
      <h1 className="text-2xl font-medium">Dashboard</h1>

      <Count />
      <DarkTheme />
      <TanStack />
      <ReactHookForm />
    </div>
  );
}
