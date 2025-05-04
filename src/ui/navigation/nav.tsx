import NavLinks from "@/ui/navigation/nav-links";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full">
            {/* Desktop Top Nav */}
            <div className="hidden md:flex w-full  bg-white px-6 py-3 items-center shadow-md transition-colors duration-200">
                {/* Left: Home Icon */}
                <Link
                    href="/"
                    className="text-blue-700 hover:text-blue-900 transition flex items-center space-x-2"
                >
                    <HomeIcon className="h-6 w-6" />
                </Link>

                {/* Right: Nav Links, centered using mx-auto */}
                <div className="flex space-x-6 mx-auto">
                    <NavLinks />
                </div>
            </div>

            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white rounded-3xl shadow-lg flex justify-around items-center py-3 md:hidden">
                <NavLinks />
            </div>
        </nav>
    );
}
