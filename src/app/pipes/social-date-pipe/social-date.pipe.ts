import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { MomentFormats } from 'src/app/helpers/moment-formats';
import * as moment from 'moment';

export interface ISocialDatePipeOptions {
  /** When provided, is used instead of the other format options (excludes the < 24 hour formats). */
  allFormat?: string;
  /** Used when the target date/time was >= 2 days and < 1 year ago. */
  format?: string;
  /** Used when the target date/time was < 2 days and >= 1 days ago (it was yesterday). */
  yesterdayFormat?: string;
  /** Used when the target date/time was in a different year. */
  yearFormat?: string;
  // tslint:disable-next-line:max-line-length
  /** A control date and time to measure the piped value against. Will default to the current date and time unless provided. Intended for use in unit tests. */
  now?: moment.Moment;
}

/** Formats the target date/time based on how far in the past it is:
 * - < 60 seconds ago: "Now"
 * - < 60 minutes ago: "N minutes ago"
 * - Today: "N hours ago"
 * - Yesterday: "Yesterday" or "Yesterday at {yesterdayFormat}", default = Yesterday at 9:15pm
 * - Past Yesterday: "{format}", default = October 1 at 9:15pm
 * - 1 year+: "{yearFormat}", default = October 1, 2015 at 9:15pm
 */
@Pipe({
  name: 'socialDate'
})
export class SocialDatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: moment.MomentInput, options?: ISocialDatePipeOptions): string {
    if (!!value) {
      let format = options && options.format ? options.format : MomentFormats.SocialMonthTime;
      let yearFormat = options && options.yearFormat ? options.yearFormat : MomentFormats.SocialMonthYearTime;

      const yesterdayFormat =
        options && options.yesterdayFormat !== undefined ? options.yesterdayFormat : MomentFormats.TimeAmPm;

      const now = options && options.now ? options.now : moment();

      if (options && options.allFormat) {
        format = yearFormat = options.allFormat;
      }

      const input = moment(value);

      const nowStartOfDay = now.clone().startOf('day');
      const inputStartOfDay = input.clone().startOf('day');

      const elapsedInSeconds = now.diff(input, 'seconds');
      const elapsedInMinutes = now.diff(input, 'minutes');
      const elapsedInHours = now.diff(input, 'hours');
      const elapsedInDays = nowStartOfDay.diff(inputStartOfDay, 'days');
      const isMoreThanAYear = now.year() !== input.year();

      if (elapsedInSeconds < 60) {
        return this.languageService.getText('time.now');
      } else if (elapsedInMinutes < 60) {
        return this.languageService.getText('time.minutes', { value: elapsedInMinutes.toString() });
      } else if (elapsedInDays === 0) {
        return this.languageService.getText('time.hours', { value: elapsedInHours.toString() });
      } else if (elapsedInDays === 1) {
        if (!!yesterdayFormat) {
          const text = input.format(yesterdayFormat);
          return this.languageService.getText('time.yesterdayAt', { value: text });
        } else {
          return this.languageService.getText('time.yesterday');
        }
      } else if (isMoreThanAYear) {
        return input.format(yearFormat);
      } else {
        return input.format(format);
      }
    }
  }
}
