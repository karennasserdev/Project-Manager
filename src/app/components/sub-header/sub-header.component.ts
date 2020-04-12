import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Project } from '../models/project';

@Component({
    selector: 'app-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {

    constructor(public authService: AuthenticationService) { }

    project = new Project();

    textChanged(title: string) {
        this.project.title = title;
    }
}
