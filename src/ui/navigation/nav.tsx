import NavLinks from "@/ui/navigation/nav-links";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="w-full">
            {/* Desktop Top Nav */}
            <div className="hidden md:flex w-full  bg-white px-6 py-3 items-center shadow-md transition-colors duration-200 rounded-sm">
                {/* Left: Home Icon */}
                <Link
                    href="/"
                    className="text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition flex items-center space-x-2"
                >
                    Glorious Medical Center
                </Link>

                {/* Right: Nav Links, centered using mx-auto */}
                <div className="flex-1 flex justify-center space-x-6">
                    <NavLinks />
                </div>
                <div className={"flex-none w-28"}></div>
            </div>

            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white rounded-3xl shadow-lg flex justify-around items-center py-3 md:hidden">
                <NavLinks />
            </div>
        </nav>
    );
}
