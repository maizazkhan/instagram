import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CommonComponentsModule } from 'src/app/components/common-components/common-components.module';
import { AppSocialComponentsModule } from 'src/app/components/app-social-components/app-social-components.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    TranslateModule,
    CommonComponentsModule,
    AppSocialComponentsModule
  ],
  declarations: [
    ProfileHeaderComponent,
  ],
  exports: [
    ProfileHeaderComponent,
  ],
  entryComponents: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppProfileComponentsModule {}
