"use client";

import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useMainContext } from "@/contexts/MainContext";
import Auto from "./Step1Blocks/Auto";

type FormValues = {
	isCarRegistered: boolean;
	GOSnumber: string;
	make: string;
	model: string;
	releaseYear: string;
	power: string;
	bodyType: string;
	gearBoxType: string;
	engine: string;
	modification: string;
	todayCost: string;
	mileage: string;
	minDriversAge: string;
	minDriversExp: string;
	hasActiveKasko: boolean;
	isCarInCredit: boolean;
	TSdocument: string;
	PTSnumber: string;
	VIN: string;
};

export default function Step1() {
	const form = useForm<FormValues>({
		defaultValues: {
			isCarRegistered: false,
			GOSnumber: "",
			make: "",
			model: "",
			releaseYear: "",
			power: "",
			bodyType: "",
			gearBoxType: "",
			engine: "",
			modification: "",
			todayCost: "",
			mileage: "",
			minDriversAge: "",
			minDriversExp: "",
			hasActiveKasko: false,
			isCarInCredit: false,
			TSdocument: "",
			PTSnumber: "",
			VIN: "",
		},
	});

	const { register, handleSubmit, trigger, watch } = form;

	const { setStep } = useMainContext();

	const onSubmit = (data: FormValues) => setStep((prev) => prev + 1);

	return (
		<FormProvider {...form}>
			<form>
				<Auto />
			</form>
			<DevTool control={form.control} />
		</FormProvider>
	);
}
