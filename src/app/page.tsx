import Balancer from "react-wrap-balancer"

import { Camera } from "lucide-react"

import { ThemeToggle } from "@/ui"
import { CountExample, FormExample, QueryExample } from "@/widgets"

export default function Home() {
	return (
		<div className="container py-8">
			<div className="flex gap-4 items-center">
				<h1>Hello World</h1>
				<Camera color="red" size={48} />
				<ThemeToggle />
			</div>
			<Balancer>
				React: A JavaScript library for building user interfaces
			</Balancer>

			<CountExample />
			<QueryExample />
			<FormExample />
		</div>
	)
}
