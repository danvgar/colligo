'use client';

import Link from 'next/link';
import Button from '@/components/mantine/buttons-frontend';
import { createLink } from '@/app/lib/actions';

// To-Do
// ********************
//  - Form Validation
//  - User Authentication + Authorization

export default function Form() {
  const initialState = { message: null, errors: {} };

  return (
    <form
      action={createLink}
    >
      <Button type="submit">Create Link</Button>
    </form>
  );
}
