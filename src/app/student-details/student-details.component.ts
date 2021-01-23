import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../student/Student';
import {StudentService} from '../student.service';
import {StudentsListComponent} from '../students-list/students-list.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;

    constructor(private studentService: StudentService, private listComponent: StudentsListComponent) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  updateActive(isActive: boolean){
      this.studentService.updateStudent(this.student.id,
        {
          name: this.student.name,
          age: this.student.age,
          grade: this.student.grade,
          active: isActive}).subscribe(
        data => {
          console.log(data);
          this.student = data as Student;
        },
        error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  deleteStudent(){
      this.studentService.deleteStudent(this.student.id).subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
