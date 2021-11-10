export interface ITeam {
  TeamId?: number;
  TeamName: string;
  TeamNumber?: string;

  SinglesLines?: number;
  DoublesLines?: number;
  Gender?: string;
  PlayingLevel?: number;
  Affiliation?: string;
  AgeGroup?: string;

  LeagueDescription?: string;

  PlayoffsStartDate?: string;
  PracticeDetails?: string;
  Notes?: string;
  pin?: number;

  Captain1UserId?: number;
  Captain2UserId?: number;
  CreatedByUserId?: number;
  CreatedDateTime?: string;
}
