"use client"

import { useTheme } from "next-themes"

import { Icons } from "@/icons"

import { Button } from "@/ui"

export function Theme() {
	const { theme, setTheme } = useTheme()

	const handleTheme = (theme: string) => {
		switch (theme) {
			case "light":
				setTheme("system")
				break
			case "system":
				setTheme("dark")
				break
			default:
				setTheme("light")
				break
		}
	}

	const themeIcon: { [key: string]: JSX.Element } = {
		light: <Icons.sun className="size-5" />,
		dark: <Icons.moon className="size-5" />,
		system: <Icons.system className="size-5" />
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			className="active:scale-95"
			onClick={() => handleTheme(theme || "light")}
		>
			{themeIcon[theme || "light"]}
		</Button>
	)
}
