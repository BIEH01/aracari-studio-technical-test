import { LegalCard } from "@/components/ui/LegalCard";
import { legalCardData } from "@/data";

export default function LegalPage() {
	return (
		<main>
			<div className="bg-radial-gradient mx-0 w-[95%] h-96 md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[1000px] blur-3xl -z-50 absolute md:opacity-60" />
			<section className="mx-auto w-full h-auto flex flex-col justify-center items-center px-8 space-y-5 py-8">
				<h1 className="text-white text-wrap text-center text-4xl font-semibold leading-[48.8px]">
					Soluciones Legales Inclusivas
				</h1>
				<p className="text-tertiary text-wrap text-center text-lg font-light leading-[19.2px]">
					Cada situación es diferente, por eso te ofrecemos un proceso legal
					directo y práctico
				</p>
			</section>
			<section className="w-full h-auto">
				<div className="w-auto h-auto md:flex md:flex-wrap md:justify-center md:items-center md:w-fit md:mx-auto">
					{legalCardData.map((card) => (
						<div key={card.id}>
							<LegalCard {...card} />
						</div>
					))}
					<div className="bg-radial-gradient top-[1000px] w-[95%] h-96 blur-3xl -z-50 absolute sm:bottom-32 md:opacity-75 md:right-0 md:w-[600px] md:h-[500px] lg:top-[700px] lg:-bottom-72 lg:w-[700px] lg:h-[900px]" />
				</div>
			</section>
		</main>
	);
}
