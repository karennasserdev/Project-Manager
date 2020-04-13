import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateTeam implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (!this.authService.isAuthenticated) {
            this.router.navigate(['/']);
            return false;
        }

        return this.authService.isAuthenticated;
    }
}