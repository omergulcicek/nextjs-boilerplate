import { Loader2, Moon, Sun } from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
	loader: (props?: IconProps) => <Loader2 {...props} />,
	nextjs: (props?: IconProps) => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
			<rect width="256" height="256" fill="none" />
			<line
				x1="208"
				y1="128"
				x2="128"
				y2="208"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="192"
				y1="40"
				x2="40"
				y2="192"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	),
	moon: (props?: IconProps) => <Moon {...props} />,
	sun: (props?: IconProps) => <Sun {...props} />
}
