"use client";

import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useMainContext } from "@/contexts/MainContext";
import InsuranceParams from "./Step2Blocks/InsuranceParams";

type FormValues = {
	region: string;
	repair: string;
	franchaise: string;
	insuranseDuration: string;
	dateOfAgreementBegin: string;
};

export default function Step2() {
	const form = useForm<FormValues>();

	const { setStep } = useMainContext();

	const onSubmit = (data: FormValues) => setStep((prev) => prev + 1);

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
