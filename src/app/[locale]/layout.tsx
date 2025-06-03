import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"

import { routing } from "@/i18n/routing"

import { Providers } from "@/providers"

import { Footer } from "@/shared"

import "./../globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Next.js Boilerplate",
	description: "Next.js Boilerplate"
}

interface LocaleLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
	children,
	params
}: LocaleLayoutProps) {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} className="light" style={{ colorScheme: "light" }}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
				suppressHydrationWarning
			>
				<NextIntlClientProvider locale={locale}>
					<Providers>
						<main className="flex-1">{children}</main>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
