// To-Do
// ********************
//  - Form Validation
//  - User Authentication + Authorization
//  - Add list functionality


// Dependencies
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';


// Zod Form Validation
const FormSchema = z.object({
    // listID: z.string(),
    id: z.string(),
    url: z.string().url(),
    title: z.string().max(15),
    desc: z.string().max(30),
    tags: z.string(), // Consider using enum with an array of existing tags. 
    date: z.string(),
})

// Schema Variation: Ignore id and date validation.
const CreateLink = FormSchema.omit({ id: true, date: true })

// Create Links
// ********************
export async function createLink(formData: FormData) {
    'use server';


    // If formData passes Zod validation parsing, toss it into destructured object variables.
    const { url, title, desc, tags } = CreateLink.parse({
        // listID: formData.get('listID'),
        url: formData.get('url'),
        title: formData.get('title'),
        desc: formData.get('desc'),
        tags: formData.get('tags'), // Currently broken
    })

    // Create date for time link was created
    const date = new Date().toISOString().split('T')[0];

    // Split tags string into comma separated, trimmed elements of an array.
    const tagsArr: string[] = tags.split(",").map(tag => tag.trim());

    await sql`
    INSERT INTO links (url, title, description, tags)
    VALUES (${url}, ${title}, ${desc}, ARRAY[${tagsArr.map(tag => sql.tag`${tag}`).join(',')}])
  `;

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