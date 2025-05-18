import Balancer from "react-wrap-balancer"

import { Camera } from "lucide-react"

import { Mastercard, Visa } from "@/components/icons"
import { ThemeToggle } from "@/ui"
import { CountExample, FormExample, QueryExample } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-4">
			<div className="flex gap-4 items-center">
				<h1>Hello World</h1>
				<Camera size={32} />
				<Mastercard height={48} width={48} />
				<Visa height={48} width={48} />
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
