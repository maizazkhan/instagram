import { IPollAnswer } from './poll-answer';

export interface IPoll {
  PollId?: number;
  QuestionText?: string;
  AllowUserToChangeResponse?: boolean;
  MoreInformation?: string;
  EndDateTime?: string;

  Answers?: IPollAnswer[];
}
