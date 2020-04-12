import { Component } from '@angular/core';
import { Project } from '../models/project';

@Component({
    selector: 'app-project-info',
    templateUrl: './project-info.component.html',
    styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {

    project = new Project();

    DescriptionChanged(description: string) {
        this.project.description = description;
    }
}
