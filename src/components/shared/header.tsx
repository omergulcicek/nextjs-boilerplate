import Image from "next/image"
import Link from "next/link"

export const Header = () => {
	return (
		<header className="sticky top-0 z-30 bg-white/80 py-4 shadow-sm backdrop-blur-sm dark:bg-background/80 dark:border-b dark:border-b-slate-800">
			<div className="container flex max-w-4xl items-center">
				<nav className="flex items-center gap-4 text-sm lg:gap-6">
					<Link href="/">
						<figure className="dark:bg-white p-2 rounded">
							<Image
								src="/next.svg"
								alt="Next.js Logo"
								width={60}
								height={37}
								priority={true}
							/>
						</figure>
					</Link>
					<Link
						href="/"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						Home
					</Link>
					<Link
						href="/dashboard"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						Dashboard
					</Link>
				</nav>
			</div>
		</header>
	)
}
