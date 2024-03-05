"use client";
import { FormBlockProps } from "@/types/components/FormBlock";
import { useFormContext } from "react-hook-form";

export default function FormBlock({
	title,
	hasSubmitBtn,
	submitBtnLabel,
	forForm,
	children,
}: FormBlockProps) {
	const { trigger } = useFormContext();
	return (
		<section className="flex flex-col gap-3 rounded-3xl bg-white pt-5 px-4 pb-5">
			<h2 className="w-fit mb-4">{title}</h2>
			{children}
			{hasSubmitBtn && (
				<button
					type="submit"
					form={forForm}
					onClick={() => trigger("todayCost")}
					className="bg-kasko-blue  mb-5"
				>
					{submitBtnLabel}
				</button>
			)}
		</section>
	);
}
