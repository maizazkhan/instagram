import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnChanges {
  @Input() user: any;
  @Input() banner: string;

  constructor() {}

  ngOnInit() {
    console.log('Hello ProfileHeaderComponent');
    console.log('User ProfileHeaderComponent:-', this.user);
  }

  ngOnChanges() {
    console.log('Event ngOnChanges');
    console.log('User ngOnChanges:-', this.user);
  }
}
