import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BoardComponent } from './components/board/board.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivateTeam } from './can-activate/can-activate-autenticaded';

const routes: Routes = [{ path: '', component: LoginFormComponent },
{ path: 'board', component: BoardComponent, canActivate: [CanActivateTeam]},
{ path: 'description', component: ProjectDescriptionComponent, canActivate: [CanActivateTeam] }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

@Injectable({ providedIn: 'root' })

export class AppRoutingModule {
}