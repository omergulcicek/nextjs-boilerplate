import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgEslint = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 324 285.096"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="#8080F2"
			d="m98.764 104.305 60.777-35.09a4.92 4.92 0 0 1 4.917 0l60.778 35.09a4.92 4.92 0 0 1 2.458 4.258v70.179c0 1.755-.938 3.38-2.458 4.259l-60.778 35.089a4.92 4.92 0 0 1-4.917 0L98.764 183a4.92 4.92 0 0 1-2.458-4.258v-70.179a4.92 4.92 0 0 1 2.458-4.258"
		/>
		<path
			fill="#4b32c3"
			d="M320.02 136.27 247.405 9.937C244.766 5.37 239.894 2 234.619 2H89.383c-5.276 0-10.15 3.37-12.788 7.937L3.978 135.991c-2.637 4.57-2.637 10.335 0 14.905l72.617 125.297c2.638 4.568 7.512 6.903 12.788 6.903h145.235c5.274 0 10.148-2.265 12.784-6.834L320.02 150.76c2.64-4.567 2.64-9.922.002-14.49m-60.131 60.75c0 1.856-1.118 3.574-2.728 4.504l-92.498 53.367a5.26 5.26 0 0 1-5.233 0l-92.57-53.367c-1.609-.93-2.734-2.646-2.734-4.505V90.284c0-1.858 1.109-3.575 2.719-4.505l92.494-53.367a5.25 5.25 0 0 1 5.23 0l92.577 53.367c1.61.93 2.743 2.647 2.743 4.505z"
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgEslint)
export default ForwardRef
