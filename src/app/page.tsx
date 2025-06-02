import { Hero, PreviewTabs, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-2 p-20">
			<Hero />
			<Stack />
			<PreviewTabs />
		</div>
	)
}
