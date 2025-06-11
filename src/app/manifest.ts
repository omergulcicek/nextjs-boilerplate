import type { MetadataRoute } from "next"

import { APP_CONFIG } from "@/constants"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: APP_CONFIG.APP_NAME,
		short_name: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			}
		]
	}
}
