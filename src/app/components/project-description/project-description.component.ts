import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-project-description',
    templateUrl: './project-description.component.html',
    styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent {

    avatarPath = '../../../assets/avatar-placeholder.png';

    formPersonal: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        name: new FormControl(null, [Validators.required]),
        username: new FormControl(null, [Validators.required])
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
}
