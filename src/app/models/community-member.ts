import { IUser } from './user';

export interface ICommunityMember {
  CommunityMemberId?: number;
  CommunityId: number;
  UserId: number;
  IsMember?: boolean;
  IsAdmin?: boolean;
  CanAddPosts?: boolean;
  CanAddComments?: boolean;

  User?: IUser;
}
