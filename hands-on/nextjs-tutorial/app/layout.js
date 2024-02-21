import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import UIProvider from "../app/UIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next.JS Tutorial",
    description: "Awesome Next Great Things",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <UIProvider>
                    <main className="px-8 py-20 max-w-6xl mx-auto">
                        {children}
                    </main>
                </UIProvider>
            </body>
        </html>
    );
}
