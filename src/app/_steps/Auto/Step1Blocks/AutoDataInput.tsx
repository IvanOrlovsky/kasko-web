//компоненты
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
//хуки
import { useMainContext } from "@/contexts/MainContext";
//данные
import AutoData from "../../../../../public/datasets/AutoData.json";

export default function AutoDataInput() {
	const { autoData, carFoundStatus } = useMainContext();
	return (
		<>
			<SimpleSelect
				data={AutoData.map((auto) => auto.make)}
				name="make"
				label="Марка"
				required={true}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.make
						? autoData.make
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.model)}
				name="model"
				label="Модель"
				required={true}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.model
						? autoData.model
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.releaseYear)}
				name="releaseYear"
				label="Год выпуска"
				required={true}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.releaseYear
						? autoData.releaseYear
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.power)}
				name="power"
				label="Мощность"
				required={true}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.power
						? autoData.power
						: undefined
				}
			></SimpleSelect>
			<SimpleInput
				name="todayCost"
				placeholder="Текущая рыночная стоимость"
				pattern={/^\d+$/}
				patternMsg="Вы ввели не число!"
				required={true}
				defaultValue={autoData.todayCost}
			/>
			<NotRequiredSection />
		</>
	);
}

function NotRequiredSection() {
	const { autoData, carFoundStatus } = useMainContext();

	return (
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
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.bodyType
						? autoData.bodyType
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.gearBoxType)}
				name="gearBoxType"
				label="Тип КПП"
				required={false}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.gearBoxType
						? autoData.gearBoxType
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.engine)}
				name="engine"
				label="Двигатель"
				required={false}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.engine
						? autoData.engine
						: undefined
				}
			></SimpleSelect>
			<SimpleSelect
				data={AutoData.map((auto) => auto.modification)}
				name="modification"
				label="Модификация"
				required={false}
				staticValue={
					carFoundStatus === "NOT_ALL" && !!autoData.modification
						? autoData.modification
						: undefined
				}
			></SimpleSelect>
			<div className="mt-4">
				<SimpleInput
					name="mileage"
					placeholder="Приблизительный пробег, км"
					pattern={/^\d+$/}
					patternMsg="Вы ввели не число!"
					required={false}
					disabled={
						carFoundStatus === "NOT_ALL" && !!autoData.mileage
					}
				/>
			</div>
		</section>
	);
}
