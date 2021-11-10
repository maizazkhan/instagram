import { IFriend } from 'src/app/models/friend';
import { IUser } from 'src/app/models/user';
import { ICachedUser } from 'src/app/models/cached-user';

export enum FriendStatus {
  NOT_FRIENDS = 'NOT_FRIENDS',
  FRIENDS = 'FRIENDS',
  THAT_USER_REJECTED = 'THAT_USER_REJECTED',
  THIS_USER_REJECTED = 'THIS_USER_REJECTED',
  THIS_USER_REQUESTED = 'THIS_USER_REQUESTED',
  THAT_USER_REQUESTED = 'THAT_USER_REQUESTED',
  ME = 'ME'
}

export class FriendHelper {
  public static getFriendStatus(friend: IFriend, displayUser: IUser, thisUser: ICachedUser) {
    console.log('displayUser:-', displayUser);
    console.log('thisUser:-', thisUser);
    console.log('friend:-', friend);
    if (!friend) {
      console.log(displayUser.id !== thisUser.user_id);
      if (displayUser.id !== thisUser.user_id) {
        return FriendStatus.NOT_FRIENDS;
      } else {
        return FriendStatus.ME;
      }
    }

    const thisUserRequested = (friend.user_id_1 === thisUser.user_id);
    console.log('thisUserRequested:-', thisUserRequested);

    if (friend.DateTimeAccepted && !friend.DateTimeRejected) {
      return FriendStatus.FRIENDS;
    }

    if (friend.DateTimeRejected) {
      if (thisUserRequested) {
        return FriendStatus.THAT_USER_REJECTED;
      } else {
        return FriendStatus.THIS_USER_REJECTED;
      }
    }

    if (thisUserRequested) {
      return FriendStatus.THIS_USER_REQUESTED;
    } else {
      return FriendStatus.THAT_USER_REQUESTED;
    }
  }
}
