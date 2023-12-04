import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {canActivate, AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./containers/home/home.module')
      .then(m => m.HomeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'user/:id',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./containers/user/profile/profile.module')
      .then(m => m.ProfileModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./containers/instructions/instructions.module')
      .then(m => m.InstructionsModule)
  },
  {
    path: 'game/start-game',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./containers/game/start-game/start-game.module')
      .then(m => m.StartGameModule)
  },
  {
    path: 'game/spin-wheel',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./containers/game/spin-wheel/spin-wheel.module')
      .then(m => m.SpinWheelModule)
  },
  {
    path: 'game/actions',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./containers/game/game-actions/game-actions.module')
      .then(m => m.GameActionsModule)
  },
  {
    path: '404',
    loadChildren: () => import('./containers/fourOfour/fourOfour.module')
      .then(m => m.FourOfourModule)
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
