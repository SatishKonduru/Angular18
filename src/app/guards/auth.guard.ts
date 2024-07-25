import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("route in guard: " , route)
  console.log("state in guard: " , state)

  if(route.routeConfig.path==='adminDashboard' || route.routeConfig.path==='userDashboard')
    return true;
  else
  return false
};
