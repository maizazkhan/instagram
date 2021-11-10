import { ICommunityMember } from './community-member';

export interface ICommunity {
  CommunityId?: number;
  Name: string;
  Description: string;

  AllUsersCanAddPosts: boolean;
  AllUsersCanAddComments: boolean;
  AutoJoinNewUsers: boolean;

  AvatarImageMediaId?: number;
  BannerImageMediaId?: number;

  CreatedDateTime?: string;

  LastActivityDate?: string;
  MemberCount?: number;

  CommunityMember?: ICommunityMember;
}
