import { ITeam } from './team';
import { IVenue } from './venue';
import { IMatchCommitment } from './match-commitment';

export interface IMatch {
  MatchId?: number;
  TeamId: number;
  MatchDateTime: string;
  VenueId?: number;
  VenueName?: string;
  OpponentName: string;
  HomeOrAway: string;

  // Latitude?: string;
  // Longitude?: string;

  Team?: ITeam;

  Venue?: IVenue;
  fullVenue?: any;

  MatchCommitments?: IMatchCommitment[];
}
