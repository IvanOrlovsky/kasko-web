"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import CheckBox from "@/components/inputs/CheckBox";
import { useForm, FormProvider } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

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

	const { register, handleSubmit } = form;

	const { setStep } = useMainContext();

	const onSubmit = (data: FormValues) => setStep((prev) => prev + 1);

	return (
		<FormProvider {...form}>
			<form>
				<FormBlock title="Автомобиль">
					<>
						<CheckBox
							name="isCarRegistered"
							label="Авто еще не зарегистрировано"
							hint="Отметьте галочкой, если авто не зарегистрировано, чтобы перейти к заполнению данных об авто."
						/>
						{/* /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui */}
						<SimpleInput
							name="VIN"
							placeholder="A 000 AA 00"
							pattern={
								/^[АВЕКМНОРСТУХ]\s?\d{3}\s?[АВЕКМНОРСТУХ]{2}\s?\d{2,3}$/iu
							}
							patternMsg="Введенное значение не удволетворяет является госномером"
							helper="Введите госномер автомобиля чтобы мы нашли данные о нем"
						/>
						<button
							type="button"
							className="bg-[#1698D9] hover:bg-[#0e81bb] active:bg-[#0a5880] rounded-2xl mb-5 py-[15px] font-roboto text-white font-semibold text-lg"
						>
							Найти
						</button>
						<CheckBox
							name="hasActiveKasko"
							label="Есть действующий полис КАСКО"
							hint="Отметьте галочкой, если есть действующий полис КАСКО."
						/>
						<CheckBox
							name="isCarInCredit"
							label="Автомобиль в кредите"
							hint="Отметьте галочкой, если Автомобиль в кредите."
						/>
					</>
				</FormBlock>
			</form>
		</FormProvider>
	);
}
