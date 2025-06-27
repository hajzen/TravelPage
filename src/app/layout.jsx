import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/styles/page.css";
import Header from "../components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Travel Landing Page",
    description: "Discover amazing destinations and plan your next adventure",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
