import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgShadcnUi = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		width="1em"
		height="1em"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="none" d="M0 0h256v256H0z" />
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeWidth={25}
			d="m208 128-80 80m64-168L40 192"
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgShadcnUi)
export default ForwardRef
