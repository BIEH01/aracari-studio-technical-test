"use client";
import { useState } from "react";
import { Navbar } from "../Navbar";
import { SideBar } from "../Sidebar";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-base-gradient z-30 w-screen h-auto">
			<nav className="px-4 md:px-16 md:w-full md:py-7 h-14 md:h-24 relative">
				<div className="mx-auto flex justify-between items-center">
					<h2 className="text-white pb-2 text-lg md:pl-4 md:py-0 md:pb-4 text-center">
						Igualítika
					</h2>

					<div className="hidden lg:flex">
						<Navbar />
					</div>

					<div className="lg:hidden py-3 md:py-0">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="focus:outline-none text-tertiary"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d={
										isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
									}
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
			<SideBar open={isOpen} setOpen={setIsOpen} />
			{isOpen && (
				<div className="lg:hidden bg-gray-500 opacity-100 h-screen w-full z-20" />
			)}
		</header>
	);
};
