'use client'

import { fetchLinks } from '@/lib/data';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default async function LinkCard() {

    const links = await fetchLinks();
    console.log(`LinkCard Links: ${links}`)

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {links.map(link => (<p key={link.id}>{link.description}</p>)
                )}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}