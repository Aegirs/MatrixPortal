import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: []
})
export class UtilsModule { }
