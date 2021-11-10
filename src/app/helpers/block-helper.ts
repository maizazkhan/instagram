
import { IUser } from 'src/app/models/user';
import { ICachedUser } from 'src/app/models/cached-user';

export enum BlockStatus {
  THIS_USER_BLOCKED = 'THIS_USER_BLOCKED',
  THIS_USER_NOT_BLOCKED = 'THIS_USER_NOT_BLOCKED',
}

export class BlockHelper {
  public static getBlockStatus(displayUser: IUser, thisUser: ICachedUser) {
    console.log('displayUser:-', displayUser);
    console.log('thisUser:-', thisUser);
    if (displayUser) {
      console.log(displayUser.id !== thisUser.user_id);
      if (displayUser.id !== thisUser.user_id) {
        if (displayUser.blocked) {
          return BlockStatus.THIS_USER_BLOCKED;
        } else {
          return BlockStatus.THIS_USER_NOT_BLOCKED;
        }
      }
    }
  }
}
