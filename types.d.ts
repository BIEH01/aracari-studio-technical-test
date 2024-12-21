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
	callToAction: string;
};
