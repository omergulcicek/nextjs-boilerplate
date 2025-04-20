import Balancer from "react-wrap-balancer"

import { Camera } from "lucide-react"

import { ThemeToggle } from "@/ui"
import { CountExample, QueryExample } from "@/widgets"

export default function Home() {
	return (
		<div className="container py-8">
			<h1>Hello World</h1>
			<ThemeToggle />
			<Camera color="red" size={48} />
			<Balancer>
				React: A JavaScript library for building user interfaces
			</Balancer>

			<CountExample />
			<QueryExample />
		</div>
	)
}
