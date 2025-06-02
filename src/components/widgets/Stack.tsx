import { stackData } from "@/data/stack-data"

export const Stack = () => {
	return (
		<div className="grid grid-cols-3 gap-y-8 p-4 my-10 w-full lg:grid-cols-9">
			{stackData.map((item) => (
				<figure
					className="flex flex-col gap-3 justify-center items-center"
					key={item.name}
				>
					{item.icon}
					<figcaption className="flex justify-center items-center text-sm font-medium text-center">
						{item.name}
					</figcaption>
				</figure>
			))}
		</div>
	)
}
