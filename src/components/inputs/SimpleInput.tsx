"use client";

import { SimpleInputProps } from "@/types/components/inputs/SimpleInput";
import { useFormContext } from "react-hook-form";

export default function SimpleInput({
	name,
	required,
	helper,
	requiredMsg,
	placeholder,
	pattern,
	patternMsg,
}: SimpleInputProps) {
	const {
		register,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	return (
		<div className="relative">
			<input
				type="text"
				{...register(name, {
					onChange: () => {
						clearErrors(name);
					},
					shouldUnregister: true,
					required: required
						? {
								value: true,
								message: requiredMsg
									? requiredMsg
									: "Обязательное поле",
						  }
						: false,
					pattern: pattern
						? {
								value: pattern,
								message: patternMsg || "Неверный формат",
						  }
						: undefined,
				})}
				className={
					errors[name]
						? "floating-label-input-error peer"
						: "floating-label-input peer"
				}
				placeholder=" "
			/>
			<label
				htmlFor={name}
				className={
					errors[name]
						? "floating-label-error peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
						: "floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				}
			>
				{placeholder}
			</label>
			<label
				htmlFor={name}
				className={
					errors[name]?.message
						? "kasko-subtext-error"
						: "kasko-subtext"
				}
			>
				{errors[name]?.message ? String(errors[name]?.message) : helper}
			</label>
		</div>
	);
}
