"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";
import { DevTool } from "@hookform/devtools";
import Auto from "./Step1Blocks/Auto";
import DocTS from "./Step1Blocks/DocTS";
import Drivers from "./Step1Blocks/Drivers";
import { AutoFormValues } from "@/types/forms/AutoForm";

export default function Step1() {
	const { setStep, autoData, setAutoData } = useMainContext();

	const form = useForm<AutoFormValues>({
		values: autoData,
		shouldUnregister: true,
	});

	const onSubmit = (data: AutoFormValues) => {
		setStep((prev) => prev + 1);
		setAutoData(data);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="auto_form"
				className="flex flex-col gap-4"
			>
				<Auto />
				<DocTS />
				<Drivers />
			</form>
			<DevTool control={form.control} />
		</FormProvider>
	);
}
