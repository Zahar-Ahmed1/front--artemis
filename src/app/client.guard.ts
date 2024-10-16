import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./services/auth.service";
import is = jasmine.is;

export const clientGuard: CanActivateFn =
  (route, state) =>
  {
    const router = inject(Router);
    const isCreate = inject(AuthService).isCreate();
    if (isCreate)
      return true;
    else {
      router.navigate(['forbidden'])
    return false;
  }

};
