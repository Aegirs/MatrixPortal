import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PromotingRoutesModule, routedComponents } from './promoting.routes';
import { UtilsModule } from 'utils/utils.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        UtilsModule,
        PromotingRoutesModule
    ],
  declarations: [
        routedComponents
],

  providers: [],
  bootstrap: [],
  exports: [
      HeaderComponent
  ]
})
export class PromotingModule { }
