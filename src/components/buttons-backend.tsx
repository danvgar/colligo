import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteLink } from '@/lib/actions';

// ********************
// Create Links
// ********************
export function CreateLink() {
  return (
    <Link
      href="/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Link</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// ********************
// Update Links
// ********************
export function UpdateLink({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// ********************
// Delete Links
// ********************
export function DeleteLink({ id }: { id: string }) {
  const deleteLinkWithId = deleteLink.bind(null, id);

  return (
    <form action={deleteLinkWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}