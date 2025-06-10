import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgMastercard = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="#ff9800" d="M32 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28" />
		<path fill="#d50000" d="M16 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28" />
		<path
			fill="#ff3d00"
			d="M18 24c0 4.755 2.376 8.95 6 11.48 3.624-2.53 6-6.725 6-11.48s-2.376-8.95-6-11.48c-3.624 2.53-6 6.725-6 11.48"
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgMastercard)
export default ForwardRef
