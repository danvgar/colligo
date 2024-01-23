// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 'BjmKPvRJ/L0Zyz5DFI5h1+ckRXn/ylMHuT37rx7mjUo=',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    lists: [
      {
        id: 'gQucOS2w6aiRv6Xp9fj71C4Y8qJfgnYTK6ZF4pYKXRo=',
        name: 'Favorite Links',
        links: [
          {
            title: 'Google',
            url: 'https://www.google.com',
            tags: ['search', 'engine'],
            description: 'A powerful search engine.',
            dateAdded: '2023-01-23',
            votes: 120,
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
            tags: ['code', 'repository'],
            description: 'Platform for version control and collaboration.',
            dateAdded: '2023-01-22',
            votes: 80,
          },
          {
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com',
            tags: ['programming', 'community'],
            description: 'Q&A community for programmers.',
            dateAdded: '2023-01-21',
            votes: 45,
          },
          {
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
        id: '2nQA+byjjBq3fuMu+Fzi2JeUwNTKwPI8fY2ch4r4Cy8=',
        name: 'Tech News',
        links: [
          { title: 'TechCrunch', url: 'https://techcrunch.com', tags: ['tech', 'news'], description: 'Latest tech news.', dateAdded: '2023-01-19', votes: 30 },
          { title: 'Ars Technica', url: 'https://arstechnica.com', tags: ['science', 'technology'], description: 'Science and tech articles.', dateAdded: '2023-01-18', votes: 15 },
        ],
      },
      // Add more lists as needed
    ],
  },
];

module.exports = {
  users,
};
