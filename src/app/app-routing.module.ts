import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [{ path: '', component: LoginFormComponent }, { path: 'board', component: BoardComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }