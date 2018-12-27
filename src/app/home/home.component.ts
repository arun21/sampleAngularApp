import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private data1: DataService) { }

  ngOnInit() {
    this.data1.getUsers().subscribe(data1 => {
      this.users = data1;
      console.log(this.users);
    });
  }

}
