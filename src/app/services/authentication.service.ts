import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isAuthenticated: boolean = false;

    public login() {
        this.isAuthenticated = true;
        return true;
    }

    public logout() {
        this.isAuthenticated = false;
    }
}