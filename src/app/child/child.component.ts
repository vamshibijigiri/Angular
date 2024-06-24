import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  firstName: string;
  lastName: string;
  salary: number;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() employees: Employee[] = [];
  @Output() employeeAdded = new EventEmitter<Employee>();

  newEmployee: Employee = {
    firstName: '',
    lastName: '',
    salary: 0
  };

  get highSalaryEmployees(): Employee[] {
    return this.employees.filter(employee => employee.salary > 10000);
  }

  addEmployee() {
    this.employeeAdded.emit(this.newEmployee);
    this.newEmployee = { firstName: '', lastName: '', salary: 0 }; // reset form
  }
}
