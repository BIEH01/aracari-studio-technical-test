"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/data";
import clsx from "clsx";

export const SideBar = ({ open, setOpen }: StateTypeProps) => {
	const pathname = usePathname();

	return (
		<aside
			className={clsx(
				open
					? "lg:hidden absolute z-30 bg-base-gradient sm:w-[37%] md:w-[35%] w-[60%] h-screen transform -translate-x-0 transition-transform duration-500"
					: "lg:hidden absolute z-30 bg-base-gradient sm:w-[37%] md:w-[35%] w-[60%] h-screen transform -translate-x-full transition-transform duration-500"
			)}
		>
			<ul className="mt-2 space-y-2">
				{tabs.map((tab) => (
					<li
						key={tab.href}
						className={clsx(
							pathname === tab.href
								? "bg-sidebar-button-bg ml-1 rounded-lg border-quinary border-solid border-2 w-[96%]"
								: ""
						)}
					>
						<Link
							onClick={() => setOpen(false)}
							href={tab.href}
							className={clsx(
								pathname === tab.href
									? "ml-4 bg-linear-gradient flex flex-col py-1.5 bg-clip-text text-transparent md:text-tertiary "
									: "ml-5 bg-linear-gradient flex flex-col py-1.5 bg-clip-text text-transparent md:text-tertiary "
							)}
						>
							{tab.name}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};
