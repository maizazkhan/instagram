export interface IUserSearchOptions {
  SearchText?: string;

  CurrentUserId?: number;

  Latitude?: number;
  Longitude?: number;

  OnlyShowFriends?: boolean;

  MilesAway?: number;

  MinRating?: number;
  MaxRating?: number;

  MinAge?: number;
  MaxAge?: number;

  GenderAny?: boolean;
  GenderMale?: boolean;
  GenderFemale?: boolean;
  GenderOther?: boolean;

  Interests?: string[];

  AvailableAny?: boolean;
  AvailableWeekdays?: boolean;
  AvailableWeeknights?: boolean;
  AvailableWeekends?: boolean;

  RelationshipStatusAny?: boolean;
  RelationshipStatusSingle?: boolean;
  RelationshipStatusMarried?: boolean;
  RelationshipStatusDivorced?: boolean;
  RelationshipStatusWidowed?: boolean;
  RelationshipStatusOther?: boolean;

  VenueId?: number;

  SkipRows?: number;
  MaxRows?: number;
}
