"use client"

import { LanguageSelector, ThemeToggle } from "@/widgets"

export function Header() {
	return (
		<div className="flex items-center justify-end mb-8">
			<div className="flex items-center gap-4">
				<LanguageSelector />
				<ThemeToggle />
			</div>
		</div>
	)
}
