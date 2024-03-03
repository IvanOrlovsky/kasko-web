"use client";

import { useFormContext, Controller } from "react-hook-form";

type SimpleInputProps = {
	label?: string;
	name: string;
	required?: boolean;
	requiredMsg?: string;
	helper?: string;
	placeholder?: string;
	pattern?: RegExp;
	patternMsg?: string;
};

export default function SimpleInput({
	label,
	name,
	required,
	helper,
	requiredMsg,
	placeholder,
	pattern,
	patternMsg,
}: SimpleInputProps) {
	const {
		control,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	return (
		<div className="relative">
			<Controller
				control={control}
				name={name}
				rules={{
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
				}}
				render={(fields) => (
					<input
						{...fields}
						type="text"
						id={name}
						className={
							errors[name]
								? "block rounded-[4px] px-4 pb-[15px] pt-5 w-full font-roboto font-normal text-base text-gray-900 bg-[#FEE7EA]  border-2 border-[#F3566A] appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								: "block rounded-[4px] px-4 pb-[15px] pt-5 w-full font-roboto font-normal text-base text-gray-900 bg-[#F1F2F6]  border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						}
						placeholder=" "
					/>
				)}
			/>
			<label
				htmlFor={name}
				className={
					errors[name]
						? "absolute font-roboto font-normal text-base text-[#F3566A]  duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
						: "absolute font-roboto font-normal text-base text-[#737B8C]  duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				}
			>
				{placeholder}
			</label>
			<label
				htmlFor={name}
				className={
					errors[name]?.message
						? "font-roboto font-normal text-sm text-[#F3566A]"
						: "font-roboto font-normal text-sm text-[#737B8C]"
				}
			>
				{errors[name]?.message ? String(errors[name]?.message) : helper}
			</label>
		</div>
	);
}
