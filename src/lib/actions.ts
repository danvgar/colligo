'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// To-Do
// ********************
//  - Form Validation
//  - User Authentication + Authorization


// Create Links
// ********************

// export async function createLink() {
//     // Prepare data for insertion into the database
//     const date = new Date().toISOString().split('T')[0];

//     // Insert data into the database
//     try {
//         await sql`
//         INSERT INTO links (id, title, url, tags, description, dateAdded)
//         VALUES (${linkID}, ${title}, ${desc}, ${url}, ${tags} ${date})
//       `;
//     } catch (error) {
//         // If a database error occurs, return a more specific error.
//         return {
//             message: 'Database Error: Failed to Create Link.',
//         };
//     }

//     // Revalidate the cache for the links page and redirect the user.
//     revalidatePath('/');
//     redirect('/');
// }


// Update Links
// ********************

// export async function updateLink() {

//     const { linkID, amount, status } = validatedFields.data;

//     try {
//         await sql`
//         UPDATE links
//         SET customer_id = ${linkID}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//     } catch (error) {
//         return { message: 'Database Error: Failed to Update Link.' };
//     }

//     revalidatePath('/');
//     redirect('/');
// }


// ********************
// Delete Links
// ********************

// export async function deleteLink(id: string) {
//     try {
//         await sql`DELETE FROM links WHERE id = ${id}`;
//         revalidatePath('/');
//         return { message: 'Deleted Link.' };
//     } catch (error) {
//         return { message: 'Database Error: Failed to Delete Link.' };
//     }
// }