import { useTranslations } from "next-intl"
import Link from "next/link"

import { Turkiye } from "@/components/icons"

export default function Footer() {
	const t = useTranslations("Footer")

	return (
		<footer>
			<div className="container">
				<div className="flex justify-center items-center py-10">
					<span className="mr-1">{t("projectBy")}</span>
					<Link
						href="https://omergulcicek.com?ref=nextjs-boilerplate"
						target="_blank"
						rel="noopener noreferrer"
						className="flex gap-2 items-center"
					>
						<span className="font-bold hover:underline">Ömer Gülçiçek</span>
						<Turkiye />
					</Link>
				</div>
			</div>
		</footer>
	)
}
