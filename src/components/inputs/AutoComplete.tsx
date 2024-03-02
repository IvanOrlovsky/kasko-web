"use client";

import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
	height: "3em",
	"& .MuiAutocomplete-inputRoot": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
	},
	"& .MuiInputLabel-root": {
		height: "1.5em",
		color: "#737B8C",
		fontWeight: "400",
		fontSize: 12,
	},
});

type AutoCompleteType = {
	name: string;
	title: string;
	dataset: unknown[];
};

export default function AutoComplete({
	dataset,
	title,
	name,
}: AutoCompleteType) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={null}
			render={({ field }) => (
				<StyledAutocomplete
					{...field}
					sx={{ width: "100%" }}
					options={dataset}
					noOptionsText="Не найдено..."
					groupBy={(option) => option.label || "Остальные"}
					popupIcon={false}
					getOptionLabel={(option) => option.region}
					onChange={(e, value) => field.onChange(value)}
					renderInput={({ ...params }) => (
						<TextField {...params} variant="filled" label={title} />
					)}
					renderOption={(props, option, { inputValue }) => {
						const matches = match(option.region, inputValue, {
							insideWords: true,
						});
						const parts = parse(option.region, matches);

						return (
							<li {...props}>
								<div>
									{parts.map((part, index) => (
										<span
											key={index}
											style={{
												fontWeight: part.highlight
													? 700
													: 400,
											}}
										>
											{part.text}
										</span>
									))}
								</div>
							</li>
						);
					}}
				/>
			)}
		/>
	);
}
