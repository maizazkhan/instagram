import { ITeamMember } from 'src/app/models/team-member';
import { IUser } from 'src/app/models/user';

export class TeamMemberHelper {
  public static populateCurrentUserValues(teamMember: ITeamMember): IUser {
    // console.log('Team member:-', teamMember);
    if (teamMember) {
      if (teamMember.InviteAccepted) {
        return teamMember.User;
      } else {
        return {
          FirstName: teamMember.FirstName,
          LastName: teamMember.LastName,
          EmailAddress: teamMember.EmailAddress,
          MobilePhoneNumber: teamMember.MobilePhoneNumber,
          Birthdate: teamMember.Birthdate,
          Rating: teamMember.Rating,
          Gender: teamMember.Gender,
          Handedness: teamMember.Handedness,
          AvatarImageMediaId: teamMember.AvatarImageMediaId
        };
      }
    }
  }
}
