import React from "react"

import type { Meta, StoryObj } from "@storybook/nextjs"

import { Button } from "./button"

const meta: Meta<typeof Button> = {
	title: "ui/button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link"
			]
		},
		size: {
			control: { type: "select" },
			options: ["default", "sm", "lg", "icon"]
		},
		asChild: {
			control: { type: "boolean" }
		},
		disabled: {
			control: { type: "boolean" }
		}
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Button"
	}
}

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary"
	}
}

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive"
	}
}

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline"
	}
}

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost"
	}
}

export const Link: Story = {
	args: {
		variant: "link",
		children: "Link"
	}
}

export const Small: Story = {
	args: {
		size: "sm",
		children: "Small"
	}
}

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large"
	}
}

export const Icon: Story = {
	args: {
		size: "icon",
		children: "🇹🇷"
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled"
	}
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
						fill="currentColor"
						fillRule="evenodd"
						clipRule="evenodd"
					/>
				</svg>
				With Icon
			</>
		)
	}
}

export const Loading: Story = {
	args: {
		disabled: true,
		children: (
			<>
				<svg className="mr-2 w-4 h-4 animate-spin" viewBox="0 0 24 24">
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
				Loading...
			</>
		)
	}
}
