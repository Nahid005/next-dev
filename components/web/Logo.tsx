import Image from "next/image";
import Logo from "@/public/logo.png"

export default function AppLogo() {
    return (
        <div className="flex items-center justify-center gap-1">
            <Image width={40} src={Logo} alt="Logo"/>
            <span className="text-2xl font-bold text-gray-800">Anthro</span>
        </div>
    )
}