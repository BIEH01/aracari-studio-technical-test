import Link from "next/link";

export const SideBar = () => {
	return (
		<aside className="lg:hidden absolute z-30 bg-base-gradient w-[60%] h-screen">
			<ul className="ml-5 mt-3 space-y-2 text-white">
				<li className="text-white">
					<Link href="/home" className="hover:text-gray-300">
						Inicio
					</Link>
				</li>
			</ul>
		</aside>
	);
};
