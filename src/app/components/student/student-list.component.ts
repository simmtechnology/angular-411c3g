import { Component, OnInit } from '@angular/core';
import { students } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentComponent {
  students = students;
}
