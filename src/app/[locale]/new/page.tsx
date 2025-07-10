"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import {
	AlertCircle,
	BarChart3,
	BookOpen,
	Calendar,
	CheckCircle,
	Code2,
	CreditCard,
	Database,
	DollarSign,
	ExternalLink,
	FileText,
	FormInput,
	GitBranch,
	Globe,
	Hash,
	Heart,
	Info,
	Languages,
	Layers,
	Lock,
	Monitor,
	Moon,
	Package,
	Palette,
	Rocket,
	Settings,
	Shield,
	Smartphone,
	Star,
	TestTube,
	User,
	Wrench,
	Zap
} from "lucide-react"

import { APP_CONFIG } from "@/constants"

import { formatCurrency, formatDate, slugify } from "@/lib/utils"

import { Button } from "@/ui"
import { LocaleSwitcher, ThemeToggle } from "@/widgets"

export default function NewDashboard() {
	const t = useTranslations("Dashboard")
	const [inputValue] = useState("Ömer Gülçiçek")
	const [dateFormat] = useState("dd/MM/yy")
	const [currency] = useState<"USD" | "EUR" | "TRY">("USD")

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Header */}
			<div className="relative mb-12 text-center">
				{/* Language & Theme Switchers */}
				<div className="absolute top-0 right-0 flex items-center gap-3 z-10">
					<LocaleSwitcher />
					<ThemeToggle />
				</div>

				{/* Enhanced Header */}
				<div className="relative">
					<h1 className="text-xl md:text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
						{t("title")}
					</h1>
					<p className="text-sm md:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						{t("subtitle")}
					</p>
				</div>
			</div>

			{/* Bento Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Core Technologies - White tones */}
				<div className="col-span-full lg:col-span-2 p-6 bg-gradient-to-br from-gray-100 to-slate-100 dark:from-gray-900 dark:to-slate-800 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Layers className="w-6 h-6 text-gray-700 dark:text-gray-300" />
						<h2 className="text-xl font-semibold">{t("coreTechnologies")}</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg">
							<Code2 className="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
							<p className="text-sm font-medium">{t("nextjs")}</p>
							<p className="text-xs text-muted-foreground">{t("appRouter")}</p>
						</div>
						<div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg">
							<FileText className="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
							<p className="text-sm font-medium">{t("typescript")}</p>
							<p className="text-xs text-muted-foreground">{t("typeSafety")}</p>
						</div>
						<div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg">
							<Palette className="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
							<p className="text-sm font-medium">{t("tailwind")}</p>
							<p className="text-xs text-muted-foreground">
								{t("utilityFirst")}
							</p>
						</div>
						<div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg">
							<Package className="w-8 h-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
							<p className="text-sm font-medium">{t("shadcn")}</p>
							<p className="text-xs text-muted-foreground">{t("components")}</p>
						</div>
					</div>
				</div>

				{/* State Management - Soft mint */}
				<div className="p-6 bg-gradient-to-br from-mint-50 to-teal-100 dark:from-mint-950 dark:to-teal-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Database className="w-6 h-6 text-mint-700 dark:text-mint-300" />
						<h2 className="text-xl font-semibold">{t("stateManagement")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Package className="w-5 h-5 text-mint-700 dark:text-mint-300" />
							<div>
								<p className="text-sm font-medium">{t("zustand")}</p>
								<p className="text-xs text-muted-foreground">
									{t("lightweightStore")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Zap className="w-5 h-5 text-mint-700 dark:text-mint-300" />
							<div>
								<p className="text-sm font-medium">{t("tanstackQuery")}</p>
								<p className="text-xs text-muted-foreground">
									{t("serverState")}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Forms & Validation - Soft lavender */}
				<div className="p-6 bg-gradient-to-br from-lavender-50 to-indigo-100 dark:from-lavender-950 dark:to-indigo-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<FormInput className="w-6 h-6 text-lavender-700 dark:text-lavender-300" />
						<h2 className="text-xl font-semibold">{t("formsValidation")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<FileText className="w-5 h-5 text-lavender-700 dark:text-lavender-300" />
							<div>
								<p className="text-sm font-medium">{t("reactHookForm")}</p>
								<p className="text-xs text-muted-foreground">
									{t("formHandling")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Shield className="w-5 h-5 text-lavender-700 dark:text-lavender-300" />
							<div>
								<p className="text-sm font-medium">{t("zod")}</p>
								<p className="text-xs text-muted-foreground">
									{t("schemaValidation")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<CreditCard className="w-5 h-5 text-lavender-700 dark:text-lavender-300" />
							<div>
								<p className="text-sm font-medium">{t("omergulcicekForms")}</p>
								<p className="text-xs text-muted-foreground">
									{t("smartMasking")}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Internationalization - Soft peach */}
				<div className="p-6 bg-gradient-to-br from-peach-50 to-orange-100 dark:from-peach-950 dark:to-orange-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Globe className="w-6 h-6 text-orange-700 dark:text-orange-300" />
						<h2 className="text-xl font-semibold">
							{t("internationalization")}
						</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Languages className="w-5 h-5 text-peach-700 dark:text-peach-300" />
							<div>
								<p className="text-sm font-medium">{t("nextIntl")}</p>
								<p className="text-xs text-muted-foreground">
									{t("multiLanguage")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<CheckCircle className="w-5 h-5 text-peach-700 dark:text-peach-300" />
							<div>
								<p className="text-sm font-medium">{t("trEnSupport")}</p>
								<p className="text-xs text-muted-foreground">
									{t("readyToUse")}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* UI & UX - Soft rose */}
				<div className="p-6 bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Palette className="w-6 h-6 text-pink-700 dark:text-pink-300" />
						<h2 className="text-xl font-semibold">{t("uiUx")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Moon className="w-5 h-5 text-rose-700 dark:text-rose-300" />
							<div>
								<p className="text-sm font-medium">{t("darkTheme")}</p>
								<p className="text-xs text-muted-foreground">
									{t("nextThemes")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Smartphone className="w-5 h-5 text-rose-700 dark:text-rose-300" />
							<div>
								<p className="text-sm font-medium">{t("responsive")}</p>
								<p className="text-xs text-muted-foreground">
									{t("mobileFirst")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Zap className="w-5 h-5 text-rose-700 dark:text-rose-300" />
							<div>
								<p className="text-sm font-medium">{t("skeletonLoading")}</p>
								<p className="text-xs text-muted-foreground">{t("betterUx")}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Development Tools - Soft sage */}
				<div className="p-6 bg-gradient-to-br from-sage-50 to-green-100 dark:from-sage-950 dark:to-green-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Settings className="w-6 h-6 text-green-700 dark:text-green-300" />
						<h2 className="text-xl font-semibold">{t("developmentTools")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<TestTube className="w-5 h-5 text-sage-700 dark:text-sage-300" />
							<div>
								<p className="text-sm font-medium">{t("storybook")}</p>
								<p className="text-xs text-muted-foreground">
									{t("componentDev")}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<GitBranch className="w-5 h-5 text-sage-700 dark:text-sage-300" />
							<div>
								<p className="text-sm font-medium">{t("husky")}</p>
								<p className="text-xs text-muted-foreground">{t("gitHooks")}</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<BarChart3 className="w-5 h-5 text-sage-700 dark:text-sage-300" />
							<div>
								<p className="text-sm font-medium">{t("eslintPrettier")}</p>
								<p className="text-xs text-muted-foreground">
									{t("codeQuality")}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Monitoring & Analytics - Soft coral */}
				<div className="col-span-full lg:col-span-2 p-6 bg-gradient-to-br from-coral-50 to-red-100 dark:from-coral-950 dark:to-red-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Monitor className="w-6 h-6 text-red-700 dark:text-red-300" />
						<h2 className="text-xl font-semibold">
							{t("monitoringAnalytics")}
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
							<div className="flex items-center gap-3 mb-2">
								<AlertCircle className="w-5 h-5 text-coral-700 dark:text-coral-300" />
								<h3 className="font-medium">{t("sentry")}</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								{t("errorTracking")}
							</p>
							<div className="mt-2 text-xs text-muted-foreground">
								<span className="inline-flex items-center gap-1">
									<Info className="w-3 h-3" />
									{t("configureInConfig")}
								</span>
							</div>
						</div>
						<div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
							<div className="flex items-center gap-3 mb-2">
								<BarChart3 className="w-5 h-5 text-coral-700 dark:text-coral-300" />
								<h3 className="font-medium">{t("googleAnalytics")}</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								{t("userBehavior")}
							</p>
							<div className="mt-2 text-xs text-muted-foreground">
								<span className="inline-flex items-center gap-1">
									<Info className="w-3 h-3" />
									{t("setGaId")}
								</span>
							</div>
						</div>
						<div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
							<div className="flex items-center gap-3 mb-2">
								<Zap className="w-5 h-5 text-coral-700 dark:text-coral-300" />
								<h3 className="font-medium">{t("performance")}</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								{t("optimizedSeo")}
							</p>
							<div className="mt-2 text-xs text-muted-foreground">
								<span className="inline-flex items-center gap-1">
									<CheckCircle className="w-3 h-3" />
									{t("readyToUse")}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Helper Functions & Storage - Soft sky */}
				<div className="p-6 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-950 dark:to-blue-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Wrench className="w-6 h-6 text-blue-700 dark:text-blue-300" />
						<h2 className="text-xl font-semibold">Helpers & Storage</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Hash className="w-5 h-5 text-sky-700 dark:text-sky-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("slugify")}</p>
								<p className="text-xs text-muted-foreground">
									&ldquo;{inputValue}&rdquo; → &ldquo;{slugify(inputValue)}
									&rdquo;
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Calendar className="w-5 h-5 text-sky-700 dark:text-sky-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("dateFormat")}</p>
								<p className="text-xs text-muted-foreground">
									{formatDate(new Date("1453-05-29"), dateFormat)}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<DollarSign className="w-5 h-5 text-sky-700 dark:text-sky-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("currencyFormat")}</p>
								<p className="text-xs text-muted-foreground">
									{formatCurrency(1500.45, currency)}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Database className="w-5 h-5 text-sky-700 dark:text-sky-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">Storage Helpers</p>
								<p className="text-xs text-muted-foreground">
									Local, Session & Cookie storage
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Other Projects - Enhanced with more projects */}
				<div className="p-6 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<Rocket className="w-6 h-6 text-green-700 dark:text-green-300" />
						<h2 className="text-xl font-semibold">{t("otherProjects")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Lock className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("passwordInput")}</p>
								<p className="text-xs text-muted-foreground">
									{t("passwordInputDesc")}
								</p>
							</div>
							<Button asChild variant="ghost" size="sm" className="p-1 h-auto">
								<Link
									href="https://github.com/omergulcicek/password-input"
									target="_blank"
								>
									<ExternalLink className="w-4 h-4" />
								</Link>
							</Button>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<FormInput className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("formsPackage")}</p>
								<p className="text-xs text-muted-foreground">
									{t("formsPackageDesc")}
								</p>
							</div>
							<Button asChild variant="ghost" size="sm" className="p-1 h-auto">
								<Link
									href="https://github.com/omergulcicek/forms"
									target="_blank"
								>
									<ExternalLink className="w-4 h-4" />
								</Link>
							</Button>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<BookOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("reactTutorials")}</p>
								<p className="text-xs text-muted-foreground">
									{t("reactTutorialsDesc")}
								</p>
							</div>
							<Button asChild variant="ghost" size="sm" className="p-1 h-auto">
								<Link
									href="https://github.com/omergulcicek/react-tutorials"
									target="_blank"
								>
									<ExternalLink className="w-4 h-4" />
								</Link>
							</Button>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Heart className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
							<div className="flex-1">
								<p className="text-sm font-medium">{t("openSource")}</p>
								<p className="text-xs text-muted-foreground">
									{t("openSourceDesc")}
								</p>
							</div>
							<Button asChild variant="ghost" size="sm" className="p-1 h-auto">
								<Link href="https://github.com/omergulcicek" target="_blank">
									<ExternalLink className="w-4 h-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>

				{/* Project Info - Soft blue */}
				<div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 rounded-2xl border">
					<div className="flex items-center gap-3 mb-6">
						<User className="w-6 h-6 text-indigo-700 dark:text-indigo-300" />
						<h2 className="text-xl font-semibold">{t("projectInfo")}</h2>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Image
								src="/nice-avatar.png"
								alt="Ömer Gülçiçek"
								width={48}
								height={48}
								className="rounded-full border border-blue-200 dark:border-blue-800 shadow-sm"
							/>
							<div>
								<p className="text-sm font-medium">Ömer Gülçiçek</p>
								<p className="text-xs text-muted-foreground">{t("author")}</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Shield className="w-5 h-5 text-blue-700 dark:text-blue-300" />
							<div>
								<p className="text-sm font-medium">{t("license")}</p>
								<p className="text-xs text-muted-foreground">{t("mit")}</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Globe className="w-5 h-5 text-blue-700 dark:text-blue-300" />
							<div>
								<p className="text-sm font-medium">{t("personalWebsite")}</p>
								<Button asChild variant="link" size="sm" className="p-0 h-auto">
									<Link href={APP_CONFIG.PERSONAL_WEBSITE} target="_blank">
										{APP_CONFIG.PERSONAL_WEBSITE}
									</Link>
								</Button>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
							<Star className="w-5 h-5 text-blue-700 dark:text-blue-300" />
							<div>
								<p className="text-sm font-medium">GitHub</p>
								<Button asChild variant="link" size="sm" className="p-0 h-auto">
									<Link href={APP_CONFIG.GITHUB_URL} target="_blank">
										{t("viewOnGithub")}
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
