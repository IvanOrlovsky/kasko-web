import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<Header />
			<body className="bg-[#F1F2F6]">{children}</body>
		</html>
	);
}
