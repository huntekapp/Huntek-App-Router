import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./globalstore/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Huntek App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={poppins.className}>{children}</body>
      </Providers>
    </html>
  );
};
