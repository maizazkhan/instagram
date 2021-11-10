import { ITeamMember } from './team-member';

export interface IMatchCommitment {
  MatchCommitmentId?: number;
  MatchId: number;
  TeamMemberId: number;
  Available: string;

  TeamMember: ITeamMember;
}
