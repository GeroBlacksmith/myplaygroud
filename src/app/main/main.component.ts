import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { siteContent } from "../strings/site-content";

import { errorMessages } from "../strings/error-messages";

@Component({
selector:'app-main',
templateUrl:'./main.component.html',
styleUrls:['./main.component.css']
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
