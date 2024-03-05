"use client";

import { MainContextType } from "@/types/contexts/MainContext";
import { AutoFormValues } from "@/types/forms/AutoForm";
import { ParametersFormValues } from "@/types/forms/ParametersForm";
import React, { createContext, useState, useContext } from "react";

const MainContext = createContext<MainContextType | null>(null);

export default function MainContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [step, setStep] = useState(1);
	const [autoData, setAutoData] = useState<AutoFormValues>({
		isCarRegistered: false,
		GOSnumber: "",
		make: "",
		model: "",
		releaseYear: "",
		power: "",
		bodyType: "",
		gearBoxType: "",
		engine: "",
		modification: "",
		todayCost: "",
		mileage: "",
		minDriversAge: "",
		minDriversExp: "",
		hasActiveKasko: false,
		isCarInCredit: false,
		TSdocument: "",
		PTSnumber: "",
		VIN: "",
	});
	const [paramsData, setParamsData] = useState<ParametersFormValues>({
		region: {
			label: "Популярные",
			region: "Москва и Московская обл.",
			code: 1,
		},
		repair: "Дилерская СТОА",
		franchaise: "0",
		insuranseDuration: "",
		dateOfAgreementBegin: new Date().toDateString(),
	});
	const [carFoundStatus, setCarFoundStatus] = useState<
		"NOT_ENTERED" | "NOT_ALL" | "ALL" | "NOT_FOUND"
	>("NOT_ENTERED");

	return (
		<MainContext.Provider
			value={{
				step,
				setStep,
				autoData,
				setAutoData,
				paramsData,
				setParamsData,
				carFoundStatus,
				setCarFoundStatus,
			}}
		>
			{children}
		</MainContext.Provider>
	);
}

export function useMainContext() {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error(
			"useMainContext must be used within a MainContextProvider"
		);
	}

	return context;
}
