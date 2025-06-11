import type { Metadata } from "next"

import { APP_CONFIG } from "@/constants"

interface GenerateMetadataProps {
	title?: string
	description?: string
	image?: string
	canonical?: string
	noIndex?: boolean
}

export function generateMetadata({
	title,
	description = APP_CONFIG.APP_DESCRIPTION,
	image = "/opengraph-image.png",
	canonical,
	noIndex = false
}: GenerateMetadataProps = {}): Metadata {
	const pageTitle = title
		? `${title} | ${APP_CONFIG.APP_NAME}`
		: APP_CONFIG.APP_NAME

	const fullImageUrl = image.startsWith("http")
		? image
		: `${APP_CONFIG.SITE_URL}${image}`

	return {
		title: pageTitle,
		description,
		keywords: APP_CONFIG.APP_KEYWORDS,
		authors: [{ name: APP_CONFIG.CREATOR }],
		creator: APP_CONFIG.CREATOR,
		metadataBase: new URL(APP_CONFIG.SITE_URL),
		alternates: canonical
			? {
					canonical
				}
			: undefined,
		openGraph: {
			type: "website",
			locale: "tr_TR",
			url: canonical || APP_CONFIG.SITE_URL,
			title: pageTitle,
			description,
			siteName: APP_CONFIG.APP_NAME,
			images: [
				{
					url: fullImageUrl,
					width: 1200,
					height: 630,
					alt: pageTitle
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description,
			creator: APP_CONFIG.TWITTER_HANDLE,
			images: [fullImageUrl]
		},
		robots: noIndex
			? {
					index: false,
					follow: false
				}
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-video-preview": -1,
						"max-image-preview": "large",
						"max-snippet": -1
					}
				}
	}
}

export function generateStructuredData(data: {
	type: "WebSite" | "Organization" | "Article"
	name?: string
	description?: string
	url?: string
	logo?: string
	author?: string
	datePublished?: string
	dateModified?: string
}) {
	const baseStructuredData = {
		"@context": "https://schema.org",
		"@type": data.type
	}

	switch (data.type) {
		case "WebSite":
			return {
				...baseStructuredData,
				name: data.name || APP_CONFIG.APP_NAME,
				description: data.description || APP_CONFIG.APP_DESCRIPTION,
				url: data.url || APP_CONFIG.SITE_URL,
				potentialAction: {
					"@type": "SearchAction",
					target: `${APP_CONFIG.SITE_URL}/search?q={search_term_string}`,
					"query-input": "required name=search_term_string"
				}
			}

		case "Organization":
			return {
				...baseStructuredData,
				name: data.name || APP_CONFIG.APP_NAME,
				description: data.description || APP_CONFIG.APP_DESCRIPTION,
				url: data.url || APP_CONFIG.SITE_URL,
				logo: data.logo || `${APP_CONFIG.SITE_URL}/icon.png`
			}

		case "Article":
			return {
				...baseStructuredData,
				headline: data.name,
				description: data.description,
				author: {
					"@type": "Person",
					name: data.author || APP_CONFIG.CREATOR
				},
				publisher: {
					"@type": "Organization",
					name: APP_CONFIG.APP_NAME,
					logo: {
						"@type": "ImageObject",
						url: `${APP_CONFIG.SITE_URL}/icon.png`
					}
				},
				datePublished: data.datePublished,
				dateModified: data.dateModified || data.datePublished,
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": data.url
				}
			}

		default:
			return baseStructuredData
	}
}
