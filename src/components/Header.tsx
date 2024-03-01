import MainLogo from "./logo/MainLogo";

export default function Header() {
	return (
		<header className="flex-no-wrap sticky top-0 flex w-full bg-[#ffffff] px-5 py-5 z-10">
			<MainLogo />
		</header>
	);
}
