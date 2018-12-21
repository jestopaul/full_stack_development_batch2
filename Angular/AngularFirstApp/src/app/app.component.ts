import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

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

  name:string="" ;
  rollNo:number;
  bbb;

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

  onSubmit(form:NgForm)
  {

    console.log(form.value.getName);

    this.name = form.value.getName;
    console.log(form.value.getNumber)
    this.rollNo = form.value.getNumber;

    console.log(this.name);
    console.log(this.rollNo);

  
  }

  
}
