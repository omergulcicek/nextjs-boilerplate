import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
	return (
		<div className="container bg-yellow-400 dark:bg-blue-700">
			<h1>Hello World</h1>
			<ThemeToggle />
		</div>
	)
}
