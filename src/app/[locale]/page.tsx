import { Actions, Header, Stack, Title } from "@/widgets"

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex flex-col items-center justify-center gap-12">
				<Header />
				<Title />
				<Stack />
				<Actions />
			</div>
		</div>
	)
}
