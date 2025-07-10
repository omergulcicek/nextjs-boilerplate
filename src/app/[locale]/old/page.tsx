import { Appearance, Hero, Performance, QueryExample, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-2 pt-10">
			<Hero />
			<div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-4 xl:grid-cols-12">
				<Stack />
				<Performance />
				<QueryExample />
				<Appearance />
			</div>
		</div>
	)
}
