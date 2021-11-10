import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import * as moment from 'moment';

// Converts a date to an age: 11/28/1990 => '19'. If age is less than
// 12 months it will be displayed in months(example: '11 months').

@Pipe({
  name: 'personAge'
})
export class PersonAgePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: moment.MomentInput): string {
    if (value != null) {
      const months = moment().diff(value, 'months');
      const monthsTranslation = this.languageService.getText('time.duration.months');
      if (months < 12) {
        return `${months} ${monthsTranslation}`;
      }
      const years = moment().diff(value, 'years');
      return years.toString();
    } else {
      return '';
    }
  }
}
