import Image from "next/image"
import Link from "next/link"

export const Header = () => {
	return (
		<header className="sticky top-0 z-30 h-16 bg-white/80 py-4 shadow-sm backdrop-blur-sm dark:bg-background/80 dark:border-b dark:border-b-slate-800">
			<div className="container flex max-w-4xl items-center justify-between">
				<Link href="/">
					<figure className="bg-white p-2 rounded">
						<Image
							src="/next.svg"
							alt="Next.js Logo"
							width={60}
							height={37}
							priority={true}
						/>
					</figure>
				</Link>
				<nav className="flex h-8 items-center gap-6 text-sm leading-5 ">
					<Link
						href="/"
						className="text-slate-600 dark:text-slate-300 transition hover:text-black dark:hover:text-white"
					>
						Home
					</Link>
				</nav>
			</div>
		</header>
	)
}
