import { Component, OnInit } from '@angular/core';
import {Student} from '../student/Student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
age: number;
students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  this.age = 0;
  }
  private searchStudent(): void{
    this.studentService.getStudentByAge(this.age).subscribe(students => this.students = students );
  }
  onSubmit(): void{
    this.searchStudent();
  }



}
