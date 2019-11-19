type Author = {
  username: string;
  image: string;
};

export type Article = {
  author: Author;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  favoritesCount: number;
  body: string;
};

export interface User {
  id: number;
  email: string;
  token: string;
};

export interface UserWithToken extends User {
    username: string;
}