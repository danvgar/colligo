// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const { v4: uuidv4 } = require('uuid');

const links = [
  {
    id: uuidv4(),
    title: 'Google',
    url: 'https://www.google.com',
    tags: ['search', 'engine'],
    description: 'A powerful search engine.',
    dateAdded: '2023-01-23',
    votes: 120,
  },
  {
    id: uuidv4(),
    title: 'GitHub',
    url: 'https://github.com',
    tags: ['code', 'repository'],
    description: 'Platform for version control and collaboration.',
    dateAdded: '2023-01-22',
    votes: 80,
  },
  {
    id: uuidv4(),
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    tags: ['programming', 'community'],
    description: 'Q&A community for programmers.',
    dateAdded: '2023-01-21',
    votes: 45,
  },
  {
    id: uuidv4(),
    title: 'Medium',
    url: 'https://medium.com',
    tags: ['blog', 'articles'],
    description: 'A platform for writing and reading articles.',
    dateAdded: '2023-01-20',
    votes: 60,
  },
  {
    id: uuidv4(),
    title: 'TechCrunch',
    url: 'https://techcrunch.com',
    tags: ['tech', 'news'],
    description: 'Latest tech news.',
    dateAdded: '2023-01-19',
    votes: 30,
  },
  {
    id: uuidv4(),
    title: 'Ars Technica',
    url: 'https://arstechnica.com',
    tags: ['science', 'technology'],
    description: 'Science and tech articles.',
    dateAdded: '2023-01-18',
    votes: 15
  },
]

module.exports = {
  links,
};
