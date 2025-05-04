import Link from "next/link";
import {
    HomeIcon,
    InformationCircleIcon,
    HeartIcon,
    BriefcaseIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

const links = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { name: "Values", href: "/values", icon: HeartIcon },
    { name: "Services", href: "/services", icon: BriefcaseIcon },
    { name: "Contact", href: "/contact", icon: PhoneIcon },
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex flex-col items-center justify-center  px-3 py-2"
                    >
                        {/* Icon on mobile only */}
                        <Icon className="h-6 w-6 md:hidden" />

                        {/* Text on desktop only */}
                        <p className="hidden md:block text-xl font-medium text-blue-700 hover:text-blue-900">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
