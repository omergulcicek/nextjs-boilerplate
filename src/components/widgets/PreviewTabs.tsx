"use client"

import { useState } from "react"
import Link from "next/link"

import {
	CalendarFold,
	DollarSign,
	Heart,
	Moon,
	Signature,
	Star
} from "lucide-react"

import { formatCurrency, formatDate, slugify } from "@/lib/utils"

import { Mastercard, Visa } from "@/components/icons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button, Input, Switch, ThemeToggle } from "@/ui"
import { CountExample, FormExample, QueryExample } from "@/widgets"

export const PreviewTabs = () => {
	const [checked, setChecked] = useState(false)
	const [inputValue, setInputValue] = useState("Ömer Gülçiçek")
	const [dateFormat, setDateFormat] = useState("dd/MM/yy")
	const [currency, setCurrency] = useState<"USD" | "EUR" | "TRY">("USD")

	return (
		<div className="flex w-full">
			<Tabs defaultValue="form" className="w-full">
				<TabsList className="gap-2 w-full">
					<TabsTrigger value="form">Form Elements</TabsTrigger>
					<TabsTrigger value="shadcn">Shadcn UI</TabsTrigger>
					<TabsTrigger value="query">TanStack Query</TabsTrigger>
					<TabsTrigger value="state-management">State Management</TabsTrigger>
					<TabsTrigger value="theme">Dark Theme</TabsTrigger>
					<TabsTrigger value="icons">Icons</TabsTrigger>
					<TabsTrigger value="utils">Utils</TabsTrigger>
				</TabsList>

				<TabsContent value="form" className="flex flex-col gap-10 p-5">
					<p>
						Form handling with{" "}
						<Link
							href="https://react-hook-form.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							React Hook Form
						</Link>
						. Built-in input components for effortless form handling.
					</p>
					<FormExample />
				</TabsContent>
				<TabsContent value="shadcn" className="flex flex-col gap-10 p-5">
					<p>
						UI Components built with{" "}
						<Link
							href="https://ui.shadcn.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							Shadcn UI
						</Link>
					</p>
				</TabsContent>
				<TabsContent value="query" className="flex flex-col gap-10 p-5">
					<p>
						Data Fetching, Caching and Mutation with{" "}
						<Link
							href="https://tanstack.com/query/latest"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							TanStack Query
						</Link>
					</p>
					<QueryExample />
				</TabsContent>
				<TabsContent
					value="state-management"
					className="flex flex-col gap-10 p-5"
				>
					<p>
						State management with{" "}
						<Link
							href="https://zustand.docs.pmnd.rs/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							Zustand
						</Link>
					</p>
					<CountExample />
				</TabsContent>
				<TabsContent value="theme" className="flex flex-col gap-10 p-5">
					<p>
						Dark theme with{" "}
						<Link
							href="https://www.npmjs.com/package/next-themes"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							next-themes
						</Link>
					</p>
					<ThemeToggle />
				</TabsContent>
				<TabsContent value="icons" className="flex flex-col gap-10 p-5">
					<p>
						Beautiful and consistent icons from{" "}
						<Link
							href="https://lucide.dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline hover:text-blue-700"
						>
							Lucide
						</Link>
					</p>
					<div className="flex gap-2">
						<Heart size={32} className="fill-red-500" />
						<Star size={32} className="fill-yellow-300" />
					</div>

					<div className="flex gap-2">
						<Mastercard height={48} width={48} />
						<Visa height={48} width={48} />
					</div>
				</TabsContent>
				<TabsContent value="utils" className="flex flex-col gap-4 p-5 w-2/5">
					<span>Appreance</span>

					<ul>
						<li className="flex gap-2 justify-between items-center py-2">
							<div className="flex gap-2 items-center">
								<Moon size={20} />
								<span className="text-sm">Dark Theme</span>
							</div>

							<Switch checked={checked} onCheckedChange={setChecked} />
						</li>

						<li className="flex gap-2 justify-between items-center py-2">
							<div className="flex gap-2 items-center">
								<Signature size={20} />
								<Input
									placeholder="Enter anything..."
									maxLength={15}
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
								/>
							</div>

							<span>{slugify(inputValue)}</span>
						</li>

						<li className="flex gap-2 justify-between items-center py-2">
							<div className="flex gap-2 items-center">
								<CalendarFold size={20} />
								<Button
									variant="outline"
									size="sm"
									onClick={() =>
										setDateFormat(
											dateFormat === "d MMMM yyyy" ? "dd/MM/yyy" : "d MMMM yyyy"
										)
									}
								>
									Click me for change date format
								</Button>
							</div>

							<span>{formatDate(new Date("1453-05-29"), dateFormat)}</span>
						</li>

						<li className="flex gap-2 justify-between items-center py-2">
							<div className="flex gap-2 items-center">
								<DollarSign size={20} />
								<Button
									variant="outline"
									size="sm"
									onClick={() =>
										setCurrency(
											currency === "USD"
												? "EUR"
												: currency === "EUR"
													? "TRY"
													: "USD"
										)
									}
								>
									Click me for change currency
								</Button>
							</div>

							<span>
								{formatCurrency(1500.45, currency as "USD" | "EUR" | "TRY")}
							</span>
						</li>
					</ul>
				</TabsContent>
			</Tabs>
		</div>
	)
}
