import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
// import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: '', component: StartPageComponent },
  { path: '', component: AboutMeComponent },
  { path: '', component: MySkillsComponent },
  { path: '', component: ProjectsComponent },
  { path: '', component: ContactComponent }
  // { path: '', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
