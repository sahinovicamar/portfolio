import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {

  }

  startPage() {
    document.getElementById("startPage").scrollIntoView();
  }

  displayImprint() {
    document.querySelector('.imprint_popup').classList.toggle('is_active');
  }

  hideImprint() {
    document.querySelector('.imprint_popup').classList.remove('is_active');
  }

  displayDataPrivacy() {
    document.querySelector('.dataprivacy_popup').classList.toggle('is_active');
  }

  hideDataPrivacy() {
    document.querySelector('.dataprivacy_popup').classList.remove('is_active');
  }

  sectionHero() {
    document.getElementById("sectionHero").scrollIntoView();
  }
}
