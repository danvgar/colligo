// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
export type User = {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  lists: List[];
};

export type List = {
  id: string;
  name: string;
  links: Link[];
};

export type Link = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  description: string;
  dateAdded: string;
  votes: number;
};

export type LinksTable = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  description: string;
  dateAdded: string;
  votes: number;
};

export type LinkForm = {
  id: string;
  title: string;
  url: string;
  tags: string[];
  description: string;
};