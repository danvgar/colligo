import Image from "next/image";
import { ActiveOptionsFilter } from "@/components/ActiveOptionsFilter";
import LinkCard from "@/components/LinkCard";
import LightDarkToggle from "@/components/LightDarkToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LightDarkToggle />
      <ActiveOptionsFilter />
      <LinkCard />
    </main >
  );
}
