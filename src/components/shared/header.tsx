import Image from "next/image"
import Link from "next/link"

export const Header = () => {
	return (
		<header className="sticky top-0 z-30 h-16 bg-white/80 py-4 shadow-sm backdrop-blur-sm">
			<div className="container flex max-w-4xl items-center justify-between">
				<Link href="/">
					<Image
						src="/next.svg"
						alt="Next.js Logo"
						width={60}
						height={37}
						priority={true}
					/>
				</Link>
				<nav className="flex h-8 items-center gap-6 text-sm leading-5 ">
					<Link href="/" className="text-slate-600 transition hover:text-black">
						Home
					</Link>
				</nav>
			</div>
		</header>
	)
}
