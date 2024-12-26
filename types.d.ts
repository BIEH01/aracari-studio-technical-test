type StateTypeProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type StringPropType = {
	text: string;
};

type ContextLegalType = {
	id: number;
	subtitle: string;
	text: string;
};

type LegalCardType = {
	id: number;
	title: string;
	context: ContextLegalType[];
	cta: string;
};

type TrainingCardType = {
	id: number;
	img: string;
	title: string;
	subtitle: string;
	instructor: string;
	price: string;
};
