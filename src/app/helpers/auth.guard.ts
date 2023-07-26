import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { storageKeys } from '@app/constants/storage-keys';
import { IAuthStorage } from '@app/models/auth.model';
import { LocalStorageService } from '@app/services/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // get profile
    const authProfile = this.storageService.getValue<IAuthStorage>(
      storageKeys.authProfile
    );

    if (authProfile?.token) {
      // check if route is restricted by role
      if (
        route.data['roles'] &&
        !route.data['roles'].includes(authProfile.role)
      ) {
        // role not authorized so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorized so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
