"use client"

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/ui"

export function DarkTheme() {
	const { setTheme } = useTheme()

	return (
		<section className="flex w-full flex-col gap-2 pt-6">
			<h2 className="font-medium">Dark Theme</h2>

			<div className="flex gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</section>
	)
}
