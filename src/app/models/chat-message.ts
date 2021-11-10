import { IUser } from './user';

export interface IChatMessage {
  ChatMessageId: number;
  ThreadType: string;
  ThreadId: number;
  MessageDateTime: string;
  Text: string;
  message: string;
  SentByUserId: number;
  created_at: string;
  SentByUser: IUser;
}
