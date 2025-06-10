import * as React from "react"
import type { SVGProps } from "react"
import { forwardRef, Ref } from "react"

interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgNextjs = (
	{ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 180 180"
		ref={ref}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<mask
			id="nextjs_svg__a"
			width={180}
			height={180}
			x={0}
			y={0}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: "alpha"
			}}
		>
			<circle cx={90} cy={90} r={90} fill="#000" />
		</mask>
		<g mask="url(#nextjs_svg__a)">
			<circle
				cx={90}
				cy={90}
				r={87}
				fill="#000"
				stroke="#fff"
				strokeWidth={6}
			/>
			<path
				fill="url(#nextjs_svg__b)"
				d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325"
			/>
			<path fill="url(#nextjs_svg__c)" d="M115 54h12v72h-12z" />
		</g>
		<defs>
			<linearGradient
				id="nextjs_svg__b"
				x1={109}
				x2={144.5}
				y1={116.5}
				y2={160.5}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff" />
				<stop offset={1} stopColor="#fff" stopOpacity={0} />
			</linearGradient>
			<linearGradient
				id="nextjs_svg__c"
				x1={121}
				x2={120.799}
				y1={54}
				y2={106.875}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff" />
				<stop offset={1} stopColor="#fff" stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
)
const ForwardRef = forwardRef(SvgNextjs)
export default ForwardRef
