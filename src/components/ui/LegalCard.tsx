import { Button } from "./Button";

export const LegalCard = (card: LegalCardType) => {
	return (
		<article className="bg-card-color min-w-60 max-w-96 w-[80%] h-auto mx-auto mt-14 mb-6 rounded-3xl shadow-extra-strong border-[1px] border-[#2b2b2b] md:w-80 md:min-h-[510px] md:mx-6 lg:w-96">
			<div className="w-full h-auto mb-7 mt-10 mx-auto md:mx-0 lg:mb-0">
				<h3 className="bg-linear-gradient bg-clip-text text-transparent text-3xl my-3 mx-auto text-center">
					{card.title}
				</h3>
				<div className="mx-auto w-[90%] h-[2px] bg-gradient-to-r from-[#3d424b] to-transparent" />
				{card.context.map((item: ContextLegalType) => (
					<div key={item.id} className="mb-12 mt-5 ml-5 md:mt-8">
						<div className="flex justify-start items-center text-[#F1ECF9CC]">
							<img src="./assets/Frame.svg" alt="Check" />
							<p className="ml-2 text-lg">{item.subtitle}</p>
						</div>
						<p className="text-[#9DA4AF] text-base">{item.text}</p>
					</div>
				))}
			</div>
			<div className="w-[94%] mx-auto mb-5 flex justify-center items-center lg:mt-16 lg:mb-0">
				<Button text={card.cta} />
			</div>
		</article>
	);
};
