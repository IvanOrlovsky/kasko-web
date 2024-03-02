import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import CheckBox from "@/components/inputs/CheckBox";
import { useFormContext } from "react-hook-form";

import AutoData from "../../../../public/datasets/AutoData.json";

export default function Auto() {
	const { register, watch, trigger } = useFormContext();

	return (
		<FormBlock title="Автомобиль">
			<>
				<CheckBox
					name="isCarRegistered"
					label="Авто еще не зарегистрировано"
					hint="Отметьте галочкой, если авто не зарегистрировано, чтобы перейти к заполнению данных об авто."
				/>
				{!watch("isCarRegistered") && (
					<>
						<SimpleInput
							name="GOSnumber"
							placeholder="A 000 AA 00"
							pattern={
								/^[АВЕКМНОРСТУХ]\s?\d{3}\s?[АВЕКМНОРСТУХ]{2}\s?\d{2,3}$/iu
							}
							required={!watch("isCarRegistered")}
							requiredMsg="Если авто зарегистрировано, то необходимо ввести госномер."
							patternMsg="Введенное значение не удволетворяет является госномером. Пример: А 000 АА 00"
							helper="Введите госномер автомобиля чтобы мы нашли данные о нем"
						/>
						<button
							type="button"
							className="bg-[#1698D9] hover:bg-[#0e81bb] active:bg-[#0a5880] rounded-2xl mb-5 py-[15px] font-roboto text-white font-semibold text-lg"
							onClick={() => trigger("GOSnumber")}
						>
							Найти
						</button>
					</>
				)}
				{watch("isCarRegistered") && (
					<>
						<SimpleSelect
							data={AutoData.map((auto) => auto.make)}
							name="made"
							label="Марка"
							required={watch("isCarRegistered")}
							requiredMsg="Вы не ввели марку авто!"
						></SimpleSelect>
						<SimpleSelect
							data={AutoData.map((auto) => auto.model)}
							name="model"
							label="Модель"
							required={watch("isCarRegistered")}
							requiredMsg="Вы не ввели модель авто!"
						></SimpleSelect>
						<button
							type="button"
							className="bg-[#1698D9] hover:bg-[#0e81bb] active:bg-[#0a5880] rounded-2xl mb-5 py-[15px] font-roboto text-white font-semibold text-lg"
							onClick={() => {
								trigger("made");
								trigger("model");
							}}
						>
							Найти
						</button>
					</>
				)}

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
	);
}
