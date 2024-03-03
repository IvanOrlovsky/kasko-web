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
	const { register, setValue } = useFormContext();

	return (
		<>
			<input type="hidden" {...register(name)} />
			<Tabs defaultValue={option1}>
				<TabsList>
					<TabsTrigger
						onClick={() => setValue(name, option1)}
						value={option1}
					>
						{option1}
					</TabsTrigger>
					<TabsTrigger
						onClick={() => setValue(name, option2)}
						value={option2}
					>
						{option2}
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</>
	);
}
