import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../student/Student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Observable<Student[]>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  deleteStudents(): void{
    this.studentService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  reloadData(): void{
    this.students = this.studentService.getStudentList();
}
}
