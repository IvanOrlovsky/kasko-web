"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import DateInput from "@/components/inputs/DataInput";
import CheckSwitch from "@/components/inputs/CheckSwitch";
import SmsCode from "@/components/inputs/SmsCode";

import Swal from "sweetalert2";

import { useMainContext } from "@/contexts/MainContext";
import { useFormContext } from "react-hook-form";
import { FormEvent } from "react";

export default function Insurant() {
	const { showSmsInput, setShowSmsInput, setPersonalData, setPersonalStep } =
		useMainContext();
	const { watch, trigger } = useFormContext();

	const handleAuthorisation = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (await trigger("smsCode")) {
			if (watch("isPulseClient")) {
				setPersonalData((prev) => ({
					...prev,
					phoneNumber: "89158952788",
					surname: "Иванов",
					name: "Иван",
					patronymic: "Иванович",
					birthday: new Date().toDateString(),
					passportNumber: "29 17 111222",
					passportGivenBy: "МВД по Калужской Области",
					passportGivenDate: new Date().toDateString(),
					registrationLocation: "Калужская область, город Обнинск",
					email: "ivanov@gmail.com",
				}));
			} else {
				setPersonalData((prev) => ({
					...prev,
					phoneNumber: watch("phoneNumber"),
					surname: watch("surname"),
					name: watch("name"),
					patronymic: watch("patronymic"),
					birthday: watch("birthday"),
					passportNumber: watch("passportNumber"),
					passportGivenBy: watch("passportGivenBy"),
					passportGivenDate: watch("passportGivenDate"),
					registrationLocation: watch("registrationLocation"),
					email: watch("email"),
				}));
			}
			setPersonalStep((prev) => prev + 1);
		}
	};

	return (
		<FormBlock
			forForm=""
			title={
				!watch("isPulseClient") ? "Страхователь" : "Кто оформляет полис"
			}
			hasSubmitBtn={!showSmsInput}
			submitBtnLabel="Продолжить"
			onClickBtn={async () => {
				if (await trigger()) {
					setShowSmsInput(true);
				}
			}}
		>
			<form
				id="auth"
				onSubmit={(e) => {
					handleAuthorisation(e);
				}}
			></form>
			<>
				<CheckSwitch name="isPulseClient" label='Я клиент СК "Пульс"' />
				<SimpleInput
					name="phoneNumber"
					placeholder="Телефон"
					required={true}
				/>
				{!watch("isPulseClient") && <NotPulseClientData />}
				{!showSmsInput && (
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
				{showSmsInput && <SmsCode name="smsCode" forForm="auth" />}
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
