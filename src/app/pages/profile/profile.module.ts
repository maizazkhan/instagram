import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CommonComponentsModule } from 'src/app/components/common-components/common-components.module';
import { AppProfileComponentsModule } from 'src/app/components/app-profile-components/app-profile-components.module';
import { AppSocialComponentsModule } from 'src/app/components/app-social-components/app-social-components.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonComponentsModule,
    AppProfileComponentsModule,
    AppSocialComponentsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }])
  ],
  declarations: [ProfilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePageModule {}
