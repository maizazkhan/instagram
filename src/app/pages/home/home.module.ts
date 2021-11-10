import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CommonComponentsModule } from 'src/app/components/common-components/common-components.module';
import { AppSocialComponentsModule } from 'src/app/components/app-social-components/app-social-components.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonComponentsModule,
    AppSocialComponentsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
