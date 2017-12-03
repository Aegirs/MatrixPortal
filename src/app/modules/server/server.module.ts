import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

import { ServerRoutesModule, routedComponents } from './server.routes';
import { UtilsModule } from 'utils/utils.module';
import { ServerComponent } from './server/server.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeServerConfigComponent } from 'modules/server/settings';

@NgModule({
  declarations: [
    routedComponents,
    ServerComponent,
    MonitoringComponent,
    SettingsComponent,
    HomeServerConfigComponent
],
  imports: [
    CommonModule,
    ServerRoutesModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: []
})
export class ServerModule { }
