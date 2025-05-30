import React, { Suspense } from "react";

export default function SuccessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Suspense>{children}</Suspense>;
}
