import { Appearance, Hero, QueryExample, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-2 pt-10 lg:p-20">
			<Hero />
			<div className="grid gap-10 mt-20 xl:grid-cols-7">
				<Stack />
				<Appearance />
				<QueryExample />
			</div>
		</div>
	)
}
