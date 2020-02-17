import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth-guard/auth-guard.service';

const routes: Routes = [
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ListPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'messages',
        loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'chats',
        loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'chats',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'chats'
    },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
