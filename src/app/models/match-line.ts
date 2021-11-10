import { ITeamMember } from './team-member';

export interface IMatchLine {
  MatchLineId?: number;
  MatchId: number;
  LineType: string;
  Line: number;

  TeamMemberId1?: number;
  TeamMemberId2?: number;

  Set1GamesWon?: number;
  Set2GamesWon?: number;
  Set3GamesWon?: number;

  Opponent1?: string;
  Opponent2?: string;

  OpponentSet1GamesWon?: number;
  OpponentSet2GamesWon?: number;
  OpponentSet3GamesWon?: number;

  TeamMember1?: ITeamMember;
  TeamMember2?: ITeamMember;
}
