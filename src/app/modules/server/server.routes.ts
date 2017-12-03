import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ServerComponent } from 'modules/server/server/server.component';
import { MonitoringComponent } from 'modules/server/monitoring/monitoring.component';
import { SettingsComponent } from 'modules/server/settings';

const routes: Routes = [
    {
        path: '',
        component: ServerComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'monitoring' },
            {
                path: 'monitoring',
                component: MonitoringComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})

export class ServerRoutesModule { }

export const routedComponents = [
    HeaderComponent,
    ServerComponent,
    MonitoringComponent,
    SettingsComponent
];
