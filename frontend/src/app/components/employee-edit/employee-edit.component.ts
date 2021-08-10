import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Employee } from 'src/app/employee';
import {Location} from '@angular/common';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css'],
})

export class EmployeeEditComponent implements OnInit {

    public id: number = 0;
    public data: any;
    public employee = new Employee();

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private location: Location) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id
        this.getData(this.id);
    }

    public getData(id: number) {
        this.dataService.getEmployeeById(id).subscribe(res => {
            this.data = res;
            this.employee = this.data;
        });
    }

    public updateEmployee() {
        this.dataService.updateEmployee(this.id, this.employee).subscribe(res => {
            // this.location.back();
            this.router.navigateByUrl('/');
        });
    }

}
