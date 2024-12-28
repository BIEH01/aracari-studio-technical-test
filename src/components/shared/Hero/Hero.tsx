"use client";
import { usePathname } from "next/navigation";
import { heroData } from "@/data";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";
import { Input } from "@/components/ui/Input";

export const Hero = () => {
	const pathname = usePathname();

	return (
		<section className="mx-auto mt-20 mb-16 w-full md:mt-28 lg:mt-32 lg:mb-16">
			<div className="w-[85%] min-h-72 h-auto mx-auto bg-hero-image bg-no-repeat bg-center bg-cover rounded-2xl flex justify-center items-center lg:h-[440px] lg:w-[90%]">
				{heroData.map((data) =>
					pathname === data.id ? (
						<div
							key={data.id}
							className="text-white space-y-1 w-[95%] pl-2 py-4 lg:pb-10 flex flex-col justify-center md:items-center h-auto"
						>
							<h2 className="font-extrabold text-xl text-wrap text-start md:text-2xl md:font-bold md:pt-10 md:text-center lg:text-4xl lg:pb-6">
								{data.title}
							</h2>

							<h3
								className={clsx(
									pathname === "/atencion-legal"
										? "font-medium text-2xl sm:text-xl text-wrap pr-10 pb-4 lg:text-3xl lg:pb-12"
										: "font-medium text-2xl text-wrap pr-10 pb-2 md:text-xl lg:text-2xl lg:pb-12"
								)}
							>
								{data.subtitle}
							</h3>

							{data.form && (
								<div className="pb-3 w-full">
									<p className="text-sm text-start">{data.smallerText}</p>
									<Input text={data.form[0]} />
									<Input text={data.form[1]} />
									<div className="mt-6 md:w-[50%] lg:w-[48%]">
										<Button text={data.cta} />
									</div>
								</div>
							)}

							{data.cta && (
								<div
									className={clsx(
										pathname === "/centro-de-ayuda"
											? "w-full max-w-[450px]"
											: "min-w-44 w-auto md:w-96",
										pathname === "/ventanilla-virtual"
											? "hidden"
											: "min-w-44 w-auto md:w-96"
									)}
								>
									<Button text={data.cta} />
								</div>
							)}

							{data.smallText && (
								<p className="mx-auto pb-4 md:text-lg">{data.smallText}</p>
							)}
						</div>
					) : (
						<span key={data.id} className="hidden" />
					)
				)}
			</div>
		</section>
	);
};
