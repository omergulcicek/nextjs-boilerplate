"use client"

import Balancer from "react-wrap-balancer"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useParams } from "next/navigation"

import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { GitBranch, Github, Globe, Moon, Rocket } from "lucide-react"

import { APP_CONFIG } from "@/constants"

import {
	Button,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/ui"

export function Hero() {
	const t = useTranslations("Dashboard")

	const { theme, setTheme } = useTheme()
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()
	const locale = useLocale()

	return (
		<div className="relative mb-12">
			{/* Top Bar with Language & Theme Switchers */}
			<div className="flex items-center justify-end mb-8">
				<div className="flex items-center gap-4">
					{/* Language Selector */}
					<div className="flex items-center gap-2">
						<Globe className="w-4 h-4 text-muted-foreground" />
						<Select
							defaultValue={locale}
							onValueChange={(value: string) => {
								router.replace(
									// @ts-expect-error -- TypeScript will validate that only known `params`
									{ pathname, params },
									{ locale: value }
								)
							}}
						>
							<SelectTrigger className="w-24">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{routing.locales.map((cur) => (
									<SelectItem key={cur} value={cur}>
										{cur === "tr" ? "Türkçe" : "English"}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Theme Toggle */}
					<div className="flex items-center gap-2">
						<Moon className="w-4 h-4 text-muted-foreground" />
						<Select value={theme} onValueChange={setTheme}>
							<SelectTrigger className="w-24">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			{/* Enhanced Header */}
			<div className="text-center py-6 max-w-3xl mx-auto flex flex-col gap-6 items-center">
				<Balancer
					as="h1"
					className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white"
				>
					{t("title")}
				</Balancer>
				<Balancer
					as="p"
					className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
				>
					{t("subtitle")}
				</Balancer>

				{/* Deploy Buttons */}
				<div className="flex flex-wrap items-center gap-3 justify-center">
					<Button asChild variant="secondary" size="sm">
						<Link href={APP_CONFIG.GITHUB_URL} target="_blank">
							<Github className="w-4 h-4" />
							{t("starOnGithub")}
						</Link>
					</Button>
					<Button asChild variant="secondary" size="sm">
						<Link
							href="https://vercel.com/new/clone?repository-url=https://github.com/omergulcicek/nextjs-boilerplate"
							target="_blank"
						>
							<Rocket className="w-4 h-4" />
							{t("deployToVercel")}
						</Link>
					</Button>
					<Button asChild variant="secondary" size="sm">
						<Link
							href="https://github.com/omergulcicek/nextjs-boilerplate/generate"
							target="_blank"
						>
							<GitBranch className="w-4 h-4" />
							{t("useTemplate")}
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
