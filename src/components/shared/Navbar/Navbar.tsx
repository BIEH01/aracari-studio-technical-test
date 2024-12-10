"use client";
import Link from "next/link";
import { useState } from "react";
import { SideBar } from "../Sidebar";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="hidden md:flex space-x-6">
				<Link href="/home" className="hover:text-gray-300">
					Inicio
				</Link>
				<Link href="/about" className="hover:text-gray-300">
					Sobre mí
				</Link>
				<Link href="/contact" className="hover:text-gray-300">
					Contacto
				</Link>
			</div>

			<div className="md:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
						/>
					</svg>
				</button>
			</div>
			{isOpen && <SideBar />}
		</>
	);
};
