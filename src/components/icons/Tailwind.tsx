import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgTailwind = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 54 33"
		width="1em"
		height="1em"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath="url(#tailwind_svg__a)">
			<path
				fill="#38bdf8"
				fillRule="evenodd"
				d="M27 0Q16.2 0 13.5 10.8q4.05-5.4 9.45-4.05c2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0M13.5 16.2Q2.7 16.2 0 27q4.05-5.4 9.45-4.05c2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="tailwind_svg__a">
				<path fill="#fff" d="M0 0h54v32.4H0z" />
			</clipPath>
		</defs>
	</svg>
)
const ForwardRef = forwardRef(SvgTailwind)
export default ForwardRef
