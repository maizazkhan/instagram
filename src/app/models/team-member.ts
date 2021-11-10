import { IUser } from './user';

export interface ITeamMember {
  TeamMemberId?: number;
  TeamId: number;

  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  MobilePhoneNumber?: string;

  Birthdate?: string;
  Rating?: number;
  Gender?: string;
  Handedness?: string;

  AvatarImageMediaId?: number;
  BannerImageMediaId?: number;

  UserId?: number;
  id?: number;
  InviteSentDateTime?: string;
  created_at?: string;
  InviteAccepted?: boolean;

  User?: IUser;

  CurrentUserValues?: IUser;
  CurrentUserValue?: IUser;
}
