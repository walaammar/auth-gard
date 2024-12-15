import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AthentificationService } from './athentification.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AthentificationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if the user has the required role
    //const hasAdminRole = this.authService.hasRole('ROLE_ADMIN');
    if (this.authService.getRole('ROLE_ADMIN')) {
      return true; // Grant access
    }

    // Redirect to login if the user is not authorized
    this.router.navigate(['/login']);
    return false;
  }
}
