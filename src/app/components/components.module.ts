import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoginComponent } from 'components/login/login.component';
import { UtilsModule } from 'utils/utils.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
