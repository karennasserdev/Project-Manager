import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isAuthenticated: boolean = true; //trocar pra false depois

    public login() {
        this.isAuthenticated = true;
        return true;
    }

    public logout() {
        this.isAuthenticated = false;
    }
}