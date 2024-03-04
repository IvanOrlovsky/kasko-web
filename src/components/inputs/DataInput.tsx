"use client";

import "dayjs/locale/ru";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ruRU } from "@mui/x-date-pickers";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
export default function DateInput({
	name,
	label,
}: {
	name: string;
	label: string;
}) {
	const { register, setValue } = useFormContext();
	const [isOpen, setIsOpen] = useState(false);

	const currentDate = new Date();

	const year = currentDate.getFullYear();
	const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
	const day = currentDate.getDate().toString().padStart(2, "0");

	const formattedDate = `${year}-${month}-${day}`;
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			localeText={
				ruRU.components.MuiLocalizationProvider.defaultProps.localeText
			}
			adapterLocale="ru"
		>
			<input type="hidden" {...register(name)} />
			<DesktopDatePicker
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="bg-[#F1F2F6] rounded"
				label={label}
				defaultValue={dayjs(formattedDate)}
				onChange={(value) =>
					setValue(name, value?.toDate().toLocaleString())
				}
				slots={{
					openPickerButton: () => {
						return (
							<div
								onClick={() => setIsOpen(true)}
								className="hover:cursor-pointer"
							>
								<CalendarTodayOutlinedIcon />
							</div>
						);
					},
				}}
			/>
		</LocalizationProvider>
	);
}
