import { IUser } from './user';

export interface IChat {
  ThreadType: string;
  ThreadId: number;
  ChatName: string;
  ChatNameAlt: string;
  LatestMessageText: string;
  LatestMessageDateTime: string;
  UserCount: number;
  DisplayUser: IUser;
}
