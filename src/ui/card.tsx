import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-md rounded-xl ${className}`}
        >
            {children}
        </div>
    );
}
