import * as React from "react"

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: React.DetailedHTMLProps<
				React.AllHTMLAttributes<HTMLElement>,
				HTMLElement
			>
		}
	}
}

export {}
