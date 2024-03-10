"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import DateInput from "@/components/inputs/DataInput";
import CheckBox from "@/components/inputs/CheckBoxes";

import { useFormContext } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

export default function AutoOwner() {
	const { watch, trigger } = useFormContext();
	const { setPersonalStep, setPersonalData, personalData } = useMainContext();

	return (
		<FormBlock
			title="Владелец авто"
			hasSubmitBtn={true}
			forForm=""
			submitBtnLabel="Продолжить"
			onClickBtn={async () => {
				if (await trigger()) {
					if (watch("isInsurantOwner")) {
						setPersonalData((prev) => ({
							...prev,
							isInsurantOwner: true,
							ownerFullName:
								personalData.surname +
								" " +
								personalData.name +
								" " +
								personalData.patronymic,
							ownerBirthday: personalData.birthday,
							ownerPassportNumber: personalData.passportNumber,
							ownerPassportGivenBy: personalData.passportGivenBy,
							ownerPassportGivenDate:
								personalData.passportGivenDate,
							ownerRegistrationLocation:
								personalData.registrationLocation,
						}));
					} else {
						setPersonalData((prev) => ({
							...prev,
							isInsurantOwner: false,
							ownerFullName: watch("ownerFullName"),
							ownerBirthday: watch("ownerBirthday"),
							ownerPassportNumber: watch("ownerPassportNumber"),
							ownerPassportGivenBy: watch("ownerPassportGivenBy"),
							ownerPassportGivenDate: watch(
								"ownerPassportGivenDate"
							),
							ownerRegistrationLocation: watch(
								"ownerRegistrationLocation"
							),
						}));
					}
					setPersonalStep((prev) => prev + 1);
				}
			}}
		>
			<CheckBox
				name="isInsurantOwner"
				label="Страхователь является владельцем"
			/>
			{!watch("isInsurantOwner") && (
				<>
					<SimpleInput
						name="ownerFullName"
						placeholder="ФИО"
						required={true}
					/>
					<DateInput name="ownerBirthday" label="Дата рождения" />
					<SimpleInput
						name="ownerPassportNumber"
						placeholder="Серия и номер паспорта"
						required={true}
					/>
					<SimpleInput
						name="ownerPassportGivenBy"
						placeholder="Кем выдан"
						required={true}
					/>
					<DateInput
						name="ownerPassportGivenDate"
						label="Дата выдачи"
					/>
					<SimpleInput
						name="ownerRegistrationLocation"
						placeholder="Адрес регистрации"
						required={true}
					/>
				</>
			)}
		</FormBlock>
	);
}
