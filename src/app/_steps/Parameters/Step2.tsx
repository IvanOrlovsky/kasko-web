"use client";
//типы
import { ParametersFormValues } from "@/types/forms/ParametersForm";
//хуки
import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";
//блоки
import InsuranceParams from "./Step2Blocks/InsuranceParams";

import { DevTool } from "@hookform/devtools";

export default function Step2() {
	const { setStep, paramsData, setParamsData } = useMainContext();

	const form = useForm<ParametersFormValues>({
		defaultValues: { ...paramsData },
	});

	const onSubmit = (data: ParametersFormValues) => {
		setStep((prev) => prev + 1);
		setParamsData(data);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="parameters_form"
				className="flex flex-col gap-4"
			>
				<InsuranceParams />
			</form>
			{/* <DevTool control={form.control} /> */}
		</FormProvider>
	);
}
