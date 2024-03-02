type SubmitFormBlockProps = {
	title: string;
	hasSubmitBtn: boolean;
	submitBtnLabel: string;
	children: React.ReactNode;
};

type FormBlockProps = {
	title: string;
	hasSubmitBtn: undefined;
	submitBtnLabel: undefined;
	children: React.ReactNode;
};

export default function FormBlock({
	title,
	hasSubmitBtn,
	submitBtnLabel,
	children,
}: SubmitFormBlockProps | FormBlockProps) {}
