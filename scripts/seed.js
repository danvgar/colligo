const { db } = require('@vercel/postgres');
const { links } = require('../src/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedLinks(client) {
  try {
    // Create the "links" table if it doesn't exist
    const createLinksTable = await client.sql`
      CREATE TABLE IF NOT EXISTS links (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        url TEXT NOT NULL,
        tags TEXT[] NOT NULL,
        description TEXT,
        dateAdded DATE,
        votes INTEGER
      );
    `;

    console.log(`Created "links" table`);

    // Insert data into the "links" table
    const insertedLinks = await Promise.all(
      links.map(async (link) => {
        return client.sql`
        INSERT INTO links (id, title, url, tags, description, dateAdded, votes)
        VALUES (${link.id}, ${link.title}, ${link.url}, ${link.tags}, ${link.description}, ${link.dateAdded}, ${link.votes})
        ON CONFLICT DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedLinks.length} links`);

    return {
      createLinksTable,
      links: insertedLinks,
    };
  } catch (error) {
    console.error('Error seeding links:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    // Enable uuid-ossp extension
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Seed links
    await seedLinks(client);
  } finally {
    // Close the database connection
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
