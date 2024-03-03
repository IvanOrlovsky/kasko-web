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
			<h1 className="font-roboto text-xl sm:text-2xl w-fit font-semibold text-[#1F232B] mb-4">
				{title}
			</h1>
			{children}
			{hasSubmitBtn && (
				<button
					type="submit"
					form={forForm}
					onClick={() => trigger("todayCost")}
					className="bg-[#1698D9] hover:bg-[#0e81bb] active:bg-[#0a5880]  py-[15px] rounded-2xl mb-5 font-roboto text-white font-semibold text-lg"
				>
					{submitBtnLabel}
				</button>
			)}
		</section>
	);
}
