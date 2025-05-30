import Balancer from "react-wrap-balancer"
import Link from "next/link"

import { ChevronRight, Github, Heart, Star } from "lucide-react"

import { APP_CONFIG } from "@/constants/config/app"

import { formatCurrency, formatDate, slugify } from "@/lib/utils"

import { Mastercard, Visa } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/ui"
import { CountExample, FormExample, QueryExample } from "@/widgets"

export default function Home() {
	return (
		<div className="container flex flex-col gap-4 px-20">
			<div className="flex flex-col gap-2 pt-10">
				<Link
					href={APP_CONFIG.GITHUB_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant="link">
						<Github /> <span>View on GitHub</span> <ChevronRight />
					</Button>
				</Link>

				<Balancer
					as="h1"
					className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]"
				>
					Next.js Boilerplate for the Modern Web
				</Balancer>

				<Balancer
					as="p"
					className="max-w-2xl text-base font-light text-foreground sm:text-lg"
				>
					An open-source starter built with <strong>Next.js 15.3</strong>,
					<strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>{" "}
					everything you need to build modern web apps, faster.
				</Balancer>

				<ul className="mt-5 list-disc list-inside">
					<li>Next.js v15.3</li>
					<li>TypeScript</li>
					<li>Tailwind CSS</li>
					<li>Shadcn UI</li>
					<li>TanStack Query</li>
					<li>Zustand</li>
					<li>Lucide Icons & SVGR</li>
				</ul>

				<div className="flex py-5 mt-10 border-y">
					<Tabs defaultValue="form" className="w-full">
						<TabsList className="gap-2 w-full">
							<TabsTrigger value="form">Form Elements</TabsTrigger>
							<TabsTrigger value="shadcn">Shadcn UI</TabsTrigger>
							<TabsTrigger value="query">TanStack Query</TabsTrigger>
							<TabsTrigger value="state-management">
								State Management
							</TabsTrigger>
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
						<TabsContent value="utils" className="flex flex-col gap-10 p-5">
							<ul className="list-disc list-inside">
								<li>
									<strong>slugify()</strong>: Hello Ömer Gülçiçek! ={" "}
									{slugify("Hello Ömer Gülçiçek!")}
								</li>
								<li>
									<div className="inline-flex gap-5">
										<div>
											<strong>formatDate(): </strong> Default ={" "}
											{formatDate(new Date("1453-05-29"))}
										</div>
										<div>
											d/MM/yy = {formatDate(new Date("1453-05-29"), "dd/MM/yy")}
										</div>
									</div>
								</li>
								<li>
									<strong>formatCurrency()</strong>: 1500 ={" "}
									<div className="flex gap-2">
										<span>{formatCurrency(1500, "USD")}</span>
										<span>{formatCurrency(1500, "EUR")}</span>
										<span>{formatCurrency(1500, "TRY")}</span>
									</div>
								</li>
							</ul>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}
