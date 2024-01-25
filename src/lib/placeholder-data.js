// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'danvgar',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    lists: [
      {
        id: '3f8a01d7-9a4c-4c3b-8bb5-2a8c0f7b9f61',
        name: 'Favorite Links',
        links: [
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'Google',
            url: 'https://www.google.com',
            tags: ['search', 'engine'],
            description: 'A powerful search engine.',
            dateAdded: '2023-01-23',
            votes: 120,
          },
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'GitHub',
            url: 'https://github.com',
            tags: ['code', 'repository'],
            description: 'Platform for version control and collaboration.',
            dateAdded: '2023-01-22',
            votes: 80,
          },
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com',
            tags: ['programming', 'community'],
            description: 'Q&A community for programmers.',
            dateAdded: '2023-01-21',
            votes: 45,
          },
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'Medium',
            url: 'https://medium.com',
            tags: ['blog', 'articles'],
            description: 'A platform for writing and reading articles.',
            dateAdded: '2023-01-20',
            votes: 60,
          },
          // Add more links as needed
        ],
      },
      {
        id: 'e30a6dc6-6eef-4fbd-b870-9c7b2b1a8e2d',
        name: 'Tech News',
        links: [
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'TechCrunch',
            url: 'https://techcrunch.com',
            tags: ['tech', 'news'],
            description: 'Latest tech news.',
            dateAdded: '2023-01-19',
            votes: 30,
          },
          {
            id: uuidv4(), // Generate a new UUID v4 for link ID
            title: 'Ars Technica',
            url: 'https://arstechnica.com',
            tags: ['science', 'technology'],
            description: 'Science and tech articles.',
            dateAdded: '2023-01-18',
            votes: 15,
          },
        ],
      },
    ],
  },
];

module.exports = {
  users,
};
