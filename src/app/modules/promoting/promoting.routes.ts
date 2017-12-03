import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from 'modules/promoting/pricing/pricing.component';
import { PromotingComponent } from './promoting/promoting.component';

const routes: Routes = [
    {
        path: '',
        component: PromotingComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'pricing',
                component: PricingComponent
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

export class PromotingRoutesModule { }

export const routedComponents = [
    HeaderComponent,
    HomeComponent,
    PricingComponent,
    PromotingComponent
];
