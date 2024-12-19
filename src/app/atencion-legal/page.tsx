import { LegalCard } from "@/components/ui/LegalCard";

export default function LegalPage() {
	return (
		<main>
			<div className="bg-radial-gradient w-96 h-96 md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] blur-3xl -z-50 fixed top-[480px] lg: lg:right-60 lg:left-60" />
			<section className="mx-auto w-full h-auto flex flex-col justify-center items-center px-8 space-y-5 py-8">
				<h1 className="text-white text-wrap text-center text-4xl font-semibold">
					Soluciones Legales Inclusivas
				</h1>
				<p className="text-tertiary text-wrap text-center text-lg font-light">
					Cada situación es diferente, por eso te ofrecemos un proceso legal
					directo y práctico
				</p>
			</section>
			<section>
				<LegalCard />
				<LegalCard />
			</section>
		</main>
	);
}
