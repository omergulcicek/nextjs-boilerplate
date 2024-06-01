import Link from "next/link"

import { Icons } from "@/icons"

const Brand = () => {
	return (
		<>
			<Link href="/">
				<Icons.flower aria-label="Flower icon" />
			</Link>
		</>
	)
}

export { Brand }
