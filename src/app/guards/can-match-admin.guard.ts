import { CanMatchFn } from '@angular/router';

export const canMatchAdminGuard: CanMatchFn = (route, segments) => {
  console.log('route in canMatch: ', route)
  console.log('segments in canMatch: ', segments)
  const requiredRole = route.data['role'];
  if(requiredRole === 'admin')
    return true;
  else 
  return false
};
export const canMatchUserGuard: CanMatchFn = (route, segments) => {
  console.log('route in canMatch: ', route)
  console.log('segments in canMatch: ', segments)
  const requiredRole = route.data['role'];
  if(requiredRole === 'user')
    return true;
  else 
    return false
  
};

