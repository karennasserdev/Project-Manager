import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BoardComponent } from './components/board/board.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ColumnComponent } from './components/column/column.component';
import { CardComponent } from './components/card/card.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { AddColumnComponent } from './components/add-column/add-column.component';
import { ModalColumnComponent } from './components/modal-column/modal-column.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { ModalViewCardComponent } from './components/modal-view-card/modal-view-card.component';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';
import { CanActivateTeam } from './can-activate/can-activate-autenticaded';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginFormComponent,
        BoardComponent,
        AvatarComponent,
        ColumnComponent,
        CardComponent,
        SubHeaderComponent,
        ProjectInfoComponent,
        AddColumnComponent,
        ModalColumnComponent,
        ModalCardComponent,
        LabelInputComponent,
        ModalViewCardComponent,
        ProjectDescriptionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [CanActivateTeam],
    bootstrap: [AppComponent
    ]
})
export class AppModule { }
