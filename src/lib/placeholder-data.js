// Dependencies
const { v4: uuidv4 } = require('uuid');

// Table 1: Users
// Array of User Objects
// ********** 
// const users = [ // Array of User Objects
//   {
//     userID: uuidv4(),
//     username: str,
//   },
// ]

// Table 2: Lists
// Array of List Objects
// ********** 
// const lists = [ // Start Array of List Objects per user
//   {
//     listID: uuidv4(),
//     userID: uuidv4(),
//     title: str,
//     desc: str,
//     dateCreated: date,
//     dateUpdated: date,
//   },
// ]

// Table 3: Global Links
// Scope: Array of Global Link Objects. 
// Purpose: Stores unique links without duplicating in the database. 
// ********** 
// const links = [ // Start Array of Link Objects per user
//   {
//     linkID: uuidv4(),
//     url: str,
//     title: str,
//     desc: str,
//     previewImg: str,
//     dateAdded: date,
//     tags, str[],
//   },
// ]

// Table 4: User Links
// Scope: Array of User Link Objects. 
// Purpose: Stores user's references to the global link objects.
// Need to rethink this scalability further.
// ********** 
// const userLinks = [ // Start Array of Link Objects per user
//   {
//   },
// ]

// Table 5: Link Tags
// Scope: Array of Tags Per Link Per List Per User. 
// Purpose: Multiple users may add the same URL to their list, which does not need to be duplicated. But each link will have unique tags based on each list and each link and each user.
// Need to rethink this scalability further.
// ********** 
// const linkTags = [ // Start Array of Link Objects per user
//   {
//   },
// ]

// Current Live Deploy
// ********** 

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

// Next Steps:
// ********** 
// - Links may be duplicates across users and lists, but tags per link will be unique. Need to consider a Postgres ORM layer.