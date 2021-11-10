import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICachedUser } from 'src/app/models/cached-user';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {
  @Input() size: string;  // Values: small, medium, large, profile
  @Input() imageDataStream: string;
  @Input() mediaId: any;
  @Input() user: IUser;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() rating: string;
  @Input() myAccount: string;
  @Input() available = '';
  @Input() title: string;

  cachedUser: ICachedUser;

  initials = '';
  displayModes = {
    image: 'image',
    initials: 'initials',
    anonymous: 'anonymous'
  };
  displayMode = this.displayModes.anonymous;

  dataStream: string;

  constructor() {}

  ngOnInit() {
    // console.log('First name:-', this.firstName);
    console.log('Image:-', this.mediaId);
    console.log('First Name:-', this.firstName);
    console.log('Last Name:-', this.lastName);
    // this.loadImage();
  }

  ionViewDidEnter() {
    console.log('Rating:-', this.rating);
    console.log('My Account:-', this.myAccount);
    console.log('Title:-', this.title);
    console.log('User:-', this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mediaId']) {
      this.mediaId = changes['mediaId'].currentValue;
    }
  }

}
