"use client";

import FormBlock from "@/components/FormBlock";
import { CurrencyRangeInput } from "@/components/inputs/RangeInputs";
import AutoComplete from "@/components/inputs/AutoComplete";
import Regions from "../../../../../public/datasets/Regions.json";
import TwoOptionsSwitch from "@/components/inputs/TwoOprionsSwitch";
import DateInput from "@/components/inputs/DataInput";

export default function InsuranceParams() {
	return (
		<FormBlock title="Параметры страховки">
			<>
				<AutoComplete
					name="region"
					title="Регион использования ТС"
					dataset={Regions}
				/>

				<div className="w-full flex flex-col items-center my-5">
					<h2 className="self-start font-roboto text-[#1F232B] text-[16px] font-bold ">
						Ремонт от страховщика
					</h2>
					<TwoOptionsSwitch
						name="repair"
						option1="Дилерская СТОА"
						option2="Обычная СТОА"
					/>
					<span className="self-start font-roboto text-[#737B8C] text-[14px] font-medium">
						СТОА официального дилера Subaru
					</span>
				</div>
				<div className="w-full flex flex-col items-center my-5">
					<CurrencyRangeInput
						title="Франшиза"
						name="franchaise"
						min={0}
						max={30000}
						step={5000}
						marks={[
							{ value: 0, label: "нет" },
							{ value: 5000 },
							{ value: 10000 },
							{ value: 15000 },
							{ value: 20000 },
							{ value: 25000 },
							{ value: 30000, label: "30000 ₽" },
						]}
					/>
				</div>
				<div className="w-full flex flex-col items-center my-5">
					<DateInput />
				</div>
			</>
		</FormBlock>
	);
}
