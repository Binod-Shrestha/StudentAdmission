import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsListComponent} from '../students-list/students-list.component';
import {CreateStudentComponent} from '../create-student/create-student.component';
import {SearchStudentComponent} from '../search-student/search-student.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student', component: StudentsListComponent },
  {path: 'add', component: CreateStudentComponent },
  {path: 'findbyage', component: SearchStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
