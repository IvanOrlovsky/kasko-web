import { SimpleInputProps } from "@/types/components/inputs/MaskInput";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

export default function MaskInput({
	name,
	mask,
	required,
	requiredMsg,
	helper,
	placeholder,
	formatChars,
	uppercase,
}: SimpleInputProps) {
	const {
		register,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	return (
		<div className="relative">
			<InputMask
				mask={mask}
				alwaysShowMask={false}
				formatChars={
					formatChars
						? formatChars
						: {
								"9": "[0-9]",
								a: "[A-Za-z]",
								"*": "[A-Za-z0-9]",
						  }
				}
				type="text"
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
				className={
					errors[name]
						? "floating-label-input-error peer"
						: "floating-label-input peer"
				}
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
