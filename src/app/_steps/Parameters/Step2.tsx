"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";
import InsuranceParams from "./Step2Blocks/InsuranceParams";
import { DevTool } from "@hookform/devtools";
import { ParametersFormValues } from "@/types/forms/ParametersForm";

export default function Step2() {
	const form = useForm<ParametersFormValues>({
		defaultValues: {
			region: {
				label: "Популярные",
				region: "Москва и Московская обл.",
				code: 1,
			},
			repair: "Дилерская СТОА",
			franchaise: "0",
			insuranseDuration: "",
			dateOfAgreementBegin: "",
		},
	});

	const { setStep } = useMainContext();

	const onSubmit = (data: ParametersFormValues) =>
		setStep((prev) => prev + 1);

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="parameters_form"
				className="flex flex-col gap-4"
			>
				<InsuranceParams />
			</form>
			<DevTool control={form.control} />
		</FormProvider>
	);
}
