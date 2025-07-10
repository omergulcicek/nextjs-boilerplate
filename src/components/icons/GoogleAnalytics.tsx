import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgGoogleAnalytics = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 55.273 64"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="#f9ab00"
			d="M40 7.636v48C40 61.007 43.71 64 47.637 64c3.636 0 7.636-2.546 7.636-8.364V8c0-4.924-3.636-8-7.636-8S40 3.393 40 7.636"
		/>
		<g fill="#e37400" transform="matrix(.36364 0 0 .36364 -7.273 -2.91)">
			<path d="M75 96v65c0 14.77 10.2 23 21 23 10 0 21-7 21-23V97c0-13.54-10-22-21-22s-21 9.33-21 21" />
			<circle cx={41} cy={163} r={21} />
		</g>
	</svg>
)
const ForwardRef = forwardRef(SvgGoogleAnalytics)
export default ForwardRef
