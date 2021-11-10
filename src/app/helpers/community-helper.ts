import { ICommunity } from 'src/app/models/community';

export class CommunityHelper {
  public static userIsMember(community: ICommunity) {
    if (community) {
      if (community.CommunityMember !== null && community.CommunityMember.IsMember) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  public static userIsAdmin(community: ICommunity) {
    if (community) {
      if (community.CommunityMember !== null && community.CommunityMember.IsAdmin) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  public static userCanAddPosts(community: ICommunity) {
    let communityAllUsersCanAddPosts = false;
    let userCanAddPosts = null;

    if (community) {
      communityAllUsersCanAddPosts = community.AllUsersCanAddPosts;
      if (community.CommunityMember !== null) {
        userCanAddPosts = community.CommunityMember.CanAddPosts;
      }
    }

    if (userCanAddPosts ||
       (userCanAddPosts !== false && communityAllUsersCanAddPosts)) {
      return true;
    } else {
      return false;
    }
  }

  public static userCanAddComments(community: ICommunity) {
    let communityAllUsersCanAddComments = false;
    let userCanAddComments = null;

    if (community) {
      communityAllUsersCanAddComments = community.AllUsersCanAddComments;
      if (community.CommunityMember !== null) {
        userCanAddComments = community.CommunityMember.CanAddComments;
      }
    }

    if (userCanAddComments ||
       (userCanAddComments !== false && communityAllUsersCanAddComments)) {
      return true;
    } else {
      return false;
    }
  }
}
