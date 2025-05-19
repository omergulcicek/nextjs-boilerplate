import Link from "next/link"

import { Turkiye } from "@/components/icons"
import { Button } from "@/ui"

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container">
				<div className="flex justify-between items-center py-4 font-mono text-sm">
					<p>© Copyright {new Date().getFullYear()} Next.js Boilerplate</p>

					<Link
						href="https://omergulcicek.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="link" size="lg">
							<Turkiye />
							<span>Ömer Gülçiçek</span>
						</Button>
					</Link>
				</div>
			</div>
		</footer>
	)
}
