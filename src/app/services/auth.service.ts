import { Injectable, inject } from '@angular/core';
import { WrapperStorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _wrapperStorageService = inject(WrapperStorageService);

  superUser = {
    name: 'admin',
    password: 'admin'
  }

  pass = false;

  constructor() { }

  hasAccess(){
    if (localStorage.getItem('permission') === '1') {
      this.pass = true;
    }
    return this.pass;
  }

  login(name: string, password: string){
    if (name === this.superUser.name && password === this.superUser.password) {
      this._wrapperStorageService.set(name,password,1);
      this.pass = true;
    }else{
      this.pass = false;
    }
  }

  logout(){
    this._wrapperStorageService.deleteAll();
  }
}
