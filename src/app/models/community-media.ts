import { ISocialPost } from './social-post';
import { ISocialPostMedia } from './social-post-media';
import { IUser } from './user';

export interface ICommunityMedia {
  SocialPostMedia: ISocialPostMedia;
  SocialPost: ISocialPost;
  User: IUser;
}
