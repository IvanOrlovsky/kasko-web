"use client";

import { useFormContext, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledSlider = styled(Slider)({
	height: 2,
	"& .MuiSlider-thumb": {
		height: 10,
		width: 10,
		backgroundColor: "#fff",
		borderRadius: "120px",
		border: "1px solid currentColor",
		"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
			boxShadow: "inherit",
		},
		"&::before": {
			display: "none",
		},
	},
	"& .MuiSlider-mark": {
		height: 6,
		width: 6,
		border: "1px solid #FFFFFF",
		backgroundColor: "#DCE1EF",
		borderRadius: "10px",
		opacity: 1,
		"& .MuiSlider-markActive": {
			backgroundColor: "#1698D9",
		},
	},
	"& .MuiSlider-markLabel": {
		color: "#737B8C",
		marginTop: "-12px",
		"& .MuiSlider-markLabelActive": {
			color: "#737B8C",
			marginTop: "-12px",
		},
	},
});

type Mark = { value: number; label?: string };

type RangeInputType = {
	name: string;
	title: string;
	min: number;
	max: number;
	isCurrency?: false;
	isDate?: false;
	marks?: Mark[];
	step?: number;
};

type DateRangeType = {
	name: string;
	title: string;
	isDate: true;
	isCurrency?: false;
	marks: Mark[];
	min?: undefined;
	max?: undefined;
	step?: undefined;
};

type CurrencyRangeType = {
	name: string;
	title: string;
	isCurrency: true;
	isDate?: false;
	marks?: Mark[];
	min: number;
	max: number;
	step?: number;
};

export default function RangeInput({
	isCurrency,
	title,
	marks,
	isDate,
	min,
	max,
	step,
	name,
}: RangeInputType | DateRangeType | CurrencyRangeType) {
	const defaultMarks = [
		{
			value: min,
		},
		{
			value: max,
		},
	] as Mark[];

	const minMarkValue = marks
		? Math.min(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const maxMarkValue = marks
		? Math.max(
				...marks.map(
					(mark: { value: number; label?: string }) => mark.value
				)
		  )
		: undefined;

	const [inputValue, setInputValue] = useState(
		!isDate
			? min + ""
			: marks
			? (marks.find((mark) => mark.value === minMarkValue)
					?.label as string)
			: ""
	);
	const [sliderValue, setSliderValue] = useState(
		min ? min : marks ? minMarkValue : 0
	);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const numericValue = +event.target.value.replace(/\s/g, "");
		setInputValue(numericValue.toString());
		setSliderValue(numericValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		isDate
			? setInputValue(
					marks.find((mark) => mark.value === newValue)
						?.label as string
			  )
			: setInputValue(newValue + "");
		setSliderValue(newValue as number);
	};

	const { control } = useFormContext();

	return (
		<Box className="flex flex-col items-start gap-[12px] p-0 w-full">
			<h1 className="font-roboto font-semibold text-base leading-6">
				{title}
			</h1>
			<Box className="flex flex-col order-2 self-stretch">
				<Controller
					name={name}
					control={control}
					defaultValue={isDate ? "" : min}
					render={({ field }) => (
						<input
							{...field}
							value={
								isCurrency
									? inputValue.replace(
											/\B(?=(\d{3})+(?!\d))/g,
											" "
									  )
									: inputValue
							}
							type="text"
							disabled={!!isDate}
							onChange={handleInputChange}
							className="font-roboto font-normal text-lg leading-[26px] appearance-none text-black box-border w-full border-2 focus:outline-none focus:border-blue-600 bg-[#F1F2F6] rounded-[4px] px-[16px] py-[5px]"
						/>
					)}
				/>
				<Controller
					name={`${title.toLowerCase()}Slider`}
					control={control}
					defaultValue={min}
					render={({ field }) => (
						<StyledSlider
							{...field}
							value={Number(sliderValue)}
							className="-mt-3 w-[90%] self-center"
							onChange={handleSliderChange}
							size="small"
							aria-label="Small"
							step={isDate ? null : step ? step : 1}
							marks={marks ? marks : defaultMarks}
							min={min ? min : marks ? minMarkValue : undefined}
							max={max ? max : marks ? maxMarkValue : undefined}
						/>
					)}
				/>
			</Box>
		</Box>
	);
}
