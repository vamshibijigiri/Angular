import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Employee {
  firstName: string;
  lastName: string;
  salary: number;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() employees: Employee[] = [];

  get highSalaryEmployees(): Employee[] {
    return this.employees.filter(employee => employee.salary > 10000);
  }
}
