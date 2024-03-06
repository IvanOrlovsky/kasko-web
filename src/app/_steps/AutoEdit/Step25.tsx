"use client";

import { AutoFormValues } from "@/types/forms/AutoForm";

import FormBlock from "@/components/FormBlock";
import AutoDataInput from "../Auto/Step1Blocks/AutoDataInput";

import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

export default function AutoEdit() {
	const { autoData, setAutoData, setStep } = useMainContext();
	const form = useForm<AutoFormValues>({
		values: autoData,
	});

	const onSubmit = (data: AutoFormValues) => {
		setAutoData(data);
		setStep(1);
	};

	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				id="auto_edit_form"
				className="flex flex-col gap-4"
			>
				<FormBlock
					title="Автомобиль"
					forForm="auto_edit_form"
					hasSubmitBtn={true}
					submitBtnLabel="Сохранить изменения"
				>
					<AutoDataInput />
				</FormBlock>
			</form>
		</FormProvider>
	);
}
