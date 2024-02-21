import Link from 'next/link';
import NavLinks from '@/components/nav-links';
import ColligoLogo from '@/components/colligo-logo';
import { PowerIcon, Cog8ToothIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { MultiSelect } from '@mantine/core';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-950 p-4 md:h-40"
        href="/"
      >
        <div className="w-40 text-white">
          <ColligoLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <MultiSelect
          label="Filter by Tags"
          placeholder="Search tags..."
          limit={10} // limit amount of rendering
          data={['React', 'Angular', 'Vue', 'Svelte', 'Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6', 'Tag7', 'Tag8', 'Tag9']} // takes in an array
          searchable
        />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          
        </div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <DocumentDuplicateIcon className="w-6" />
          <div className="hidden md:block">Lists</div>
        </button>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Cog8ToothIcon className="w-6" />
          <div className="hidden md:block">Account Settings</div>
        </button>
        <form
        // action={async () => {
        //   'use server';
        //   await signOut();
        // }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
