/*
* http://usejsdoc.org/
*/
import { EmployeeService } from './test.service';
import { Component} from '@angular/core'; 

@Component({
    selector:'list',
    template:`<br><button (click)="listClick()" class="button">ListEmployee</button>
             <br><br><table style="border:1px solid #C00 width:100%">
                <tr>
                    <th>ID</th>
                    <th>NAME</th> 
                    <th>SALARY</th>
                    <th>DEPARTMENT</th>
                </tr>
        
                <tr *ngFor="let item of employees">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.salary}}</td>
                <td>{{item.dept}}</td>
              
                </tr>
             </table>`,
        
     
      providers:[EmployeeService]     

})

export class ListComponent{
    employees:any[];
    constructor(private _employeeService:EmployeeService){}
  
    listClick(){
        this._employeeService.listEmployee()
        .subscribe(resEmployeeData => this.employees=(resEmployeeData));
     } 
}