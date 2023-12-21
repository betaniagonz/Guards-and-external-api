import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

interface storageValue<T>{
  value: T;
}

@Injectable({
  providedIn: 'root'
})
export class WrapperStorageService {

  set (name: string, password: string, permission: number): void{
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
    localStorage.setItem('permission', permission.toString());
  }

  deleteAll(): void{
    localStorage.clear();
  }
}
