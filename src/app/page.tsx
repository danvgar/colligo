import Image from "next/image";
import { ActiveOptionsFilter } from "@/ui/ActiveOptionsFilter";
import LinkCard from "@/ui/LinkCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ActiveOptionsFilter />
      <LinkCard />
    </main >
  );
}
