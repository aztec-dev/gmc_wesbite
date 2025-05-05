import Image from "next/image";

export default function Landing() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image on the left */}
            <div className="flex-shrink-0">
                <Image
                    src="/landing_image.png"
                    alt="Landing"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>

            {/* Text on the right */}
            <div className="text-center md:text-left">
                <h1 className="text-6xl font-semibold text-[var(--color-primary)] mb-2">
                    Compassion. Quality. Integrity.
                </h1>
                <p className="text-[var(--color-text-dark)] text-lg">
                    At Glorious Medical Center, we&#39;re more than just your average medical center. Our greatest glory is your health.
                </p>
            </div>
        </div>
    );
}
