import { Comment, User } from "./singlePostType";

export type Post = {
  audio: string | null;
  post_id: string;
  text: string;
  comments: Comment[];
  created_at: string;
  image: string;
  liked: boolean;
  likes: number;
  user: User;
  user_id: string;
};

export type PostsState = {
  posts: Post[];
};

