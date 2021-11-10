import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PopupMenuItem } from 'src/app/models/popup-menu-item';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LanguageService } from 'src/app/services/language.service';
import { parse } from 'querystring';

@Component({
  selector: 'social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss']
})
export class SocialPostComponent implements OnInit {
  @Input() postItem;
  @Input() index;
  @Input() showMedia = true;
  @Input() showBorder = true;

  popupMenuItems: PopupMenuItem[];
  isLoading = true;
  pageNo = 1;
  text = 'lorem ipsum';

  constructor(
    private router: Router,
    private socialSharing: SocialSharing,
    private languageService: LanguageService,
  ) {}

  ngOnInit() {
    console.log('Hello SocialPostComponent');
    this.index = this.index + 1;
    console.log('Index:-', this.index);
    console.log('postItem:-', this.postItem);
    this.popupMenuItems = this.getPopupMenuItems();
  }

  communityNameClicked() {
    if (this.postItem.CommunityId != null) {
      this.router.navigate(['community', { id: this.postItem.CommunityId }]);
    } else if (this.postItem.TeamId != null) {
      this.router.navigate(['team', { id: this.postItem.TeamId }]);
    }
  }

  getPopupMenuItems() {
    const menuItems = Array<PopupMenuItem>();
    menuItems.push({
      text: this.languageService.getText('social.share'),
      handler: () => { this.onShare(); }
    });
    menuItems.push({
      text: this.languageService.getText('social.editPost'),
      handler: () => { this.onEdit(); }
    });
    menuItems.push({
      text: this.languageService.getText('social.deletePost'),
      handler: () => { this.onDelete(); }
    });
    menuItems.push({
      text: this.languageService.getText('social.reportInappropriateContent'),
      handler: () => { this.onReportInappropriateContent(); }
    });

    return menuItems;
  }

  avatarClicked(user) {
    console.log('Selected user:-', user);
    const location = {
      city: user.location.city,
      state: user.location.state
    };
    const dataUser = {
      gender: user.gender,
      name: JSON.stringify(user.name),
      location: JSON.stringify(location),
      picture: user.picture.medium
    };
    this.router.navigate(['profile', dataUser]);
  }

  onShare() {
    const url = 'https://www.google.com/';
    const text = 'Hello brother';
    this.socialSharing.share(text, 'MEDIUM', null, url);
  }

  onEdit() {
    alert('Edit the post');
  }

  onDelete() {
    alert('Delete the post');
  }

  onReportInappropriateContent() {
    alert('Report the post');
  }

}
