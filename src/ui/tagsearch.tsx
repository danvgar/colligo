import { MultiSelect } from '@mantine/core';

export default function TagSearch() {
    return (
        <MultiSelect
            label="Your favorite libraries"
            placeholder="Pick value"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            searchable
            nothingFoundMessage="Nothing found..."
        />
    );
}