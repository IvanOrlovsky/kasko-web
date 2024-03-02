type SubmitFormBlockProps = {
	title: string;
	hasSubmitBtn: boolean;
	submitBtnLabel: string;
	forForm: string;
	children: React.ReactNode;
};

type FormBlockProps = {
	title: string;
	hasSubmitBtn: undefined;
	submitBtnLabel: undefined;
	forForm: undefined;
	children: React.ReactNode;
};

export default function FormBlock({
	title,
	hasSubmitBtn,
	submitBtnLabel,
	forForm,
	children,
}: SubmitFormBlockProps | FormBlockProps) {
	return (
		<section className="flex flex-col rounded-3xl bg-white pt-5 px-4">
			<h1 className="font-roboto text-xl sm:text-2xl w-fit font-semibold text-[#1F232B] mb-4">
				{title}
			</h1>
			{children}
			{hasSubmitBtn && (
				<button
					type="submit"
					form={forForm}
					className="bg-[#1698D9] rounded-2xl mb-5 font-roboto text-white font-semibold text-lg"
				>
					{submitBtnLabel}
				</button>
			)}
		</section>
	);
}
