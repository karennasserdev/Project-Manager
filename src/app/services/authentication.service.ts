import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isAuthenticated: boolean = false;

    constructor() {

        if (localStorage.getItem('pm-auth') == 'true') {
            this.isAuthenticated = true;
        } else {
            this.isAuthenticated = false;
        }
    }

    public login() {
        this.isAuthenticated = true;
        localStorage.setItem('pm-auth', 'true');
        return true;
    }

    public logout() {
        localStorage.setItem('pm-auth', 'false');
        this.isAuthenticated = false;
    }
}