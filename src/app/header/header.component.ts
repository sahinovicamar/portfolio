import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  startPage() {
    document.getElementById("startPage").scrollIntoView();
  }

  aboutMe() {
    document.getElementById("aboutMe").scrollIntoView();
  }

  skills() {
    document.getElementById("skills").scrollIntoView();
  }

  portfolio() {
    document.getElementById("portfolio").scrollIntoView();
  }

  contact() {
    document.getElementById("contact").scrollIntoView();
  }


}
