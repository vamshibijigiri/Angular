import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

interface Employee {
  firstName: string;
  lastName: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: Employee[] = [
    { firstName: 'John', lastName: 'Doe', salary: 1200 },
    { firstName: 'Jane', lastName: 'Doe', salary: 8000 },
    { firstName: 'Jim', lastName: 'Beam', salary: 15000 }
  ];
}
