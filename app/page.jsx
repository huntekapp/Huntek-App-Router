import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-screen grid place-content-center">
      <Image src="/huntek.svg" width={240} height={266} quality={100} />
    </div>
  );
}
