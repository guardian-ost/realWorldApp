export type User = {
    bio?: string | undefined
    email?: string | undefined
    image?: string | undefined
    username?: string | undefined
    token?: string | undefined
}

export type UserRegister = {
    user: {
        username?: string,
        email: string,
        password: string
    }
}

export type UserResponse = {
    user: {
        bio?: string;
        email?: string;
        image?: string;
        username?: string;
        token?: string;
    };
}

export type Tags = {
    tags: string[];
}
export type Author = {
    username: string,
    bio: string,
    image: string,
    following: boolean
}

export type Article = {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: Author
}

export type Articles = {
    articles: Article[],
    articlesCount: number
  }