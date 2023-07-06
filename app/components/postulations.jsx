import Image from "next/image";
import Link from "next/link";

const Postulations = () => {
	return (
		<main className="w-full h-40 my-6 flex flex-col justify-around">
			<div className="flex flex-row justify-between">
				<p>Mis postulaciones</p>
				<Link href="" className="font-medium">
					Ver todas
				</Link>
			</div>
			<section className="carousel carousel-center  w-full p-2  space-x-6 rounded-box">
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/huntek/logo/G.svg" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/youtube-g6a795f8e6_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/google-ga4b7784ab_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/bitcoin-gfe80587d1_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/linkedin-gf141b6fe5_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/windows-gc6d7a955d_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
				<article className="carousel-item avatar">
					<div className="w-16 rounded-full ring ring-pri ring-offset-base-100 ring-offset-2">
						<Image src="/images/apple-g44d4327db_1920.png" width={60} height={100} quality={100} />
					</div>
				</article>
			</section>
		</main>
	);
};

export default Postulations;
