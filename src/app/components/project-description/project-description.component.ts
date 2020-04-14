import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectInfoServiceService } from 'src/app/services/project-info-service.service';
import { ProjectDescription } from '../models/project-description';

@Component({
    selector: 'app-project-description',
    templateUrl: './project-description.component.html',
    styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

    projectInfo: ProjectDescription = new ProjectDescription();

    constructor(private infoService: ProjectInfoServiceService) {

    }

    ngOnInit(): void {
        this.projectInfo = this.infoService.getInfos();
        this.Description.setValue(this.projectInfo.description);
        this.email.setValue(this.projectInfo.email);
        this.name.setValue(this.projectInfo.name);
        this.userName.setValue(this.projectInfo.username);
        this.Bio.setValue(this.projectInfo.bio);
        this.Tel.setValue(this.projectInfo.tel);
    }

    avatarPath = '../../../assets/avatar-placeholder.png';

    formPersonal: FormGroup = new FormGroup({
        desc: new FormControl(null),
        email: new FormControl(null, [Validators.required, Validators.email]),
        name: new FormControl(null, [Validators.required]),
        username: new FormControl(null, [Validators.required]),
        bio: new FormControl(null),
        tel: new FormControl(null)
    });

    get email() { return this.formPersonal.get('email') };
    isEmailInvalid(): boolean {
        return this.email.invalid && (this.email.dirty || this.email.touched);
    }

    get name() { return this.formPersonal.get('name') };
    isNameInvalid(): boolean {
        return this.name.invalid && (this.name.dirty || this.name.touched);
    }

    get userName() { return this.formPersonal.get('username') };
    isUserInvalid(): boolean {
        return this.userName.invalid && (this.userName.dirty || this.userName.touched);
    }

    get Bio() { return this.formPersonal.get('bio') }

    get Tel() { return this.formPersonal.get('tel') }

    get Description() { return this.formPersonal.get('desc') }


    onDescChange(e) {
        this.infoService.addDescName(this.Description.value);
    }

    onNameChange(e) {
        this.infoService.addInfoName(this.name.value);
    }

    onUserNameChange(e) {
        this.infoService.addUserName(this.userName.value);
    }

    onBioChange(e) {
        this.infoService.addBio(this.Bio.value);
    }

    onEmailChange(e) {
        this.infoService.addEmail(this.email.value);
    }

    onTelChange(e) {
        this.infoService.addTel(this.Tel.value);
    }
}
