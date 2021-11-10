import { IUser } from './user';

export interface IFriend {
  FriendId?: number;
  UserId1?: number;
  UserId2?: number;
  user_id_1?: number;
  user_id_2?: number;
  IsFavoriteUser1?: boolean;
  IsFavoriteUser2?: boolean;
  DateTimeRequested?: string;
  DateTimeAccepted?: string;
  DateTimeRejected?: string;

  IsFavorite?: boolean;

  User?: IUser;
}
