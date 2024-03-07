"use client";

import { PersonalDataValues } from "@/types/forms/PersonalDataForm";

import Insurant from "./Step4Blocks/Insurant";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

import AutoOwner from "./Step4Blocks/AutoOwner";
import Drivers from "./Step4Blocks/Drivers";

import { DevTool } from "@hookform/devtools";

export default function PersonalData() {
	const { personalData, setPersonalData } = useMainContext();

	const form = useForm<PersonalDataValues>({
		values: { ...personalData },
		shouldUnregister: true,
	});

	const onSubmit = (data: PersonalDataValues) => {
		if (form.watch("isPulseClient")) {
		}
		setPersonalData(data);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="personal_data_form"
				className="flex flex-col gap-4"
			></form>
			<Insurant />
			{!form.watch("isPulseClient") && (
				<>
					<AutoOwner />
					<Drivers />
				</>
			)}
			<DevTool control={form.control} />
		</FormProvider>
	);
}
