import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {StudentServiceService} from "../../service/student-service.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  constructor(private stu: StudentServiceService) { }

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent(){
    this.stu.getStudents().subscribe(
      data =>{
        this.students = data
      }
    )
  }

}
