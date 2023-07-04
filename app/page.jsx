import Image from "next/image";
import Link from "next/link";

export default function Landing() {
	return (
		<div className="h-screen grid place-content-center">
			<Link href="/login">
				<Image
					src="/huntek.svg"
					width={240}
					height={266}
					quality={100}
					className="hover:scale-105 transition-all duration-500 active:animate-ping"
				/>
			</Link>
		</div>
	);
}
