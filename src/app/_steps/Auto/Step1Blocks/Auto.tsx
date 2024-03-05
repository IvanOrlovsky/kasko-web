//компоненты
import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import CheckBox from "@/components/inputs/CheckBoxes";
//блоки
import AutoDataInput from "./AutoDataInput";
//хуки
import { useFormContext } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";
//данные
import RegisteredAuto from "../../../../../public/datasets/RegisteredAuto.json";
//вспомогательные функции
import { hasEmptyFields } from "@/lib/utils";

export default function Auto() {
	const { watch, setError } = useFormContext();
	const { carFoundStatus, setCarFoundStatus, setAutoData, autoData } =
		useMainContext();

	return (
		<FormBlock title="Автомобиль">
			<>
				{carFoundStatus !== "NOT_ALL" && (
					<CheckBox
						name="isCarRegistered"
						label="Авто еще не зарегистрировано"
						hint="Отметьте галочкой, если авто не зарегистрировано, чтобы перейти к заполнению данных об авто."
					/>
				)}
				{(!watch("isCarRegistered") ||
					carFoundStatus === "NOT_ALL") && (
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
							disabled={
								carFoundStatus === "NOT_ALL" && !!autoData.make
							}
							helper={
								carFoundStatus === "NOT_ALL"
									? ""
									: 'Введите госномер автомобиля чтобы мы нашли данные о нем. \n Подсказка: "У 888 ВВ 11" - номер авто, с неполными данными '
							}
						/>

						{carFoundStatus === "NOT_ALL" && (
							<div className="floating-label-input-warning">
								Удалось получить не все данные авто по этому
								госномеру. Пожалуйста, заполните недостающие
								поля.
							</div>
						)}

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
											type: "required",
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
											setAutoData({
												...foundedCar,
												isCarRegistered: true,
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
					carFoundStatus === "NOT_ALL") && <AutoDataInput />}

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
