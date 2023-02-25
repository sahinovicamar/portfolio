import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: '', component: StartPageComponent },
  { path: '', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
