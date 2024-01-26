import Image from "next/image";
import LinkCard from "@/components/linkcard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LinkCard />
    </main >
  );
}
