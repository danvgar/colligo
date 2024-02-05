'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

// ********************
// Form Validation
// ********************
const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    desc: z.string(),
    url: z.string(),
    tags: z.string(),
    date: z.string(),
});


// ********************
// Create Links
// ********************
const CreateLink = FormSchema.omit({
    id: true,
    date: true,
})

export type State = {
    errors?: {
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};

export async function createLink(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateLink.safeParse({
        title: formData.get('title'),
        desc: formData.get('desc'),
        url: formData.get('url'),
        tags: formData.get('tags'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Link.',
        };
    }

    // Prepare data for insertion into the database
    const { linkID, title, desc, url, tags } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        await sql`
        INSERT INTO links (id, title, url, tags, description, dateAdded)
        VALUES (${linkID}, ${title}, ${desc}, ${url}, ${tags} ${date})
      `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Link.',
        };
    }

    // Revalidate the cache for the links page and redirect the user.
    revalidatePath('/');
    redirect('/');
}


// ********************
// Update Links
// ********************

const UpdateLink = FormSchema.omit({
    id: true,
    date: true
});

export async function updateLink(
    id: string,
    prevState: State,
    formData: FormData,
) {
    const validatedFields = UpdateLink.safeParse({
        linkID: formData.get('linkID'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Link.',
        };
    }

    const { linkID, amount, status } = validatedFields.data;

    try {
        await sql`
        UPDATE links
        SET customer_id = ${linkID}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update Link.' };
    }

    revalidatePath('/');
    redirect('/');
}


// ********************
// Delete Links
// ********************

export async function deleteLink(id: string) {
    try {
        await sql`DELETE FROM links WHERE id = ${id}`;
        revalidatePath('/');
        return { message: 'Deleted Link.' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete Link.' };
    }
}

// ********************
// Authenticate
// ********************

// export async function authenticate(
//     prevState: string | undefined,
//     formData: FormData,
// ) {
//     try {
//         await signIn('credentials', formData);
//     } catch (error) {
//         if (error instanceof AuthError) {
//             switch (error.type) {
//                 case 'CredentialsSignin':
//                     return 'Invalid credentials.';
//                 default:
//                     return 'Something went wrong.';
//             }
//         }
//         throw error;
//     }
// }