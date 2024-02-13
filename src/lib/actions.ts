import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// To-Do
// ********************
//  - Form Validation
//  - User Authentication + Authorization
//  - Add list functionality


// Create Links
// ********************

export async function createLink(formData: FormData) {
    'use server';

    // Prepare data for insertion into the database
    const date = new Date().toISOString().split('T')[0];

    const rawFormData = {
        // listID: formData.get('listID'),
        url: formData.get('url'),
        title: formData.get('title'),
        desc: formData.get('desc'),
        tags: formData.get('tags'),
    };

    // Revalidate the cache for the links page and redirect the user.
    revalidatePath('/');
    redirect('/');
}


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