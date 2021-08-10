import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
})

export class EmployeesComponent implements OnInit {

    public employees: any;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    public getEmployees() {
        this.dataService.getEmployees().subscribe(res => {
            this.employees = res;
        });
    }

}
