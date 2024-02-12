import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// To-Do
// ********************
//  - Form Validation
//  - User Authentication + Authorization


// Create Links
// ********************

export async function createLink(formData: FormData) {
    'use server';

    // Prepare data for insertion into the database
    const date = new Date().toISOString().split('T')[0];

    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    // Test it out:
    console.log(rawFormData);

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