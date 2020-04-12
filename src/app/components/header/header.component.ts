import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    logoPath = '../../../assets/logo.svg';
    logoPath2 = '../../../assets/logo2.svg';

    // O serviço é publico para ser utilizado no HTML.
    constructor(public authService: AuthenticationService) { }

}
