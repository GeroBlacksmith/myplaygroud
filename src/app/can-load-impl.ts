import { Injectable } from '@angular/core';
import { Route, CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Permissions } from './Permissions';
import { Usertoken } from './user';

@Injectable()
export class CanLoadImpl implements CanLoad{
  constructor(private permissions: Permissions, private currentUser: Usertoken){

  }
  canLoad(route:Route, segments:UrlSegment[]):Observable<boolean>{
    return this.permissions.canLoadChildren(this.currentUser, route, segments);
  }
}