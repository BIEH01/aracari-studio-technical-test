import { TrainingCard } from "@/components/ui/TrainingCard";
import { trainingCardData } from "@/data";

export default function TrainingPage() {
	return (
		<main>
			<section className="w-full h-auto">
				<h1 className="text-white border-white border-b-[1px] mx-auto w-[90%] pl-3">
					Explora como igualítika puede ayudarte
				</h1>
				<div className="bg-radial-gradient mx-0 w-[95%] h-96 md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[1000px] blur-3xl -z-50 absolute md:opacity-60" />
				<div className="w-fit h-auto mx-auto md:flex md:flex-wrap md:justify-center md:items-center lg:w-full lg:my-10">
					{trainingCardData.map((card) => (
						<div key={card.id} className="my-8 md:my-2 md:w-[45%] lg:mx-2">
							<TrainingCard {...card} />
						</div>
					))}
					<div className="bg-radial-gradient top-[1000px] w-[95%] h-96 blur-3xl -z-50 absolute sm:bottom-32 md:opacity-75 md:right-0 md:w-[600px] md:h-[500px] lg:top-[700px] lg:-bottom-72 lg:w-[700px] lg:h-[900px]" />
				</div>
			</section>
		</main>
	);
}
