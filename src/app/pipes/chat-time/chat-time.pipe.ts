import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { MomentFormats } from 'src/app/helpers/moment-formats';
import * as moment from 'moment';

@Pipe({
  name: 'chatTime'
})
export class ChatTimePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: moment.MomentInput): string {
    if (!!value) {
      const now = moment();
      const input = moment(value);

      const elapsedInDays = now.diff(input, 'days');
      const isNotThisYear = now.year() !== input.year();

      if (now.format('L') === input.format('L')) {
        return this.languageService.getText('time.today') + ' ' + input.format(MomentFormats.TimeAmPm);
      } else if (elapsedInDays === 1) {
        return this.languageService.getText('time.yesterday') + ' ' + input.format(MomentFormats.TimeAmPm);
      } else if (isNotThisYear) {
        return input.format(MomentFormats.SocialMonthYearTime);
      } else {
        return input.format(MomentFormats.SocialMonthTime);
      }
    }
  }
}
