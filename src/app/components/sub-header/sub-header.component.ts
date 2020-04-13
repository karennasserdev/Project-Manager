import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Project } from '../models/project';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sub-header',
    templateUrl: './sub-header.component.html',
    styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {

    constructor(public authService: AuthenticationService, public router: Router) { }

    project = new Project();

    textChanged(title: string) {
        this.project.title = title;
    }
}
