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
		<>
			<Link
				href={APP_CONFIG.GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button variant="link">
					<Github className="fill-black dark:fill-white" />
					<span>{t("github")}</span> <ChevronRight />
				</Button>
			</Link>

			<Balancer
				as="h1"
				className="text-2xl font-medium leading-tight tracking-tighter sm:text-3xl md:text-6xl lg:leading-[1.1]"
			>
				<span className="text-black/40 dark:text-white/40">{t("title1")}</span>{" "}
				<br />
				<span>{t("title2")}</span>
			</Balancer>

			{/* <Balancer
				as="p"
				className="max-w-2xl text-base font-light text-foreground sm:text-lg"
				dangerouslySetInnerHTML={{ __html: t("desc") }}
			/> */}
		</>
	)
}
