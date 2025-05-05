// import Image from "next/image";
import Landing from "@/ui/landing";
import Card from "@/ui/card";
export default function Home() {
  return (
      <section>
        {/*<h1>Glorious Medical Center - Home</h1>*/}

          <Card className={"mt-2"}>
              <Landing />
          </Card>
      </section>
  );
}
