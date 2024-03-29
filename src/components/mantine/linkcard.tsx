'use client'

import { fetchLatestLinks } from '@/lib/data';
import { Card, Image, Text, Button, Group } from '@mantine/core';

export default async function LinkCard() {

    const links = await fetchLatestLinks();
    console.log(`LinkCard Links: ${links}`)

    return (
        links.map((link, i) => {
            return (
                <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    key={link.id}
                    withBorder
                    className="w-full m-2 transition ease-in-out delay-150 hover:scale-105  duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <Card.Section>
                        <Image
                            // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                            height={160}
                        // alt="Norway"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>{link.title}</Text>
                        {/* <Badge color="pink">On Sale</Badge> */}
                    </Group>

                    <Text size="sm" c="dimmed">
                        {link.description}
                    </Text>

                    {/* Visit Link */}
                    <Button fullWidth mt="md" radius="md">
                        Visit Site
                    </Button>
                </Card>
            )
        })
    )
};