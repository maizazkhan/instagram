import { IChat } from 'src/app/models/chat';

export class ChatHelper {
  public static getChatName(chat: IChat) {
    let name = '';
    if (chat) {
      if (chat.ChatName !== null && chat.ChatName !== '') {
        name = chat.ChatName;
      } else {
        name = chat.ChatNameAlt;
      }
    }
    return name;
  }
}
