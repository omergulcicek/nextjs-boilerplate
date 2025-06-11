"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

import {
	cookieStorageHelper,
	localStorageHelper,
	sessionStorageHelper
} from "@/helpers/store-helper"
import {
	CalendarFold,
	Container,
	Cookie,
	DollarSign,
	Languages,
	Moon,
	Signature,
	StoreIcon
} from "lucide-react"

import { useCountStore } from "@/stores/count-store"
import { formatCurrency, formatDate, slugify } from "@/lib/utils"

import { Button, Input, Switch } from "@/ui"

import { CountExample } from "./CountExample"
import { LocaleSwitcher } from "./LocaleSwitcher"

export const Appearance = () => {
	const t = useTranslations("Appearance")
	const { theme, setTheme } = useTheme()
	const { count } = useCountStore()

	const [inputValue, setInputValue] = useState("Ömer Gülçiçek")
	const [dateFormat, setDateFormat] = useState("dd/MM/yy")
	const [currency, setCurrency] = useState<"USD" | "EUR" | "TRY">("USD")

	return (
		<section className="flex flex-col gap-4 p-4 rounded-lg border bg-background xl:col-span-3">
			<h2 className="text-xl font-medium">{t("title")}</h2>

			<ul>
				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Moon size={20} />
						<span className="text-sm">{t("darkTheme")}</span>
						<span className="sr-only">{theme}</span>
					</div>

					<Switch
						aria-label="Dark Theme"
						checked={theme === "dark"}
						onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
					/>
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Languages size={20} />
						<span className="text-sm">{t("changeLanguage")}</span>
					</div>

					<LocaleSwitcher />
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Signature size={20} />
						<Input
							placeholder={t("inputPlaceholder")}
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
							{t("changeDateFormat")}
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
							{t("changeCurrency")}
						</Button>
					</div>

					<span>
						{formatCurrency(1500.45, currency as "USD" | "EUR" | "TRY")}
					</span>
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<StoreIcon size={20} />
						<CountExample />
					</div>
					<span>{count}</span>
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Cookie size={20} />
						<span>Cookie</span>
					</div>
					<div className="flex gap-1 items-center">
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								cookieStorageHelper.set("test", "hello-world-cookie")
							}}
						>
							Set
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => {
								alert(cookieStorageHelper.get("test"))
							}}
						>
							Show
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								cookieStorageHelper.remove("test")
							}}
						>
							Remove
						</Button>
					</div>
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Container size={20} />
						<span>Local Storage</span>
					</div>
					<div className="flex gap-1 items-center">
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								localStorageHelper.set("test", "hello-world-local")
							}}
						>
							Set
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => {
								alert(localStorageHelper.get("test"))
							}}
						>
							Show
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								localStorageHelper.remove("test")
							}}
						>
							Remove
						</Button>
					</div>
				</li>

				<li className="flex gap-2 justify-between items-center py-2">
					<div className="flex gap-2 items-center">
						<Container size={20} />
						<span>Session Storage</span>
					</div>
					<div className="flex gap-1 items-center">
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								sessionStorageHelper.set("test", "hello-world-session")
							}}
						>
							Set
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => {
								alert(sessionStorageHelper.get("test"))
							}}
						>
							Show
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={() => {
								sessionStorageHelper.remove("test")
							}}
						>
							Remove
						</Button>
					</div>
				</li>
			</ul>
		</section>
	)
}
