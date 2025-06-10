import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgVisa = (
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
		<path
			fill="#1565C0"
			d="M45 35a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4h34a4 4 0 0 1 4 4z"
		/>
		<path
			fill="#FFF"
			d="m15.186 19-2.626 7.832s-.667-3.313-.733-3.729c-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19zm2.503 11h2.871l1.736-11h-2.907zm20.319-11h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613zm-3.495 7.328 1.563-4.157.818 4.157zm-8.144-4.122c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309s-1.358-.515-2.691-.515c-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216s1.063.606 3.117.606c2.059 0 4.915-1.54 4.915-3.752 0-2.661-3.985-2.853-3.985-4.041"
		/>
		<path
			fill="#FFC107"
			d="m12.212 24.945-.966-4.748s-.437-1.029-1.573-1.029h-4.44s5.661 1.672 6.979 5.777"
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgVisa)
export default ForwardRef
