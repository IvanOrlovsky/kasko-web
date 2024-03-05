"use client";

import { SimpleInputProps } from "@/types/components/inputs/SimpleInput";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

export default function SimpleInput({
	name,
	className,
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
		setError,
		watch,
	} = useFormContext();

	return (
		<div className="relative">
			<input
				type="text"
				{...register(name, {
					onChange: () => {
						if (!pattern) {
							clearErrors(name);
							return;
						}

						if (!pattern.test(watch(name)) && watch(name)) {
							setError(name, {
								type: "required",
								message:
									"Введенное значение не соотвествует формату госномера.",
							});
						} else {
							clearErrors(name);
						}
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
				className={cn("floating-label-input peer", className, {
					"floating-label-input-error peer": errors[name],
				})}
				placeholder=" "
			/>
			<label
				unselectable="on"
				htmlFor={name}
				className={cn(
					"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
					{
						"floating-label-error": errors[name],
					}
				)}
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
