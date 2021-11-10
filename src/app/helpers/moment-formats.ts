export enum MomentFormats {
  Time = 'LT',                                      // 9:26 AM
  TimeWithSeconds = 'LTS',                          // 9:26:25 AM
  TimeAmPm = 'h:mma',                               // 9:15am
  AllNumbersLeadingZeroes = 'L',                    // 06/11/2077
  AllNumbers = 'l',                                 // 10/23/2077
  MonthName = 'LL',                                 // October 23, 2077
  ShortMonthName = 'll',                            // Oct 23, 2077
  MonthNameWithTime = 'LLL',                        // October 23, 2077 9:26 AM
  ShortMonthNameWithTime = 'lll',                   // Oct 23, 2077 9:26 AM
  DayNameMonthNameWithTime = 'LLLL',                // Saturday, October 23, 2077 9:26 AM
  ShortDayNameMonthNameWithTime = 'llll',           // Sat, Oct 23, 2077 9:26 AM
  ShortMonthYear = 'MMM YYYY',                      // Feb 2077
  ShortDate = 'MM/DD/YYYY',                         // 03/25/2019
  ShortDateTime = 'MM/DD/YYYY h:mma',               // 03/25/2019 09:45pm
  SocialMonthTime = 'MMM D [at] h:mma',             // Oct 1 at 9:15pm
  SocialMonthYearTime = 'MMM D, YYYY [at] h:mma',   // Oct 1, 2015 at 9:15pm
  LogicalYearMonthDate = 'YYYY/MM/DD',              // 2019/05/15
  LogicalYearMonthDateTime = 'YYYY/MM/DD hh:mma',   // 2019/05/15 03:30am
  MonthDateNoYear = 'MM/DD',                        // 05/15
  DayOfWeek = 'dddd'                                // Saturday
}
