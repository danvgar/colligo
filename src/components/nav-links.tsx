'use client';

import {
  HomeIcon,
  TrashIcon,
  PlusIcon,
  PencilIcon
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
  {
    name: 'Edit Link',
    href: '/edit',
    icon: PencilIcon,
  },
  {
    name: 'Remove Link',
    href: '/delete',
    icon: TrashIcon,
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-emerald-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-emerald-100 text-green-600': pathname === navlink.href,
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
