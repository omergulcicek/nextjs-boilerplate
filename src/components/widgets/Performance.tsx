"use client"

import { useTranslations } from "next-intl"

import { ShowcaseCard } from "@/widgets"

export const Performance = () => {
	const t = useTranslations("Performance")

	return (
		<>
			<ShowcaseCard
				title={t("title")}
				description={t("description")}
				className="col-span-2 md:col-span-2 xl:col-span-4"
			>
				<div className="flex justify-center items-center mt-10 text-5xl font-medium text-green-500 bg-green-100 rounded-full border-green-500 dark:bg-green-900 border-10 size-32">
					100
				</div>
			</ShowcaseCard>
		</>
	)
}
