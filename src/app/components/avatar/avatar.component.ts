import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

    avatarPath = '../../../assets/avatar-placeholder.png';

    //  O serviço é privado pois não é utilizado no HTML.
    //  foi injetado o serviço de router para navegar para a página inicial.
    constructor(private authService: AuthenticationService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['']);
    }

}
