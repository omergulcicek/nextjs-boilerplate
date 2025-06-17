import type { Preview } from "@storybook/nextjs"

import "../src/app/globals.css"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: "todo"
		},
		nextjs: {
			appDirectory: true
		}
	}
}

export default preview
