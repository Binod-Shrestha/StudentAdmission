import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsListComponent} from '../students-list/students-list.component';
import {CreateStudentComponent} from '../create-student/create-student.component';
import {SearchStudentComponent} from '../search-student/search-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  {path: 'student', component: StudentsListComponent },
  {path: 'add', component: CreateStudentComponent },
  {path: 'findbyage', component: SearchStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
