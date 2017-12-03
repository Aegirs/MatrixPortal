import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'components/login/login.component';

// import { AuthGuard, AuthMobileGuard } from './guards';

const routes: Routes = [
   /* {   path: 'login',
        component: LoginComponent
    }, */
    {
        path: '',
        loadChildren: './modules/promoting/promoting.module#PromotingModule',
      //  canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {   path: 'server',
        loadChildren: './modules/server/server.module#ServerModule',
    //  canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', resolve: {}, redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [
       // AuthGuard,
       // AuthMobileGuard
    ]
})

export class AppRoutesModule {}

export const routedComponents = [];
