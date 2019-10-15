import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
@Injectable()
export class GuardLoadService implements CanLoad{
  constructor(private router: Router){

  }
  canLoad():boolean{
    return false;
  }
}