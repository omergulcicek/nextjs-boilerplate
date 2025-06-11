export interface PageMetadata {
	title?: string
	description?: string
	keywords?: string[]
	image?: string
	canonical?: string
	noIndex?: boolean
	structuredData?: Record<string, unknown>
}

export interface StructuredDataProps {
	type: "WebSite" | "Organization" | "Article" | "BlogPosting" | "Product"
	name?: string
	description?: string
	url?: string
	logo?: string
	author?: string
	datePublished?: string
	dateModified?: string
	image?: string
	price?: string
	currency?: string
	availability?: string
}

export interface SocialMetadata {
	og?: {
		title?: string
		description?: string
		image?: string
		url?: string
		type?: string
		siteName?: string
	}
	twitter?: {
		card?: "summary" | "summary_large_image" | "app" | "player"
		site?: string
		creator?: string
		title?: string
		description?: string
		image?: string
	}
}
