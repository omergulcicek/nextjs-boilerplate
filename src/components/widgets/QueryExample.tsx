"use client"

import { useTranslations } from "next-intl"

import { useMediaQuery } from "usehooks-ts"

import { UserType } from "@/types"

import { useUsers } from "@/hooks"

import { Avatar, AvatarFallback } from "@/ui"
import { ShowcaseCard } from "@/widgets"
import { QuerySkeleton } from "@/skeletons"

export function QueryExample() {
	const { data: users, isPending } = useUsers()
	const t = useTranslations("TanStackQuery")
	const isDesktop = useMediaQuery("(min-width: 768px)")

	const Content = () => {
		return (
			<>
				{isPending ? (
					<QuerySkeleton />
				) : (
					<>
						<div className="flex flex-col gap-2 py-10">
							{users?.slice(0, isDesktop ? 5 : 2).map((user: UserType) => (
								<div
									key={user.id}
									className="flex gap-4 items-center p-2 rounded-lg border"
								>
									<Avatar>
										<AvatarFallback>
											{user.name.split(" ")?.[0].slice(0, 1).toUpperCase()}
											{user.name.split(" ")?.[1].slice(0, 1).toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<div>
										<h2 className="text-sm font-semibold">{user.name}</h2>
										<p className="text-sm text-muted-foreground">
											{user.email}
										</p>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</>
		)
	}

	return (
		<ShowcaseCard
			title={t("title")}
			description={t("description")}
			className="col-span-2 md:col-span-2 xl:col-span-4"
		>
			<Content />
		</ShowcaseCard>
	)
}
