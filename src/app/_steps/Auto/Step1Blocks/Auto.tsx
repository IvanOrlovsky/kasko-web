import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import CheckBox from "@/components/inputs/CheckBoxes";
import { useFormContext } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

import AutoData from "../../../../../public/datasets/AutoData.json";
import RegisteredAuto from "../../../../../public/datasets/RegisteredAuto.json";
import { hasEmptyFields } from "@/lib/utils";
import AutoSub from "./AutoSub";

export default function Auto() {
	const { watch, setError, setValue } = useFormContext();
	const { carFoundStatus, setCarFoundStatus, setAutoData } = useMainContext();

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
						{carFoundStatus === "NOT_ENTERED" && (
							<button
								type="button"
								className="bg-kasko-blue"
								onClick={() => {
									const foundedCar = RegisteredAuto.find(
										(car) =>
											car.GOSnumber ===
											watch("GOSnumber").toUpperCase()
									);

									if (!foundedCar) {
										setCarFoundStatus("NOT_FOUND");
										setError("GOSnumber", {
											message:
												"Не удалость получить данные авто по этому госномеру. Если номер введен правильно, укажите данные вручную",
										});
									} else {
										if (
											hasEmptyFields(foundedCar, [
												"bodyType",
												"gearBoxType",
												"engine",
												"modification",
											])
										) {
											setError("GOSnumber", {
												type: "warning",
												message:
													"Удалось получить не все данные авто по этому госномеру. Пожалуйста, заполните недостающие поля.",
											});
											setAutoData({
												...foundedCar,
												isCarRegistered: true,
												power: "",
												todayCost: "",
												mileage: "",
												minDriversAge: "",
												minDriversExp: "",
												hasActiveKasko: false,
												isCarInCredit: false,
											});
											setCarFoundStatus("NOT_ALL");
										}
									}
								}}
							>
								Найти
							</button>
						)}
					</>
				)}
				{(watch("isCarRegistered") ||
					carFoundStatus === "NOT_FOUND" ||
					carFoundStatus === "NOT_ALL") && <AutoSub />}

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
