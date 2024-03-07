"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import DateInput from "@/components/inputs/DataInput";
import CheckSwitch from "@/components/inputs/CheckSwitch";
import SmsCode from "@/components/inputs/SmsCode";

import Swal from "sweetalert2";

import { useMainContext } from "@/contexts/MainContext";
import { useFormContext } from "react-hook-form";

export default function Insurant() {
	const { showSmsInput, setShowSmsInput } = useMainContext();
	const { watch, trigger } = useFormContext();

	if (!watch("isPulseClient")) {
		setShowSmsInput(false);
	}

	return (
		<FormBlock
			forForm=""
			title={
				!watch("isPulseClient") ? "Страхователь" : "Кто оформляет полис"
			}
			hasSubmitBtn={watch("isPulseClient") && !showSmsInput}
			submitBtnLabel="Продолжить"
			onClickBtn={async () => {
				if (await trigger("phoneNumber")) {
					setShowSmsInput(true);
				}
			}}
		>
			<>
				<CheckSwitch name="isPulseClient" label='Я клиент СК "Пульс"' />
				<SimpleInput
					name="phoneNumber"
					placeholder="Телефон"
					required={true}
				/>
				{!watch("isPulseClient") && <NotPulseClientData />}
				{watch("isPulseClient") && !showSmsInput && (
					<div className="kasko-subtext">
						Нажимая кнопку «Продолжить», вы принимаете условия{" "}
						<span
							className="text-kasko-blue hover:underline hover:cursor-pointer"
							onClick={() =>
								Swal.fire("Пользовательское соглашение")
							}
						>
							пользовательского соглашения
						</span>
					</div>
				)}
				{showSmsInput && watch("isPulseClient") && (
					<SmsCode name="smsCode" forForm="personal_data_form" />
				)}
			</>
		</FormBlock>
	);
}

function NotPulseClientData() {
	return (
		<>
			<SimpleInput name="surname" placeholder="Фамилия" required={true} />
			<SimpleInput name="name" placeholder="Имя" required={true} />
			<SimpleInput
				name="patronymic"
				placeholder="Отчество"
				required={true}
			/>
			<DateInput name="birthday" label="Дата рождения" />
			<SimpleInput
				name="passportNumber"
				placeholder="Серия и номер паспорта"
				required={true}
			/>
			<SimpleInput
				name="passportGivenBy"
				placeholder="Кем выдан"
				required={true}
			/>
			<DateInput name="passportGivenDate" label="Дата выдачи" />
			<SimpleInput
				name="registrationLocation"
				placeholder="Адрес регистрации"
				required={true}
			/>
			<SimpleInput
				name="email"
				type="email"
				placeholder="Email"
				required={true}
				helper="На эту почту мы направим полис"
			/>
		</>
	);
}
