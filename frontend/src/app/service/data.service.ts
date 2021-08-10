import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
    providedIn: 'root',
})

export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    public getEmployees() {
        return this.httpClient.get('http://127.0.0.1:8000/api/employees');
    }

    public addEmployee(employee: Employee) {
        return this.httpClient.post('http://127.0.0.1:8000/api/employees/create', employee);
    }
}
