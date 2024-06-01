import Link from "next/link"

import { siteConfig } from "@/config"
import { Icons } from "@/lib/icons"

export function Social() {
	return (
		<>
			<Link
				href={siteConfig.links.github}
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-10 px-0">
					<Icons.github className="h-5 w-5" aria-label="GitHub" />
				</div>
			</Link>
		</>
	)
}
