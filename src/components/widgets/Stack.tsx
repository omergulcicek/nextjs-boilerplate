"use client"

import { useTranslations } from "next-intl"

import { stackData } from "@/data/stack-data"

export const Stack = () => {
	const t = useTranslations("Stack")
	return (
		<section className="flex flex-col gap-4 p-4 rounded-lg border bg-background xl:col-span-2">
			<h2 className="text-xl font-medium">{t("title")}</h2>

			<div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
				{stackData.map((item) => (
					<article key={item.name}>
						<figure className="flex flex-col gap-3 justify-center items-center">
							{item.icon}
							<figcaption className="flex justify-center items-center text-sm font-medium text-center">
								{item.name}
							</figcaption>
						</figure>
					</article>
				))}
			</div>
		</section>
	)
}
