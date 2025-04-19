import Balancer from "react-wrap-balancer"

import { Camera } from "lucide-react"

import { baseUrl } from "@/lib/constants"

import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
	return (
		<div className="container">
			<h1>Hello World</h1>
			<ThemeToggle />
			<p>{baseUrl}</p>
			<Camera color="red" size={48} />
			<Balancer>
				React: A JavaScript library for building user interfaces
			</Balancer>
		</div>
	)
}
