"use client";

import { MainContextType } from "@/types/contexts/MainContext";
import { AutoFormValues } from "@/types/forms/AutoForm";
import { ParametersFormValues } from "@/types/forms/ParametersForm";
import { PersonalDataValues } from "@/types/forms/PersonalDataForm";
import { RisksFormValues } from "@/types/forms/RisksForm";

import React, { createContext, useState, useContext } from "react";

const MainContext = createContext<MainContextType | null>(null);

export default function MainContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [step, setStep] = useState(1);

	const [showSmsInput, setShowSmsInput] = useState(false);

	const [personalStep, setPersonalStep] = useState(1);

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

	const [risksData, setRisksData] = useState<RisksFormValues>({
		crime: true,
		gap: false,
		accident: false,
		evacuation: false,
		carAccidentCommisar: false,
		techHelp: false,
	});

	const [personalData, setPersonalData] = useState<PersonalDataValues>({
		smsCode: "",
		isPulseClient: false,
		phoneNumber: "",
		surname: "",
		name: "",
		patronymic: "",
		birthday: new Date().toDateString(),
		passportNumber: "",
		passportGivenBy: "",
		passportGivenDate: new Date().toDateString(),
		registrationLocation: "",
		email: "",
		isInsurantOwner: false,
		ownerFullName: "",
		ownerBirthday: new Date().toDateString(),
		ownerPassportNumber: "",
		ownerPassportGivenBy: "",
		ownerPassportGivenDate: new Date().toDateString(),
		ownerRegistrationLocation: "",
		isInsurantDriver: false,
		drivers: [
			{
				fullName: "",
				birthday: new Date().toDateString(),
				driverLicenceNumber: "",
				beginOfExpDate: "",
			},
		],
	});

	return (
		<MainContext.Provider
			value={{
				step,
				setStep,
				personalStep,
				setPersonalStep,
				showSmsInput,
				setShowSmsInput,
				autoData,
				setAutoData,
				risksData,
				setRisksData,
				paramsData,
				setParamsData,
				carFoundStatus,
				setCarFoundStatus,
				personalData,
				setPersonalData,
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
