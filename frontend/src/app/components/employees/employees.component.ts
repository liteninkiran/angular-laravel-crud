import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
})

export class EmployeesComponent implements OnInit {

    public employees: any;
    public employee = new Employee();

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees() {
        this.dataService.getEmployees().subscribe(res => {
            this.employees = res;
        });
    }

    public addEmployee() {
        this.dataService.addEmployee(this.employee).subscribe(res => {
            this.getEmployees();
        });
    }

    public deleteEmployee(id: number) {
        this.dataService.deleteEmployee(id).subscribe(res => {
            this.getEmployees();
        });
    }

}
