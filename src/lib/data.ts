import { sql } from '@vercel/postgres';
import { Link } from './definitions';

export async function fetchLinks() {
  try {
    const links = await sql<Link>`SELECT * FROM links`;

    console.log('Links:', JSON.stringify(links.rows, null, 2));
    return links.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch links.');
  }
}