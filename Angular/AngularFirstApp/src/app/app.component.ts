import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world of  AngularFirstApp';

  info ='Google';

  microsoft:string = "MICROSOFT";

  status:boolean = false;

  constructor()
  {
    setTimeout(() => {
      this.status = true;
      
    }, 10000);
  }

  getStatus()
  {
    return this.status;
  }

  // below code ES6 ,pls look into ES6 ,later node is using ES6.
  //callback are easy like setTimeOut()
  clickMe=()=>{
    this.status = false;
  }

  
}
