import Image from "next/image";
import { ActiveOptionsFilter } from "@/components/ActiveOptionsFilter";
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ActiveOptionsFilter />
      <LinkCard />
    </main >
  );
}
