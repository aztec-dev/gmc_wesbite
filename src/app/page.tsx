import Landing from "@/ui/landing";
import Card from "@/ui/card";

export default function Home() {
    return (
        <main className="space-y-8">
            <section className="h-screen">
                <Card className="mt-2">
                    <Landing />
                </Card>
            </section>
        </main>
    );
}
