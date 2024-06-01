import Balancer from "react-wrap-balancer"
import Link from "next/link"

import { Icons } from "@/icons"

import { Badge, Button } from "@/ui"

export default function Home() {
	return (
		<>
			<section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
				<Link
					href="https://github.com/omergulcicek"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Badge variant="secondary">@omergulcicek</Badge>
				</Link>

				<h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
					Next.js Boilerplate
				</h1>

				<p className="text-center text-lg font-light text-foreground">
					<Balancer>
						An open source boilerplate built using Next.js 14, TypeScript, and
						Tailwind CSS
					</Balancer>
				</p>

				<nav className="flex items-center gap-4 py-4">
					<Link href="/dashboard">
						<Button size="sm" className="text-sm">
							<span>Get Started</span>
						</Button>
					</Link>

					<Link
						href="https://github.com/omergulcicek/nextjs-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="sm">
							<Icons.github className="h-4 w-4 mr-2" aria-label="GitHub" />
							<span>GitHub</span>
						</Button>
					</Link>
				</nav>
			</section>
		</>
	)
}
