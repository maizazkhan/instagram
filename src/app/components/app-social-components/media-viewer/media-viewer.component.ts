import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MediaModalComponent } from 'src/app/components/app-social-components/media-modal/media-modal.component';
import { MediaTypes } from 'src/app/models/media-types';

@Component({
  selector: 'media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements OnInit {
  @Input() mediaId: any;
  @Input() index: string;
  @Input() mediaType: string;
  @Input() mediaDataStream: string;
  @Input() videoControls = true;
  @Input() videoPreload = false;
  @Input() videoAutoplay = true;
  @Input() videoPoster: string;
  @Input() fullSize = false;
  @Input() allowOpenItem = true;
  @Input() width = '';
  @Input() height = '';

  isLoading = true;
  imageLoaded = false;

  mediaTypes: any = MediaTypes;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log('Hello MediaViewerComponent');
    console.log('Index:-', this.mediaId);
    if (this.mediaId) {
      this.isLoading = false;
    }
  }

  onImageLoaded() {
    this.imageLoaded = true;
    console.log('imageLoaded:-', this.imageLoaded);
  }

  openMediaClicked() {
    console.log('Open Media');
    if (!this.fullSize && this.allowOpenItem) {
      this.modalController
        .create({
          component: MediaModalComponent,
          componentProps: {
            mediaId: this.mediaId,
          },
          cssClass: 'mediaModal'
        })
        .then((modal) => {
          modal.present();
        });
    }
  }
}
