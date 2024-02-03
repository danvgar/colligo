// import Image from "next/image";
import LinkCard from "@/components/linkcard";
import Search from "@/components/search";
import { CreateLink } from "@/components/buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search links..." />
        <CreateLink />
      </div>
      <LinkCard />
    </main >
  );
}
