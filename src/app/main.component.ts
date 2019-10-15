import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
selector:'app-main',
template:`<h1>Main Component</h1>
<button (click)="o()">o</button>`
})
export class MainComponent{
  constructor(private router:Router){}
o(){
  // this.router.navigate(['pie',{b:"c",d:1}]);
  this.router.navigate(['/pie'],{queryParams:{id:1, order:'popular'}});
}
}
