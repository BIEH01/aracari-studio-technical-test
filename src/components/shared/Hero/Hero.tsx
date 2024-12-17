"use client";
import { usePathname } from "next/navigation";
import { heroData } from "@/data";
// import { Button } from "@/components/ui/Button";

export const Hero = () => {
	const pathname = usePathname();

	return (
		<section className="mx-auto my-6 w-full">
			<div className="w-[85%] min-h-64 h-auto mx-auto bg-hero-image bg-no-repeat bg-center bg-cover rounded-2xl flex justify-center items-center">
				{heroData.map((data) =>
					pathname === data.id ? (
						<div key={data.id} className="text-white space-y-1 w-[95%] px-1">
							<h2 className="font-extrabold text-xl text-wrap">{data.title}</h2>
							<h3 className="font-medium text-2xl text-wrap pr-20">
								{data.subtitle}
							</h3>
							{/* {data.callToAction && <Button />}
							{data.littleText && <p>{data.littleText}</p>} */}
						</div>
					) : (
						<span key={data.id} className="hidden" />
					)
				)}
			</div>
		</section>
	);
};
