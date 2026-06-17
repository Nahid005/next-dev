import Link from "next/link";
import { buttonVariants } from "../ui/button";
import AppLogo from "./Logo";
import SearchBar from "./SearchBar";

export const navItems = [
    {
        item_name: "Home",
        path: "/"
    },
    {
        item_name: "Courses",
        path: "/courses"
    },
    {
        item_name: "Blogs",
        path: "/blogs"
    },
    {
        item_name: "Get in touch",
        path: "/contacts"
    }
]

export default function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-5">
                <AppLogo />
                <nav className="flex gap-3">
                    {navItems?.map(navItem => {
                        return (
                            <Link className={buttonVariants({variant: "ghost", size: "lg"})} key={navItem.path} href={navItem.path}>{navItem.item_name}</Link>
                        )
                    })}
                </nav>
                <SearchBar />
            </div>

            <div className="">
                <p>Accounts</p>
            </div>
        </div>
    )
}