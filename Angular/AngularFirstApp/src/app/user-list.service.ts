import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { from } from 'rxjs';
import 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:Http) {

   }

   getUsersListFromServer():any{
     return this.http.get('https://jsonplaceholder.typicode.com/users').map(
       (response:Response) =>response.json()
     )
   }
}
