import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgTypescript = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		preserveAspectRatio="xMidYMid"
		viewBox="0 0 256 256"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="#3178C6"
			d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"
		/>
		<path
			fill="#FFF"
			d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394 3.93-7.033 3.93-17.391 0-7.51-2.246-13.163a30.75 30.75 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898-5.918-3.495-13.347-6.602-5.441-2.245-9.761-4.359-4.319-2.115-7.342-4.316-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135c1.468-2.287 2.362-2.834 4.147-3.927q2.677-1.64 6.565-2.547 3.887-.906 8.638-.906 3.456 0 7.299.518 3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.416-13.778-3.582T198.633 107q-9.847 0-18.658 2.115-8.811 2.114-15.506 6.602-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265 2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.286-3.93 3.97-2.635 1.683-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgTypescript)
export default ForwardRef
