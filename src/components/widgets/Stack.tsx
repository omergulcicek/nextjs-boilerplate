"use client"

import { useTranslations } from "next-intl"

import { ShowcaseCard } from "@/widgets"

import { stackData } from "@/data/stack-data"

export const Stack = () => {
	const t = useTranslations("Stack")
	return (
		<>
			<ShowcaseCard
				title={t("title")}
				description={t("description")}
				className="col-span-2 md:col-span-2 xl:col-span-8"
			>
				<div className="flex flex-wrap gap-4 justify-center items-center max-w-xl lg:gap-y-5 lg:gap-x-10">
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
			</ShowcaseCard>
		</>
	)
}
