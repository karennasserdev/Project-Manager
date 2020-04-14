import { Injectable } from '@angular/core';
import { ProjectDescription } from '../components/models/project-description';

@Injectable({
    providedIn: 'root'
})
export class ProjectInfoServiceService {

    constructor() { }

    projectInfo: ProjectDescription = new ProjectDescription();

    getInfos(): ProjectDescription {
        return this.projectInfo;
    }

    addDescName(description: string) {
        this.projectInfo.description = description;
    }

    addInfoName(name: string) {
        this.projectInfo.name = name;
    }

    addUserName(username: string) {
        this.projectInfo.username = username;
    }

    addBio(bio: string) {
        this.projectInfo.bio = bio;
    }

    addEmail(email: string) {
        this.projectInfo.email = email;
    }

    addTel(tel: string) {
        this.projectInfo.tel = tel;
    }
}
