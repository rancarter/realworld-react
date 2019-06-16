type Author = {
  username: string,
  image: string,
}

export type Article = {
  author: Author,
  slug: string,
  title: string,
  description: string,
  createdAt: string,
  favoritesCount: number,
}