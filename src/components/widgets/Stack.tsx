"use client"

import { useTranslations } from "next-intl"

import { stackData } from "@/data/stack-data"

export const Stack = () => {
	const t = useTranslations("Stack")
	return (
		<section className="xl:col-span-2 flex flex-col gap-4 p-4 rounded-lg border">
			<h2 className="text-xl font-medium">{t("title")}</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
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
