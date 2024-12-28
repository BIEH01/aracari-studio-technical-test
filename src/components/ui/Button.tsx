export const Button = ({ text }: StringPropType) => {
	return (
		<div className="w-[100%] h-8 mx-auto bg-button-gradient rounded-full sm:mx-0 flex justify-center items-center sm:h-10">
			<button className="bg-button-color w-[99%] h-[90%] rounded-full hover:opacity-90 px-2">
				<p className="bg-linear-gradient bg-clip-text text-transparent sm:text-2xl sm:font-semibold">
					{text}
				</p>
			</button>
		</div>
	);
};
