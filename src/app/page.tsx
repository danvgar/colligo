"use client";

// import Image from "next/image";
import LinkCard from "@/components/mantine/linkcard";
import Search from "@/components/search";
import Table from '@/components/table';
import { CreateLink } from "@/components/buttons-backend"
import { lusitana } from '@/components/fonts';
import { useState } from 'react';

export default async function Page({ searchParams, }:
  { searchParams?: { query?: string; page?: string; }; }) {

  const [query, setQuery] = useState(searchParams?.query || '');
  const currentPage = Number(searchParams?.page) || 1;

  const handleTagClick = (tagValue: string) => {
    console.log("Tag clicked: ", tagValue)
    setQuery(tagValue);
    // Perform the search operation with tagValue
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Links</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search links..." />
        <CreateLink />
      </div>
      <Table query={query} currentPage={currentPage} onTagClick={handleTagClick} />
    </div>
  );
}
