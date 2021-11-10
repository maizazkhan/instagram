import { IUser } from './user';
import { ISocialPostMedia } from './social-post-media';

export interface ISocialPost {
  SocialPostId?: number;
  id?: number;
  CommunityId?: number;
  TeamId?: number;
  UserId?: number;
  PostDateTime?: string;
  Text?: string;
  Tags?: string;
  PollId?: number;
  SocialPostParentId?: number;

  LikeCount?: number;
  CommentCount?: number;
  UserLiked?: boolean;

  CommunityOrTeamName?: string;

  User?: IUser;

  SocialPostMedia?: ISocialPostMedia[];
}
