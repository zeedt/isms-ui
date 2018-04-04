import { Component, OnInit } from '@angular/core';
import {GlobalService} from './../global.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.setLogin(true);
    console.log("json " + JSON.stringify(this.globalService.getLogin()));
  };


}
