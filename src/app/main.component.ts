import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { siteContent } from "./strings/site-content";

import { errorMessages } from "./strings/error-messages";

@Component({
selector:'app-main',
template:`
<h1>{{title}}</h1>
<h2>Main Component</h2>
<div>
  <button (click)="o()">navigate to pie</button>
</div>
<div>
  <button (click)="showMessage()">Test Message</button>
</div>
  `,
styles:[`
button{ 
  width:200px;
  margin:10px;
  border:none;
  padding:10px;
  transition:300ms all ease;
  }
button:hover{
  background:#444;cursor:
  pointer;color:white;
  }
`]
})
export class MainComponent{

  title = siteContent.title;
  constructor(private router:Router){}
  o(){
    // this.router.navigate(['pie',{b:"c",d:1}]);
    this.router.navigate(['/pie'],{queryParams:{id:1, order:'popular'}});
  }
  showMessage(){
    console.error(errorMessages.testMessage)
  }
}
