import { IUser } from './user';

export interface ISocialPostLike {
  SocialPostLikeId: number;
  SocialPostId: number;
  LikeDatetime: string;
  UserId: number;

  User: IUser;
}
