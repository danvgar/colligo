import Image from 'next/image';
import { UpdateLink, DeleteLink } from '@/components/buttons-backend';
// import LinkStatus from '@/components/links/status';
// import { formatDateToLocal, formatCurrency } from '@/lib/utils';
import { fetchFilteredLinks } from '@/lib/data';
import Button from '@/components/mantine/buttons-frontend';

export default async function LinksTable({
  query,
  currentPage,
  onTagClick,
}: {
  query: string;
  currentPage: number;
  onTagClick: (tagValue: string) => void;
}) {
  const links = await fetchFilteredLinks(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* Start of Link Mapping */}
            {links?.map((link) => (
              <div
                key={link.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={link.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${link.title}'s profile picture`}
                      /> */}
                      <p>{link.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{link.description}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex flex-wrap justify-start gap-2">
                    <UpdateLink id={link.id} />
                    <DeleteLink id={link.id} />
                    {link.tags.map(tag => (<Button type="button" className="flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{tag}</Button>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  URL
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tags
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {links?.map((link) => (
                <tr
                  key={link.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={link.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${link.title}'s profile picture`}
                      /> */}
                      <p>{link.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {link.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <a href={link.url}>{link.url}</a>
                  </td>
                  <td className="flex flex-wrap px-3 py-3">
                    {link.tags.map((tag, index) => (
                      <Button
                        key={index}
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => onTagClick(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateLink id={link.id} />
                      <DeleteLink id={link.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {/* End of Link Mapping */}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
