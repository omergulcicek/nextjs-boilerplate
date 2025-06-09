import { Appearance, Hero, QueryExample, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-2 lg:p-20">
			<Hero />
			<div className="grid xl:grid-cols-7 gap-10 mt-20">
				<Stack />
				<Appearance />
				<QueryExample />
			</div>
		</div>
	)
}
