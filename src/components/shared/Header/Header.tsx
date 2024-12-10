import { Navbar } from "../Navbar";

export const Header = () => {
	return (
		<nav className="bg-[#0C1017] h-24 w-full text-white px-4 py-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<h2 className="text-white">Igualítika</h2>
				<Navbar />
			</div>
		</nav>
	);
};
