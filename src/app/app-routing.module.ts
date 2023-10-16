import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  
  { path: '', component: LayoutComponent ,
  children : [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
