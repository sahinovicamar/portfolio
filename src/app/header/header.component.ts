import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-navbar');

    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is__active');
      mobile_menu.classList.toggle('is__active');
    });
  }
  
  toggleMobileNav() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-navbar');

    menu_btn.classList.toggle('is__active');
    mobile_menu.classList.toggle('is__active');
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
