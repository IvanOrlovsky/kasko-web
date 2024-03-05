import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";

import { useMainContext } from "@/contexts/MainContext";

import AutoData from "../../../../../public/datasets/AutoData.json";

export default function AutoSub() {
	const { autoData } = useMainContext();

	return (
		<>
			<SimpleSelect
				data={AutoData.map((auto) => auto.make)}
				name="make"
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
				data={AutoData.map((auto) => auto.releaseYear.toString())}
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
				defaultValue={autoData.todayCost}
			/>

			<section className="flex flex-col gap-3">
				<h2 className="kasko-subtext">
					Не обязательно для заполнения, но поможет лучше уточнить
					стоимость вашего автомобиля
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
	);
}
