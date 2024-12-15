import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthentificationGuard } from './authentification.guard';

describe('authentificationGuard', () => {
  let guard: AuthentificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentificationGuard);
  });

  const executeGuard: CanActivateFn = (...guardParameters) => 
      guard.canActivate(...guardParameters);

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});