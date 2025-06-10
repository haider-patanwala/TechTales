import Header from "@/components/Header";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Rufina } from "next/font/google";

export const metadata: Metadata = {
	title: "TechTales",
	description:
		"TechTale is a platform for sharing and discovering tech stories",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const rufina = Rufina({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-rufina",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en'
			className={`${rufina.variable} ${geist.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
