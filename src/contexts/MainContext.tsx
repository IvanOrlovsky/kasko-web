"use client";

import React, { createContext, useState, useContext } from "react";

type MainContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
};

const MainContext = createContext<MainContextType | null>(null);

export default function MainContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [step, setStep] = useState(2);

	return (
		<MainContext.Provider value={{ step, setStep }}>
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
