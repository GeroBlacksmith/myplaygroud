import { Usertoken } from './user';
import { UrlSegment } from '@angular/router';
export class Permissions{
  canLoadChildren(user:Usertoken, id:string, segment:UrlSegment[]):boolean{
    return true;
  }

}