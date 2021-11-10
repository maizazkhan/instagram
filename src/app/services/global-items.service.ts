import { Injectable } from '@angular/core';
import { LoadingController, ActionSheetController, ToastController } from '@ionic/angular';
import swal from 'sweetalert';

// declare var swal: any;
@Injectable({
  providedIn: 'root'
})
export class GlobalItemsService {

  loading: any;
  isLoading: boolean = false;

  constructor(public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController,
              public toastController: ToastController) { }

    showAlert(title: any, msg: any, successORerror?: any) {
      return new Promise(resolve => {
        title = title;
        msg = msg;
        swal({
          title: title,
          text: msg,
          closeOnEsc: false,
          icon: successORerror,
          timer: 10000
        }).then(() => {
          resolve(true);
        });
      });
    }

    // async showloading(message) {
    //   this.loading = await this.loadingCtrl.create({
    //     spinner: 'bubbles',
    //     message: message
    //   });
    //   await this.loading.present();
    //   // setTimeout(() => {
    //   //   loading.dismiss();
    //   // }, 5000);
    // }
    // async dismissLoading() {
    //   await this.loading.dismiss();
    // }

  async showloading(ss) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: 'bubbles',
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('Loader presenting'));
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss('result').then(() => console.log('Loader dismissed'));
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
}
