import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { MomentFormats } from 'src/app/helpers/moment-formats';
import * as moment from 'moment';

@Pipe({ name: 'listDate' })
export class ListDatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

/* Formats the target date/time based on how far in the past it is:
    - Today: show the time "2:38pm"
    - Yesterday: "Yesterday"
    - Past Yesterday but within past seven days: day of week (ex. "Tuesday")
    - more than 7 days ago: MM/DD/YYYY (ex. 9/7/2019)
 */

  transform(value: moment.MomentInput): string {
    if (!!value) {
      const now = moment();
      const input = moment(value);

      const nowStartOfDay = now.clone().startOf('day');
      const inputStartOfDay = input.clone().startOf('day');

      const elapsedInDays = nowStartOfDay.diff(inputStartOfDay, 'days');

      if (elapsedInDays === 0) {
        return input.format(MomentFormats.TimeAmPm);
      } else if (elapsedInDays === 1) {
        return this.languageService.getText('time.yesterday');
      } else if (elapsedInDays > 1 && elapsedInDays < 7) {
        return input.format(MomentFormats.DayOfWeek);
      } else {
        return input.format(MomentFormats.AllNumbers);
      }
    }
  }
}
