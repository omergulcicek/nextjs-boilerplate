"use client"

import Balancer from "react-wrap-balancer"

import { Camera } from "lucide-react"

import { useCountStore } from "@/stores/count-store"
import { baseUrl } from "@/lib/constants"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
	const { count, increase, decrease, reset } = useCountStore()

	return (
		<div className="container">
			<h1>Hello World</h1>
			<ThemeToggle />
			<p>{baseUrl}</p>
			<Camera color="red" size={48} />
			<Balancer>
				React: A JavaScript library for building user interfaces
			</Balancer>
			<div className="flex gap-4 items-center">
				<Button variant="secondary" onClick={decrease}>
					-
				</Button>
				<div>{count}</div>
				<Button variant="secondary" onClick={increase}>
					+
				</Button>
			</div>
		</div>
	)
}
