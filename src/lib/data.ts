// Dependencies
// **********
import { sql } from '@vercel/postgres';
import { Link, LinksTable, LinkForm } from './definitions';

// Fetch Latest Links
// Purpose: Grabs all links from Links Table in DB
// **********
export async function fetchLatestLinks() {
  try {
    const links = await sql<Link>`SELECT * FROM links`;

    console.log('Links:', JSON.stringify(links.rows, null, 2));
    return links.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch links.');
  }
}

// Fetch Filtered Links
// Purpose: Filters links based on search params and page number.
// **********
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredLinks(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const links = await sql<LinksTable>`
      SELECT
        links.id,
        links.title,
        links.url,
        links.tags,
        links.description,
        links.dateAdded,
        links.votes
      FROM links
      WHERE
        links.title ILIKE ${`%${query}%`} OR
        links.url ILIKE ${`%${query}%`} OR
        ${'%' + query + '%'} ILIKE ANY(links.tags) OR
        links.description ILIKE ${`%${query}%`} OR
        links.dateAdded::text ILIKE ${`%${query}%`} OR
        links.votes::text ILIKE ${`%${query}%`}
      ORDER BY links.title DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    console.log('Filtered Links:', JSON.stringify(links.rows, null, 2));
    return links.rows;
  } catch (error) {
    console.error('Failed Query:', error); // Log the failed query
    throw new Error(`Failed to fetch links. Error: ${error}`);
  }
}

// Fetch Latest Links
// Purpose: Grabs all links from Links Table in DB
// **********
export async function fetchLinkById(id: string) {
  try {
    const data = await sql<LinkForm>`
      SELECT
        links.id,
        links.title,
        links.url,
        links.tags,
        links.description,
      FROM links
      WHERE links.id = ${id};
    `;

    const link = data.rows.map((link) => ({
      ...link,
    }));

    return link[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}