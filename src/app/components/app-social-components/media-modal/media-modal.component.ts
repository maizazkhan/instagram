import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent implements OnInit {
  mediaId: any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    console.log('Hello MediaModalComponent');
    console.log('MediaID:-', this.mediaId);
  }

  closeClicked() {
    this.modalController.dismiss();
  }
}
