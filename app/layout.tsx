import {Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
    subsets: ['latin']
})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className={cn(inter.className, "font-sans", geist.variable)}>
            <body className="max-w-7xl px-5 mx-auto flex flex-col min-h-screen">
                {children}
            </body>
        </html>
    )
}