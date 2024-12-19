import clsx from "clsx";

export const Button = ({ text }: StringPropType) => {
	return (
		<div className="w-fit h-fit p-0.5 mx-auto bg-button-gradient rounded-full sm:mx-0">
			<button
				className={clsx(
					text === "Buscar"
						? "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-32 md:px-36 lg:px-64"
						: "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-12",
					text === "¡Hablemos!"
						? "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-20  lg:px-16"
						: "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-12",
					text === "Regístrate"
						? "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-28 sm:px-44 lg:px-28"
						: "bg-button-color w-auto h-auto rounded-full hover:opacity-90 py-1 px-12"
				)}
			>
				<p className="bg-linear-gradient bg-clip-text text-transparent md:text-lg lg:text-2xl">
					{text}
				</p>
			</button>
		</div>
	);
};
