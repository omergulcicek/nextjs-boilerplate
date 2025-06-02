import Link from "next/link"

import { Flower } from "lucide-react"

import { APP_CONFIG } from "@/constants"

import { Github } from "@/components/icons"
import { Button } from "@/ui"

export default function Header() {
	return (
		<header className="border-b">
			<div className="container">
				<div className="flex justify-between items-center py-4">
					<div className="flex gap-2 items-center">
						<Flower size={24} />
						<strong className="text-lg font-semibold">
							Next.js Boilerplate
						</strong>
					</div>
					<div>
						<Link
							href={APP_CONFIG.GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline" size="icon">
								<Github className="fill-black dark:fill-white" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
