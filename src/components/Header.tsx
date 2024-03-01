import MainLogo from "./logo/MainLogo";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

export default function Header() {
	return (
		<header className="flex-no-wrap justify-between sticky top-0 flex w-full bg-[#ffffff] px-5 py-5 z-10">
			<div className=" ">
				<MainLogo />
			</div>

			<div className="flex flex-row gap-2">
				<div className="rounded-full bg-[#F1F2F6] p-2">
					<FeedbackOutlinedIcon />
				</div>
				<div className="rounded-full bg-[#F1F2F6] p-2">
					<PhoneOutlinedIcon />
				</div>
			</div>
		</header>
	);
}
