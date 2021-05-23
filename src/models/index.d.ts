import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly picture?: string;
  readonly following?: (Followering | null)[];
  readonly followers?: (Follower | null)[];
  readonly blackList?: (UserBlackList | null)[];
  readonly interest?: (Interest | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Followering {
  readonly id: string;
  readonly isFollowing: boolean;
  readonly userID: string;
  readonly followering: User;
  constructor(init: ModelInit<Followering>);
  static copyOf(source: Followering, mutator: (draft: MutableModel<Followering>) => MutableModel<Followering> | void): Followering;
}

export declare class Follower {
  readonly id: string;
  readonly isFollow: boolean;
  readonly userID: string;
  readonly follower: User;
  constructor(init: ModelInit<Follower>);
  static copyOf(source: Follower, mutator: (draft: MutableModel<Follower>) => MutableModel<Follower> | void): Follower;
}

export declare class UserBlackList {
  readonly id: string;
  readonly userID: string;
  readonly blackList: User;
  constructor(init: ModelInit<UserBlackList>);
  static copyOf(source: UserBlackList, mutator: (draft: MutableModel<UserBlackList>) => MutableModel<UserBlackList> | void): UserBlackList;
}

export declare class Interest {
  readonly id: string;
  readonly name: string;
  readonly profile: string;
  readonly userID: string;
  readonly categoryID: string;
  readonly category?: Category;
  constructor(init: ModelInit<Interest>);
  static copyOf(source: Interest, mutator: (draft: MutableModel<Interest>) => MutableModel<Interest> | void): Interest;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly profile: string;
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Post {
  readonly id: string;
  readonly desc: string;
  readonly postImage?: string;
  readonly isPrivate: boolean;
  readonly time: string;
  readonly interest: string;
  readonly user: User;
  readonly comments?: (Comment | null)[];
  readonly likes?: (Like | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly parentComentId: string;
  readonly childCommentId?: string;
  readonly content: string;
  readonly commentImage?: string;
  readonly time: string;
  readonly likes?: (Like | null)[];
  readonly user: User;
  readonly post: Post;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Like {
  readonly id: string;
  readonly isLiked: boolean;
  readonly time: string;
  readonly user: User;
  readonly post?: Post;
  readonly comment?: Comment;
  constructor(init: ModelInit<Like>);
  static copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}