import { Appearance, FormExample, Hero, QueryExample, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-2 p-20">
			<Hero />
			<Stack />
			<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
				<Appearance />
				<FormExample />
				<QueryExample />
			</div>
		</div>
	)
}
