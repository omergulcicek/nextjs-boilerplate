import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Providers } from "@/providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { Providers } from "@/providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { Providers } from "@/providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Next.js Boilerplate",
	description:
		"An open source boilerplate built using Next.js 14, TypeScript, and Tailwind CSS"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					{children}
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	)
}
