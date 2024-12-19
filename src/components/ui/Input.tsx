export const Input = ({ text }: StringPropType) => {
	return (
		<div className="min-w-52 max-w-[98%] w-auto h-9 mx-auto bg-button-gradient rounded-full flex items-center justify-center my-1 md:h-12 md:mx-0 md:w-[50%] lg:w-[48%]">
			<input
				className="bg-button-color w-[99%] h-[92%] rounded-full px-4"
				placeholder={text}
			/>
		</div>
	);
};
