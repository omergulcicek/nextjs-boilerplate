import Balancer from "react-wrap-balancer"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { APP_CONFIG } from "@/constants/config/app"

import { Github } from "@/components/icons"
import { Button } from "@/ui"

export const Hero = () => {
	const t = useTranslations("Hero")

	return (
		<section className="flex flex-col gap-6 items-center">
			<Balancer
				as="h1"
				className="font-display text-4xl text-center font-semibold tracking-[-0.02em] md:text-7xl"
			>
				<span>{t("title1")}</span> <br />
				<span>{t("title2")}</span>
			</Balancer>
			<Balancer as="p" className="text-center text-gray-500 md:text-xl">
				An opinionated collection of components, hooks, and utilities for your
				Next.js project.
			</Balancer>
			<div>
				<Link
					href={APP_CONFIG.GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant="outline">
						<Github className="fill-black dark:fill-white" />
						<span>{t("github")}</span> <ChevronRight />
					</Button>
				</Link>
			</div>

			{/* <Balancer
				as="p"
				className="max-w-2xl text-base font-light text-foreground sm:text-lg"
				dangerouslySetInnerHTML={{ __html: t("desc") }}
			/> */}
		</section>
	)
}
