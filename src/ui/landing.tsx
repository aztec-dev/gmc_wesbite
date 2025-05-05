import Image from "next/image";


export default function Landing() {
    return (
        <div>
            <h1 className={"text-4xl text-[var(--color-primary)]"}>Compassion. Quality. Integrity.</h1>
            <p>
                At Glorious Medical Center, were more than just your average medical center.
                Our greatest glory, is your health.
            </p>
            <Image src={"/landing_image.png"} alt={"Landing"} width={400} height={400} className={""} />
        </div>
    )
}