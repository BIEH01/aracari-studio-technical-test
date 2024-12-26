import { footerData, socialMedia } from "@/data";

export const Footer = () => {
	return (
		<footer className="h-auto w-full space-y-8 flex flex-col justify-center items-center lg:space-y-10">
			<div className="bg-radial-gradient mx-auto w-[95%] h-96 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[400px] md:mx-0 md:mr-72 md:mt-10 blur-3xl -z-50 absolute opacity-40 lg:opacity-30" />
			<section className="h-auto w-full space-y-20 flex flex-col justify-center items-center lg:flex-row lg:space-y-0 lg:space-x-24 lg:justify-center lg:items-start">
				{footerData.map((data) => (
					<div
						key={data.id}
						className="flex mx-auto justify-center w-[85%] lg:w-[25%] lg:mx-0"
					>
						<p className="w-[50%] text-end text-gray-400 text-xs mr-3 mt-0.5">
							{data.title}
						</p>
						<div className="flex flex-col space-y-5 text-tertiary w-[50%]">
							{data.links.map((link) => (
								<a
									key={link}
									href="/"
									className="bg-linear-gradient bg-clip-text text-transparent text-sm hover:font-semibold"
								>
									{link}
								</a>
							))}
						</div>
					</div>
				))}
				<div className="lg:w-[30%] lg:flex lg:justify-center">
					<p className="text-gray-400 text-xs mt-0.5">Síguenos en:</p>
					<div className="flex space-x-5 mt-4 lg:my-0 lg:ml-3">
						{socialMedia.map((data) => (
							<a key={data.id} href={data.href}>
								<img src={data.icon} alt={data.name} />
							</a>
						))}
					</div>
				</div>
			</section>
			<div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#232329] to-transparent" />
			<section className="text-white flex flex-col justify-center items-center space-y-4 text-lg pb-5 lg:pb-0">
				<h3>Igualítika</h3>
				<p className="text-center">© 2024. Todos los derechos reservados.</p>
			</section>
		</footer>
	);
};
