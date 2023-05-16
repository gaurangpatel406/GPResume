import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
import { InterestsComponent } from './interests/interests.component';


const routes: Routes = [{path:'', redirectTo:"/about", pathMatch:"full" },
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'education', component: EducationComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'awards', component: AwardsComponent},
  { path: 'interests', component: InterestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
