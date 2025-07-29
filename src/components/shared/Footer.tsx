import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { Turkiye } from "@/components/icons"

export default function Footer() {
	const t = useTranslations("Footer")

	return (
		<footer>
			<div className="container">
				<div className="flex justify-center items-center gap-2 py-10">
					<span>{t("projectBy")}</span>

					<Image
						src="/nice-avatar.png"
						alt="Ömer Gülçiçek Avatar"
						width={32}
						height={32}
					/>

					<Link
						href="https://omergulcicek.com?utm_source=nextjs-boilerplate"
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
