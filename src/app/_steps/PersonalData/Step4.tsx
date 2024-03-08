"use client";

import { PersonalDataValues } from "@/types/forms/PersonalDataForm";

import Insurant from "./Step4Blocks/Insurant";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

import AutoOwner from "./Step4Blocks/AutoOwner";
import Drivers from "./Step4Blocks/Drivers";

import { DevTool } from "@hookform/devtools";

export default function PersonalData() {
	const { personalData, setPersonalData, personalStep, setStep } =
		useMainContext();

	const form = useForm<PersonalDataValues>({
		values: { ...personalData },
		shouldUnregister: true,
	});

	const onSubmit = (data: PersonalDataValues) => {
		setPersonalData((prev) => ({ ...prev, drivers: data.drivers }));
		setStep((prev) => prev + 1);
	};
	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="personal_data_form"
				className="flex flex-col gap-4"
			></form>

			{personalStep === 1 && <Insurant />}
			{personalStep === 2 && <AutoOwner />}
			{personalStep === 3 && <Drivers />}

			{/* <DevTool control={form.control} /> */}
		</FormProvider>
	);
}
