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

    public deleteEmployee(id: number) {
        return this.httpClient.delete(`http://127.0.0.1:8000/api/employees/delete/${id}`);
    }

    public getEmployeeById(id: number) {
        return this.httpClient.get(`http://127.0.0.1:8000/api/employees/${id}`);
    }

    public updateEmployee(id: number, employee: Employee) {
        return this.httpClient.put(`http://127.0.0.1:8000/api/employees/update/${id}`, employee);
    }

}
