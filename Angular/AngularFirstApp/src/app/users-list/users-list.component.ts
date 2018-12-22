import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { from } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // newData = [];//initializing empty array for saving data from api service;

  fetchDatas = [];


  //page load time data fetching process start
  constructor(private userListService: UserListService) {
    this.onGetData();
  }

  ngOnInit() {
  }

  onGetData() {

    this.userListService.getUsersListFromServer().subscribe(
      ( newData:any[])=>{
        console.log(newData);
        this.fetchDatas= newData;
      },
      (error)=>console.log(error)
    );
  }

}
