"use client";

import InsuranseRisks from "./Step3Blocks/InsuranceRisks";
import OptFeatures from "./Step3Blocks/OptFeatures";
import Service from "./Step3Blocks/Service";

import { RisksFormValues } from "@/types/forms/RisksForm";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

import { DevTool } from "@hookform/devtools";

export default function Step3() {
	const { risksData, setRisksData, setStep } = useMainContext();
	const form = useForm<RisksFormValues>({
		values: { ...risksData },
	});

	const onSubmit = (data: RisksFormValues) => {
		setRisksData(data);
		setStep((prev) => prev + 1);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="riskss_form"
				className="flex flex-col gap-4"
			>
				<InsuranseRisks />
				<Service />
				<OptFeatures />
			</form>
			{/* <DevTool control={form.control} /> */}
		</FormProvider>
	);
}
