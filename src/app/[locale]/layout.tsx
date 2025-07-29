import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { GoogleAnalytics } from "@next/third-parties/google"

import { routing } from "@/i18n/routing"

import { APP_CONFIG } from "@/constants"

import { Providers } from "@/providers"

import { Footer } from "@/shared"

import "./../globals.css"

const interFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: {
		default: APP_CONFIG.APP_NAME,
		template: `%s | ${APP_CONFIG.APP_NAME}`
	},
	description: APP_CONFIG.APP_DESCRIPTION,
	keywords: APP_CONFIG.APP_KEYWORDS,
	authors: [{ name: APP_CONFIG.CREATOR }],
	creator: APP_CONFIG.CREATOR,
	metadataBase: new URL(
		APP_CONFIG.SITE_URL || "https://github.com/omergulcicek/nextjs-boilerplate"
	),
	alternates: {
		canonical: "/",
		languages: {
			tr: "/tr",
			en: "/en"
		}
	},
	openGraph: {
		type: "website",
		locale: "tr_TR",
		url: APP_CONFIG.SITE_URL,
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		siteName: APP_CONFIG.APP_NAME,
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: APP_CONFIG.APP_NAME
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		creator: APP_CONFIG.TWITTER_HANDLE,
		images: ["/twitter-image.png"]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
	}
}

interface RootLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function RootLayout({
	children,
	params
}: RootLayoutProps) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} className="light" style={{ colorScheme: "light" }}>
			<body
				className={`${interFont.variable} antialiased flex flex-col min-h-screen w-full`}
				suppressHydrationWarning
			>
				<NextIntlClientProvider locale={locale}>
					<Providers>
						<main className="flex-1">{children}</main>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>

			{APP_CONFIG.GA_ID && <GoogleAnalytics gaId={APP_CONFIG.GA_ID} />}
		</html>
	)
}
