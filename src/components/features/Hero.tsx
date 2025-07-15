"use client"

import { useTranslations } from "next-intl"

import { GitBranch, Github, Rocket } from "lucide-react"

import { APP_CONFIG } from "@/constants"

import {
	DeployButtons,
	EnhancedHeader,
	LanguageSelector,
	ThemeToggle
} from "@/widgets"

export function Hero() {
	const t = useTranslations("Dashboard")

	// Deploy buttons data
	const deployButtons: DeployButtons[] = [
		{
			href: APP_CONFIG.GITHUB_URL,
			icon: Github,
			text: t("starOnGithub")
		},
		{
			href: "https://vercel.com/new/clone?repository-url=https://github.com/omergulcicek/nextjs-boilerplate",
			icon: Rocket,
			text: t("deployToVercel")
		},
		{
			href: "https://github.com/omergulcicek/nextjs-boilerplate/generate",
			icon: GitBranch,
			text: t("useTemplate")
		}
	]

	return (
		<div className="relative mb-12">
			{/* Top Bar with Language & Theme Switchers */}
			<div className="flex items-center justify-end mb-8">
				<div className="flex items-center gap-4">
					<LanguageSelector />
					<ThemeToggle />
				</div>
			</div>

			{/* Enhanced Header */}
			<EnhancedHeader
				title={t("title")}
				subtitle={t("subtitle")}
				deployButtons={deployButtons}
			/>
		</div>
	)
}
