import { useFormContext } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TwoOptionsSwitchProps = {
	name: string;
	option1: string;
	option2: string;
};

export default function TwoOptionsSwitch({
	name,
	option1,
	option2,
}: TwoOptionsSwitchProps) {
	const { register, setValue, watch } = useFormContext();
	const selectedOption = watch(name); // Получаем текущее значение из react-hook-form

	const handleTabChange = (value: string) => {
		setValue(name, value);
	};

	return (
		<>
			<input
				type="text"
				{...register(name)}
				value={selectedOption || ""}
			/>
			<Tabs defaultValue={option1} onSelect={handleTabChange}>
				<TabsList>
					<TabsTrigger value={option1}>{option1}</TabsTrigger>
					<TabsTrigger value={option2}>{option2}</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	);
}
