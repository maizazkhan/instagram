import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AvatarComponent } from './avatar/avatar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ImageCropperModule
  ],
  declarations: [
    AvatarComponent,
    IconButtonComponent
  ],
  exports: [
    AvatarComponent,
    IconButtonComponent,
    PipesModule,
  ],
  entryComponents: [
  ],
  providers: [
    NativeGeocoder
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonComponentsModule {}
