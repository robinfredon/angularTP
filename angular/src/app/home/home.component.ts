import { Component, OnInit,NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id : string = "tt4244162";
  constructor() { }

  ngOnInit(): void {
  }

}
