"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import DateInput from "@/components/inputs/DataInput";
import CheckBox from "@/components/inputs/CheckBoxes";

import { useFormContext } from "react-hook-form";

export default function AutoOwner() {
	const { watch } = useFormContext();

	return (
		<FormBlock
			title="Владелец авто"
			hasSubmitBtn={false}
			forForm=""
			submitBtnLabel=""
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
