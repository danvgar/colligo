import Link from 'next/link';
import Button from '@/components/mantine/buttons-frontend';
import { createLink } from '@/lib/actions';
import { 
  LinkIcon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon,
  Bars2Icon,
  Bars3BottomLeftIcon,
 } from '@heroicons/react/24/outline';

// To-Do
// ********************
//  - Form Validation
//      - URL validation
//  - User Authentication + Authorization
//  - Auto-fill with Open Graph Information
//  - Tags
//      - Tags should not be a string but an array of strings. Individual items
//      - Tags should have optional drop-down filled with all existing tags in database, with option to add your own instead.


export default function Form() {
  const initialState = { message: null, errors: {} };

  return (
    <form
      action={createLink}
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Your Lists */}
        <div className="mb-4">
          <label htmlFor="list" className="mb-2 block text-sm font-medium">
            Choose a list
          </label>
          <div className="relative">
            <select
              id="list"
              name="listId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Lists Feature Coming Soon!
              </option>
              {/* {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))} */}
            </select>
            <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
  
        {/* URL */}
        <div className="mb-4">
          <label htmlFor="url" className="mb-2 block text-sm font-medium">
            Enter a URL
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="url"
                name="url"
                type="string"
                placeholder="https://www.google.com/"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter a Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="string"
                placeholder="Google"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <Bars2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block text-sm font-medium">
            Enter a Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="desc"
                name="desc"
                type="string"
                placeholder="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <Bars3BottomLeftIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Tags  */}
        <div className="mb-4">
          <label htmlFor="tags" className="mb-2 block text-sm font-medium">
            Enter Tags, separated by commas
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="tags"
                name="tags"
                type="string"
                placeholder="Search, Research, Browsing, ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <AdjustmentsHorizontalIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Link</Button>
        </div>
      </div>
    </form>
  );
}
