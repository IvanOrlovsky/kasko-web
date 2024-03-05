"use client";

import { useFormContext } from "react-hook-form";
import { SimpleSelectProps } from "@/types/components/inputs/SimpleSelect";
import { cn } from "@/lib/utils";

export default function SimpleSelect({
	label,
	name,
	data,
	required,
	requiredMsg,
	defaultValue,
	className,
}: SimpleSelectProps) {
	const {
		formState: { errors },
		register,
	} = useFormContext();

	return (
		<div className="relative">
			<select
				// defaultValue={""}
				{...register(name, {
					shouldUnregister: true,
					required: required
						? {
								value: true,
								message: requiredMsg
									? requiredMsg
									: "Обязательное поле",
						  }
						: false,
				})}
				className={cn("floating-label-input peer", className, {
					"floating-label-input-error peer":
						errors[name]?.type === "required" ||
						errors[name]?.type === "pattern",
					"floating-label-input-warning peer":
						errors[name]?.type === "warning",
				})}
			>
				<option disabled value=""></option>
				{data.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
			<label
				unselectable="on"
				htmlFor={name}
				className={cn(
					"floating-label peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
					{
						"floating-label-error":
							errors[name]?.type === "required" ||
							errors[name]?.type === "pattern",
						"floating-label-warning":
							errors[name]?.type === "warning",
					}
				)}
			>
				{label}
			</label>
			{errors[name]?.message && (
				<label
					htmlFor={name}
					className={cn("kasko-subtext", {
						"kasko-subtext-error":
							errors[name]?.type === "required" ||
							errors[name]?.type === "pattern",
						"kasko-subtext-warning":
							errors[name]?.type === "warning",
					})}
				>
					{String(errors[name]?.message)}
				</label>
			)}
		</div>
	);
}
