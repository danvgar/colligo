import { sql } from '@vercel/postgres';
import { User, List, Link } from './definitions';
// import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUsers() {
  try {
    const users = await sql<User>`SELECT * FROM users`;
    return users.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function fetchListsByUserId(userId: string) {
  try {
    const lists = await sql<List>`SELECT * FROM lists WHERE user_id = ${userId}`;
    return lists.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch lists.');
  }
}

export async function fetchLinksByListId(listId: string) {
  try {
    const links = await sql<Link>`SELECT * FROM links WHERE list_id = ${listId}`;
    return links.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch links.');
  }
}