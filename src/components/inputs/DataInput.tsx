"use client";

import * as React from "react";
import { format } from "date-fns";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function DateInput() {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					{date ? (
						format(date, "PPP")
					) : (
						<span>Дата начала действия договора</span>
					)}
					<CalendarTodayOutlinedIcon className="mr-4 h-4 w-4" />
				</Button>
			</PopoverTrigger>
		</Popover>
	);
}
