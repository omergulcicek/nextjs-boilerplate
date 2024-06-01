import type { Metadata } from "next"

import { Header } from "@/shared"

import { Header } from "@/shared"

import { Header } from "@/shared"

export const metadata: Metadata = {
	title: "Dashboard"
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
