import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CommonComponentsModule } from 'src/app/components/common-components/common-components.module';

import { CommentComponent } from './comment/comment.component';
import { LikeComponent } from './like/like.component';
import { MediaModalComponent } from './media-modal/media-modal.component';
import { MediaViewerComponent } from './media-viewer/media-viewer.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialPostComponent } from './social-post/social-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    TranslateModule,
    CommonComponentsModule
  ],
  declarations: [
    CommentComponent,
    LikeComponent,
    MediaModalComponent,
    MediaViewerComponent,
    SocialFeedComponent,
    SocialPostComponent,
  ],
  exports: [
    CommentComponent,
    LikeComponent,
    MediaModalComponent,
    MediaViewerComponent,
    SocialFeedComponent,
    SocialPostComponent,
  ],
  entryComponents: [
    MediaModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSocialComponentsModule {}
