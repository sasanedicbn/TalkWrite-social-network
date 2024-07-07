export type Comment = {
    comment_id: string;
    created_at: string;
    full_name: string;
    picture: string;
    username: string;
    text: string;
  };
  
export type User = {
    username: string;
    full_name: string;
    picture: string;
  };
  
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
  
export type SinglePostState = {
    currentPost: Post;
  };
  
 export type CommentBtnTypes = {
    showPostHandler:(id: string) => Promise<void>,
    post_id:string,
    comments: number,
}

export type LikeBtnType = {
  likes:number,
  liked:boolean,
  post_id:string,
}
