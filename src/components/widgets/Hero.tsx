import Balancer from "react-wrap-balancer"
import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { APP_CONFIG } from "@/constants/config/app"

import { Github } from "@/components/icons"
import { Button } from "@/ui"

export const Hero = () => {
	return (
		<>
			<Link
				href={APP_CONFIG.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button variant="link">
					<Github className="fill-black dark:fill-white" />
					<span>View on GitHub</span> <ChevronRight />
				</Button>
			</Link>

			<Balancer
				as="h1"
				className="text-2xl font-medium leading-tight tracking-tighter sm:text-3xl md:text-6xl lg:leading-[1.1]"
			>
				<span className="text-black/40 dark:text-white/40">
					Next.js Boilerplate
				</span>{" "}
				<br />
				<span>for the Modern Web</span>
			</Balancer>

			<Balancer
				as="p"
				className="max-w-2xl text-base font-light text-foreground sm:text-lg"
			>
				An open-source starter built with <strong>Next.js 15.3</strong>,{" "}
				<strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>{" "}
				everything you need to build modern web apps, faster.
			</Balancer>
		</>
	)
}
