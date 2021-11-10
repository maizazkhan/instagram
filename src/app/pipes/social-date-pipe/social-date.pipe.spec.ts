// import { async, inject } from '@angular/core/testing';
// import { TestUtils } from 'src/unit-tests/test-utils';
// import { LanguageService } from 'src/app/services/language.service';
// import * as moment from 'moment';

// import { SocialDatePipe } from './social-date.pipe';
// import { MomentFormats } from 'src/app/helpers/moment-formats';

// describe('SocialDatePipe', () => {
//   beforeEach(async(() => {
//     TestUtils.SetupService(SocialDatePipe);
//   }));

//   describe('date formatting', () => {
//     let pipe: SocialDatePipe;
//     let languageService: LanguageService;

//     beforeEach(inject(
//       [SocialDatePipe, LanguageService],
//       (injectedPipe: SocialDatePipe, injectedLanguageService: LanguageService) => {
//         pipe = injectedPipe;
//         languageService = injectedLanguageService;

//         // use this fake to verify what translation is being used
//         languageService.getText = jasmine.createSpy().and.callFake((key, parameters) => {
//           return `${key}:${!!parameters ? parameters.value : 'no params'}`;
//         });
//       }
//     ));

//     it('formats a time span of 59 seconds as "Now"', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(59, 'seconds');

//       const result = pipe.transform(transformTarget.toDate(), { now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.now');
//       expect(result).toEqual('time.now:no params');
//     });

//     it('formats a time span of 59 minutes as "N minutes ago"', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(59, 'minutes');

//       const result = pipe.transform(transformTarget.toDate(), { now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.minutes', { value: '59' });
//       expect(result).toEqual(`time.minutes:59`);
//     });

//     it('formats a time span of 60 minutes or more but still today as "N hours ago"', async () => {
//       const now = moment().startOf('day').add(10, 'hours');
//       const transformTarget = now
//         .clone()
//         .subtract(4, 'hours');

//       const result = pipe.transform(transformTarget.toDate(), { now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.hours', { value: '4' });
//       expect(result).toEqual(`time.hours:4`);
//     });

//     it('formats a time span of less than 24 hours but not today as "Yesterday"', async () => {
//       const now = moment().startOf('day').add(2, 'hours');
//       const transformTarget = now.clone().subtract(4, 'hours');

//       const result = pipe.transform(transformTarget.toDate(), { yesterdayFormat: null, now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.yesterday');
//       expect(result).toEqual(`time.yesterday:no params`);
//     });

//     it('formats a time span of 24 hours - WITHOUT a yesterday format - as "Yesterday"', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(24, 'hours');

//       const result = pipe.transform(transformTarget.toDate(), { yesterdayFormat: null, now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.yesterday');
//       expect(result).toEqual(`time.yesterday:no params`);
//     });

//     it('formats a time span of 24 hours - WITH a yesterday format - as "Yesterday at [yesterdayFormat]"', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(24, 'hours');
//       const timeFormat = 'hh:mm a';
//       const formattedTime = transformTarget.format(timeFormat);

//       const result = pipe.transform(transformTarget.toDate(), { yesterdayFormat: timeFormat, now: now });

//       expect(languageService.getText).toHaveBeenCalledWith('time.yesterdayAt', { value: formattedTime });
//       expect(result).toEqual(`time.yesterdayAt:${formattedTime}`);
//     });

//     it('formats a time span of 47:59:59 with the given format', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(48, 'hours').add(1, 'second');
//       const format = MomentFormats.DayNameMonthNameWithTime;
//       const formattedDate = transformTarget.format(format);

//       const result = pipe.transform(transformTarget.toDate(), { format: format, now: now });

//       expect(result).toEqual(formattedDate);
//     });

//     it('formats a time span of 48 hours with the given format', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(48, 'hours');
//       const format = MomentFormats.DayNameMonthNameWithTime;
//       const formattedDate = transformTarget.format(format);

//       const result = pipe.transform(transformTarget.toDate(), { format: format, now: now });

//       expect(result).toEqual(formattedDate);
//     });

//     it('formats a time span of 1+ years - WITH a year format - with the given year format', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(1, 'year');
//       const format = 'YYYY MMM D h:mma';
//       const formattedDate = transformTarget.format(format);

//       const result = pipe.transform(transformTarget.toDate(), { yearFormat: format, now: now });

//       expect(result).toEqual(formattedDate);
//     });

//     it('formats a time span of over 1+ years - WITHOUT a year format - with the default year format', async () => {
//       const now = moment();
//       const transformTarget = now.clone().subtract(1, 'year');

//       const format = MomentFormats.SocialMonthYearTime;
//       const expectedFormattedDate = transformTarget.format(format);

//       const result = pipe.transform(transformTarget.toDate(), { now: now });

//       expect(result).toEqual(expectedFormattedDate);
//     });

//     it('overrides year and normal formats when provided an allFormat', async () => {
//       const now = moment();
//       const yearTarget = now.clone().subtract(1, 'year').subtract(1, 'day');
//       const yesterdayTarget = now.clone().subtract(1, 'day');
//       const normalTarget = now.clone().subtract(3, 'day');
//       const lessThan24hTarget = now.clone().subtract(6, 'hours');

//       const allFormat = '[ALL FORMAT]';
//       const otherFormat = '[OTHER FORMAT]';
//       const yesterdayFormat = '[YESTERDAY FORMAT]';
//       const options = {
//         format: otherFormat,
//         yesterdayFormat: yesterdayFormat,
//         yearFormat: otherFormat,
//         allFormat: allFormat,
//         now: now
//       };

//       // does not override yesterday format
//       const yesterdayResult = pipe.transform(yesterdayTarget.toDate(), options);
//       expect(yesterdayResult).toEqual('time.yesterdayAt:YESTERDAY FORMAT');

//       const yearResult = pipe.transform(yearTarget.toDate(), options);
//       expect(yearResult).toEqual('ALL FORMAT');

//       const normalResult = pipe.transform(normalTarget.toDate(), options);
//       expect(normalResult).toEqual('ALL FORMAT');

//       const lessThan24hResult = pipe.transform(lessThan24hTarget.toDate(), options);
//       expect(lessThan24hResult).toEqual('time.hours:6');
//     });
//   });
// });
