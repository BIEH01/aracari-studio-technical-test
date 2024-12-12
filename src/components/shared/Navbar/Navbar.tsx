"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
	{ name: "Inicio", href: "/" },
	{ name: "Centro de ayuda", href: "/centro-de-ayuda" },
	{ name: "Atención legal", href: "/atencion-legal" },
	{ name: "Ventanilla virtual", href: "/ventanilla-virtual" },
	{ name: "Capacitaciones", href: "/capacitaciones" },
	{ name: "Abogados", href: "/abogados" },
];

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
