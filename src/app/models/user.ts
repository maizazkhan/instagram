export interface IUser {
  UserId?: number;
  id?: number;
  FirstName?: string;
  first_name?: string;
  LastName?: string;
  last_name?: string;
  EmailAddress?: string;
  MobilePhoneNumber?: string;

  Birthdate?: string;
  Rating?: number;
  Gender?: string;
  Handedness?: string;
  RelationshipStatus?: string;
  Interests?: string;

  AvailableWeekdays?: boolean;
  AvailableWeeknights?: boolean;
  AvailableWeekends?: boolean;

  HomeLocationPostalCode?: string;

  HomeVenueId1?: number;
  HomeVenueId2?: number;
  HomeVenueId3?: number;

  fullVenue1?: any;
  fullVenue2?: any;
  fullVenue3?: any;

  AvatarImageMediaId?: number;
  BannerImageMediaId?: number;

  ProfilePic1MediaId?: number;
  ProfilePic2MediaId?: number;
  ProfilePic3MediaId?: number;

  HideFromSearch?: boolean;


  HomeLocationDescription?: string;
  HomeLocationLatitude?: number;
  HomeLocationLongitude?: number;

  HomeVenueName1?: string;
  HomeVenueName2?: string;
  HomeVenueName3?: string;

  UserIsActive?: boolean;

  Miles?: string;
  show_msg?: boolean;

  notify_chat_messages?: boolean;
  notify_friend_request?: boolean;
  notify_team_chat?: boolean;
  notify_mark_availability?: boolean;
  blocked?: boolean;
  friend_req_count?: number;
}
