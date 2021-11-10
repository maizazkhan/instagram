export interface IPollAnswer {
  PollAnswerId?: number;
  PollId?: number;
  Seq?: number;
  AnswerText?: string;
  IsCorrectAnswer?: boolean;

  IsUserSelection?: boolean;
  ResponseCount?: number;
  ResponsePercent?: number;
}
