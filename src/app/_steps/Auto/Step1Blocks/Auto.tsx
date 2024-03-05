import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import CheckBox from "@/components/inputs/CheckBoxes";
import { useFormContext } from "react-hook-form";

import AutoData from "../../../../../public/datasets/AutoData.json";
import RegisteredAuto from "../../../../../public/datasets/RegisteredAuto.json";

export default function Auto() {
	const { watch, setError } = useFormContext();

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
							className="uppercase"
							placeholder="A 000 AA 00"
							pattern={
								/^[АВЕКМНОРСТУХавекмнорстухABEKMHOPCTYXabekmhopctyx]\s\d{3}\s[АВЕКМНОРСТУХавекмнорстухABEKMHOPCTYXabekmhopctyx]{2}\s\d{2}$/
							}
							patternMsg=""
							required={!watch("isCarRegistered")}
							requiredMsg="Если авто зарегистрировано, то необходимо ввести госномер."
							helper="Введите госномер автомобиля чтобы мы нашли данные о нем"
						/>
						<button
							type="button"
							className="bg-kasko-blue"
							onClick={() => {
								console.log(watch("GOSnumber").toUpperCase());
								const foundedCar = RegisteredAuto.find(
									(car) =>
										car.GOSnumber ===
										watch("GOSnumber").toUpperCase()
								);
							}}
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
							required={true}
						></SimpleSelect>
						<SimpleSelect
							data={AutoData.map((auto) => auto.model)}
							name="model"
							label="Модель"
							required={true}
						></SimpleSelect>
						<SimpleSelect
							data={AutoData.map((auto) =>
								auto.releaseYear.toString()
							)}
							name="releaseYear"
							label="Год выпуска"
							required={true}
						></SimpleSelect>
						<SimpleSelect
							data={AutoData.map((auto) => auto.power)}
							name="power"
							label="Мощность"
							required={true}
						></SimpleSelect>
						<SimpleInput
							name="todayCost"
							placeholder="Текущая рыночная стоимость"
							pattern={/^\d+$/}
							patternMsg="Вы ввели не число!"
							required={true}
						/>

						<section className="flex flex-col gap-3">
							<h2 className="kasko-subtext">
								Не обязательно для заполнения, но поможет лучше
								уточнить стоимость вашего автомобиля
							</h2>
							<SimpleSelect
								data={AutoData.map((auto) => auto.bodyType)}
								name="bodyType"
								label="Тип кузова"
								required={false}
							></SimpleSelect>
							<SimpleSelect
								data={AutoData.map((auto) => auto.gearBoxType)}
								name="gearBoxType"
								label="Тип КПП"
								required={false}
							></SimpleSelect>
							<SimpleSelect
								data={AutoData.map((auto) => auto.engine)}
								name="engine"
								label="Двигатель"
								required={false}
							></SimpleSelect>
							<SimpleSelect
								data={AutoData.map((auto) => auto.modification)}
								name="modification"
								label="Модификация"
								required={false}
							></SimpleSelect>
							<div className="mt-4">
								<SimpleInput
									name="mileage"
									placeholder="Приблизительный пробег, км"
									pattern={/^\d+$/}
									patternMsg="Вы ввели не число!"
									required={false}
								/>
							</div>
						</section>
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
