import Image from "next/image";
import { Button } from "./Button";

export const TrainingCard = (card: TrainingCardType) => {
	return (
		<article className="bg-card-color border-[1px] border-[#2b2b2b] mx-auto w-[90%] rounded-3xl lg:w-[99%]">
			<div className="my-5 flex flex-col justify-center mx-auto w-[94%]">
				<Image
					src={card.img}
					alt={card.instructor}
					width={300}
					height={200}
					className="w-auto h-auto md:h-52 md:rounded-3xl md:object-cover md:object-top lg:h-60"
				/>
				<h3 className="bg-linear-gradient bg-clip-text text-transparent text-gl font-semibold my-3 mx-auto w-full md:text-xl">
					{card.title}
				</h3>
				<p className="text-[#E4D6F5] text-xs mx-auto w-full md:text-lg">
					{card.subtitle}
				</p>
				<div>
					<div className="flex justify-between items-center w-full mx-auto mt-8 text-[#A59DAF] text-sm md:text-base">
						<p>Instructor</p>
						<p>Precio</p>
					</div>
					<div className="flex justify-between items-center w-full mx-auto mt-2 mb-6 text-[#E4D6F5]">
						<h3 className="text-[#E4D6F5] text-sm md:text-lg">
							{card.instructor}
						</h3>
						<h3 className="bg-linear-gradient bg-clip-text text-transparent text-xl font-semibold md:text-2xl">
							{card.price}
						</h3>
					</div>
				</div>
				<Button text="Conocer más" />
			</div>
		</article>
	);
};
