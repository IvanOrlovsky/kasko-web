"use client";

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
	title: string;
	min: number;
	max: number;
	isCurrency?: false;
	isDate?: false;
	marks?: Mark[];
};

type DateRangeType = {
	title: string;
	isDate: true;
	isCurrency?: false;
	marks: Mark[];
	min?: undefined;
	max?: undefined;
};

type CurrencyRangeType = {
	title: string;
	isCurrency: true;
	isDate?: false;
	marks?: Mark[];
	min: number;
	max: number;
};

export default function RangeInput({
	isCurrency,
	title,
	marks,
	isDate,
	min,
	max,
}: RangeInputType | DateRangeType | CurrencyRangeType) {
	const [rawValue, setRawValue] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
		setRawValue(inputValue);
	};

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setRawValue((newValue as number) + "");
	};

	const formattedValue = isCurrency
		? rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
		: rawValue;

	return (
		<Box className="flex flex-col items-start gap-[12px] p-0 w-1/2">
			<h1 className="font-roboto font-semibold text-base leading-6">
				{title}
			</h1>
			<Box className="flex flex-col order-2 self-stretch">
				<input
					value={formattedValue}
					type="text"
					disabled={!!isDate}
					onChange={handleInputChange}
					className="font-roboto font-normal text-lg leading-[26px] appearance-none text-black box-border w-full border-2 focus:outline-none focus:border-blue-600 bg-[#F1F2F6] rounded-[4px] px-[16px] py-[5px]"
				/>
				<StyledSlider
					value={Number(rawValue)}
					className="-mt-3 w-[90%] self-center"
					onChange={handleSliderChange}
					size="small"
					aria-label="Small"
					step={isDate ? null : 1}
					marks={
						marks
							? marks
							: ([
									{
										value: min,
									},
									{
										value: max,
									},
							  ] as Mark[])
					}
					min={
						min
							? min
							: marks
							? Math.min(...marks.map((mark) => mark.value))
							: undefined
					}
					max={
						max
							? max
							: marks
							? Math.max(...marks.map((mark) => mark.value))
							: undefined
					}
				/>
			</Box>
		</Box>
	);
}
