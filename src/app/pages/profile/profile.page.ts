import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AppConfig } from 'src/app/app-config';
import { ProfileTabs } from './profile-tabs';
import { PopupMenuItem } from 'src/app/models/popup-menu-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  userId: number;
  user = {
    gender: '',
    name: {
      first: '',
      last: '',
      title: '',
    },
    location: {
      city: '',
      state: ''
    },
    picture: ''
  };
  selectedTab: ProfileTabs = ProfileTabs.ThreePhotos;
  isLoading = true;


  popupMenuItems: PopupMenuItem[];

  constructor(
    public location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Hello ProfilePage');
    this.activatedRoute.params.subscribe (data => {
      console.log('User profile:-', data);
      this.user.gender = data.gender;
      this.user.name = JSON.parse(data.name);
      this.user.location = JSON.parse(data.location);
      this.user.picture = data.picture;
      console.log('User profile:-', this.user);
      this.isLoading = false;
    });
  }

  doRefresh(ev) {
    ev.target.complete();
  }

  onMobileNavigationChange(tab: ProfileTabs) {
    this.selectedTab = tab;
    console.log('selectedTab:-', this.selectedTab);
  }

}
