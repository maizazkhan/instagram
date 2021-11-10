import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'social-feed',
  templateUrl: './social-feed.component.html',
  styleUrls: ['./social-feed.component.scss']
})
export class SocialFeedComponent implements OnInit {

  posts: any;
  isLoading = true;
  pageNo = 1;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    console.log('Hello SocialFeedComponent');
    this.loadFeed();
  }

  loadFeed() {
    this.isLoading = true;
    this.postsService.getPosts(this.pageNo, '2', 'feed').subscribe(
      (data) => {
        console.log('Home Feeds:-', data);
        this.posts = data.results;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  loadMoreData(ev) {
    this.pageNo = this.pageNo + 1;

    this.postsService.getPosts(this.pageNo, 2, 'feed').subscribe(
      (data) => {
        console.log('Home Feeds loadmore:-', data.results);
        this.posts = this.posts.concat(data.results);
        ev.target.complete();
      },
      () => {
        ev.target.complete();
      }
    );
  }
}
