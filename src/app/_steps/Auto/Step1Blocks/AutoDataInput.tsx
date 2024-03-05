//компоненты
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
//хуки
import { useMainContext } from "@/contexts/MainContext";
//данные
import AutoData from "../../../../../public/datasets/AutoData.json";

export default function AutoDataInput() {
	const { step, autoData, carFoundStatus } = useMainContext();
	return (
		<>
			<SimpleSelect
				data={AutoData.map((auto) => auto.make)}
				name="make"
				label="Марка"
				required={true}
				staticValue={
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.make
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.model
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.releaseYear
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.power
						? autoData.power
						: undefined
				}
			></SimpleSelect>

			<NotRequiredSection />
		</>
	);
}

function NotRequiredSection() {
	const { step, autoData, carFoundStatus } = useMainContext();

	return (
		<section className="flex flex-col gap-3 my-4">
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.bodyType
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.gearBoxType
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" && !!autoData.engine
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
					step === 2.5
						? undefined
						: carFoundStatus === "NOT_ALL" &&
						  !!autoData.modification
						? autoData.modification
						: undefined
				}
			></SimpleSelect>
		</section>
	);
}
