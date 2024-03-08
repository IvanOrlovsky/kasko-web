"use client";

import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import DateInput from "@/components/inputs/DataInput";
import CheckBox from "@/components/inputs/CheckBoxes";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useFormContext, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import { useMainContext } from "@/contexts/MainContext";

import Swal from "sweetalert2";

export default function Drivers() {
	const { watch, control, setValue, trigger } = useFormContext();
	const { personalData } = useMainContext();
	const { fields, append, remove } = useFieldArray({
		name: "drivers",
		control,
	});

	useEffect(() => {
		if (watch("isInsurantDriver")) {
			setValue(
				"drivers.0.fullName",
				personalData.surname +
					" " +
					personalData.name +
					" " +
					personalData.patronymic
			);
			setValue("drivers.0.birthday", personalData.birthday);
		}
	}, [watch("isInsurantDriver")]);

	return (
		<FormBlock
			title="Водители"
			forForm="personal_data_form"
			hasSubmitBtn={true}
			submitBtnLabel="Продолжить"
		>
			<CheckBox
				name="isInsurantDriver"
				label="Страхователь является водителем"
			/>

			{fields.map((field, index) => {
				if (index === 0) {
					return (
						<div
							key={field.id}
							className="flex flex-col gap-4 pb-2"
						>
							<h2 className="flex flex-row gap-2">
								<div className="rounded-full bg-kasko-blue text-white text-center w-8 h-8">
									{index + 1}
								</div>
								Водитель - вы
							</h2>
							<SimpleInput
								name={`drivers.${index}.fullName`}
								placeholder="ФИО"
								required={true}
								disabled={watch("isInsurantDriver")}
							/>
							<DateInput
								name={`drivers.${index}.birthday`}
								label="Дата рождения"
								disabled={watch("isInsurantDriver")}
							/>
							<SimpleInput
								name={`drivers.${index}.driverLicenceNumber`}
								placeholder="Серия и номер ВУ"
								required={true}
							/>
							<SimpleInput
								name={`drivers.${index}.beginOfExpDate`}
								placeholder="Год начала стажа"
								required={true}
							/>
						</div>
					);
				}
				return (
					<div key={field.id} className="flex flex-col gap-4 pb-2">
						<h2 className="flex flex-row gap-2">
							<div className="rounded-full bg-kasko-blue text-white text-center w-8 h-8">
								{index + 1}
							</div>
							Водитель
						</h2>
						<SimpleInput
							name={`drivers.${index}.fullName`}
							placeholder="ФИО"
							required={true}
						/>
						<SimpleInput
							name={`drivers.${index}.birthday`}
							placeholder="Дата рождения"
							required={true}
						/>
						<SimpleInput
							name={`drivers.${index}.driverLicenceNumber`}
							placeholder="Серия и номер ВУ"
							required={true}
						/>
						<SimpleInput
							name={`drivers.${index}.beginOfExpDate`}
							placeholder="Год начала стажа"
							required={true}
						/>
						<span
							className="text-[#F3566A] hover:underline hover:cursor-pointer"
							onClick={() => {
								remove(index);
							}}
						>
							<DeleteOutlineIcon /> Удалить водителя
						</span>
					</div>
				);
			})}
			<span
				className="text-kasko-blue hover:underline hover:cursor-pointer"
				onClick={() => {
					append({
						fullName: "",
						birthday: "",
						driverLicenceNumber: "",
						beginOfExpDate: "",
					});
				}}
			>
				<AddIcon /> Добавить еще
			</span>

			<div className="kasko-subtext">
				Нажимая кнопку «Продолжить», вы принимаете условия{" "}
				<span
					className="text-kasko-blue hover:underline hover:cursor-pointer"
					onClick={() => Swal.fire("Пользовательское соглашение")}
				>
					пользовательского соглашения
				</span>
			</div>
		</FormBlock>
	);
}
