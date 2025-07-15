"use client"

import { useTheme } from "next-themes"

import { Moon } from "lucide-react"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/ui"

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
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
	)
}
