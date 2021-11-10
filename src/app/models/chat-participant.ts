import { IUser } from './user';

export interface IChatParticipant {
  ChatUserId: number;
  ChatId: number;
  UserId: number;

  User: IUser;
}
