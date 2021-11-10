import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input() like: any;
  @Input() showAsLink = false;

  updatingLike = false;

  constructor() {}

  ngOnInit() {
    console.log('Hello LikeComponent');
    console.log('Like:-', this.like);
  }

  toggleLikeClicked(text) {
    if (text === 'Like') {
      this.showAsLink = true;
    } else {
      this.showAsLink = false;
    }
  }

}
