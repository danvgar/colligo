'use client';

import {
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const navlinks = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Add Link',
    href: '/add',
    icon: PlusIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navlinks.map((navlink) => {
        const LinkIcon = navlink.icon;
        return (
          <Link
            key={navlink.name}
            href={navlink.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-black-300 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-green-100 text-black-900': pathname === navlink.href,
              },
            )}
          >
            <LinkIcon className="w-6 md:w-4" />
            <p className="hidden md:block">{navlink.name}</p>
          </Link>
        );
      })}
    </>
  );
}
