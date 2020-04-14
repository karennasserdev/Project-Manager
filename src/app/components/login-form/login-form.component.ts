import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {



    submitted: boolean = false;

    form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        checkbox: new FormControl(null, Validators.requiredTrue),
    });

    constructor(private authService: AuthenticationService, private router: Router) { }

    submit(): boolean {

        this.submitted = true;

        //Se o form for válido...
        if (this.form.valid) {
            //Se login for true o router passa para a página do board...
            if (this.authService.login()) {
                this.router.navigate(['board']);
            }
            return false;
        }
    }

    get email() { return this.form.get('email') };

    isEmailInvalid(): boolean {
        return this.email.invalid && (this.email.dirty || this.email.touched);
    }

    get password() { return this.form.get('password') };
    isPasswordInvalid(): boolean {
        return this.password.invalid && (this.password.dirty || this.password.touched);
    }

    get checkbox() { return this.form.get('checkbox') };
    isCheckboxInvalid(): boolean {
        return this.checkbox.invalid && this.submitted;
    }

    isFormInvalid() {
        return this.email.invalid || this.password.invalid;
    }
}
