import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  aboutMe() {
    document.getElementById("aboutMe").scrollIntoView();
  }

  contact() {
    document.getElementById("contact").scrollIntoView();
  }

}
