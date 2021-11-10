import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ChatTimePipe } from './chat-time/chat-time.pipe';
import { ListDatePipe } from './list-date/list-date.pipe';
import { PersonAgePipe } from './person-age/person-age.pipe';
import { SocialDatePipe } from './social-date-pipe/social-date.pipe';

@NgModule({
  declarations: [ChatTimePipe, ListDatePipe, PersonAgePipe, SocialDatePipe],
  exports: [ChatTimePipe, ListDatePipe, PersonAgePipe, SocialDatePipe],
  imports: [CommonModule],
  providers: [DatePipe, ChatTimePipe, ListDatePipe, PersonAgePipe, SocialDatePipe]
})
export class PipesModule {}
