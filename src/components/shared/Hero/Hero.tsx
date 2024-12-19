"use client";
import { usePathname } from "next/navigation";
import { heroData } from "@/data";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";
import { Input } from "@/components/ui/Input";

export const Hero = () => {
	const pathname = usePathname();

	return (
		<section className="mx-auto mt-20 mb-16 w-full lg:mt-32 lg:mb-16">
			<div className="w-[85%] min-h-60 h-auto mx-auto bg-hero-image bg-no-repeat bg-center bg-cover rounded-2xl flex justify-center items-center lg:h-[440px] lg:w-[90%]">
				{heroData.map((data) =>
					pathname === data.id ? (
						<div
							key={data.id}
							className={clsx(
								pathname === "/abogados"
									? "text-white space-y-1 w-[95%] pl-2 py-4 lg:pb-10 flex flex-col justify-center items-center h-72 sm:text-center"
									: "text-white space-y-1 w-[95%] pl-2 py-4 lg:pb-10 flex flex-col justify-center items-start"
							)}
						>
							<h2 className="font-extrabold text-xl text-wrap md:text-2xl md:font-bold md:pt-10 lg:text-4xl lg:pb-6">
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
								</div>
							)}

							{data.callToAction && <Button text={data.callToAction} />}

							{data.smallText && (
								<p className="mx-auto pb-4 sm:ml-8 md:text-lg md:ml-7 lg:ml-14">
									{data.smallText}
								</p>
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
