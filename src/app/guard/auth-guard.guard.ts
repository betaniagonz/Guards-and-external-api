import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.hasAccess();
}
