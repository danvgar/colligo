const { db } = require('@vercel/postgres');
const { links } = require('../src/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    // Create the "links" table if it doesn't exist
    const createLinksTable = await client.sql`
      CREATE TABLE IF NOT EXISTS links (
        title VARCHAR(255) NOT NULL,
        url TEXT NOT NULL,
        tags TEXT[] NOT NULL,
        description TEXT,
        dateAdded DATE,
        votes INTEGER
      );
    `;

    console.log(`Created "links" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    // Insert data into the "lists" and "links" tables
    const seedListsAndLinks = await Promise.all(
      users.map(async (user) => {
        const insertedLists = await Promise.all(
          user.lists.map(async (list) => {
            return client.sql`
          INSERT INTO lists (id, user_id, name)
          VALUES (${list.id}, ${user.id}, ${list.name})
          ON CONFLICT (id) DO NOTHING;
        `;
          }),
        );

        const insertedLinks = await Promise.all(
          user.lists.flatMap((list) =>
            list.links.map(async (link) => {
              return client.sql`
            INSERT INTO links (id, list_id, title, url, tags, description, dateAdded, votes)
            VALUES (${link.id}, ${list.id}, ${link.title}, ${link.url}, ${link.tags}, ${link.description}, ${link.dateAdded}, ${link.votes})
            ON CONFLICT (id) DO NOTHING;
          `;
            }),
          ),
        );

        return {
          lists: insertedLists,
          links: insertedLinks,
        };
      }),
    );

    console.log(`Seeded ${seedListsAndLinks.length} lists and links`);

    return {
      createTable,
      createListsTable,
      createLinksTable,
      users: insertedUsers,
      listsAndLinks: seedListsAndLinks,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedUsers(client);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});