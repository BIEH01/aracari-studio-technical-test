"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { tabs } from "@/data";

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<ul className="space-x-10 lg:mr-4 flex justify-center items-center">
			{tabs.map((tab) => (
				<Link
					key={tab.href}
					href={tab.href}
					className={clsx(
						"text-tertiary border-b-2 pb-5 transition-colors duration-500 hover:border-tertiary",
						pathname === tab.href ? "border-tertiary" : "border-transparent"
					)}
				>
					{tab.name}
				</Link>
			))}
		</ul>
	);
};
